const jwt = require("jsonwebtoken");
const url = require("url");

// this is the signing key that Metabase provides in settings->admin->auth->JWT, which is used to sign the JWT token for interactive embedding
const JWT_SIGNING_KEY_INTERACTIVE_EMBEDDING = process.env.JWT_SIGNING_KEY_INTERACTIVE_EMBEDDING;
// this is the signing key that Metabase provides in settings->embedding->static embedding, which is used to sign the JWT token for static embedding, see that the key is different from the one used for interactive embedding
const JWT_SIGNING_KEY_STATIC_EMBEDDING = process.env.JWT_SIGNING_KEY_STATIC_EMBEDDING;
const METABASE_URL = process.env.METABASE_URL;

// this is where we sign the static embedded dashboard or question with the static embedding signing key. We're using the id as the resource, and an empty object as the params, but the params object can be used to pass fixed filter values to the dashboard
const signStaticEmbeddedResource = (resource, resource_id) => {
    const resourceObj = { [resource]: resource_id };
    return jwt.sign(
        {
            resource: resourceObj,
            params: {},
        },
        JWT_SIGNING_KEY_STATIC_EMBEDDING
    );
};

const server = Bun.serve({
    port: 9090,
    async fetch(req) {
        const reqUrl = new URL(req.url);
        const path = reqUrl.pathname;
        const params = reqUrl.searchParams;
        switch (path) {
            case '/api/health': // health check endpoint to make the frontend aware that the backend is running. It's not checking for anything at all, just returning a 200 status code
                return new Response(null, { status: 200 });
            case '/api/static_dashboard': // this is the endpoint that the frontend will call to get the static embedded dashboard URL
                return Response.redirect(
                    url.format({
                        pathname: `${METABASE_URL}/embed/dashboard/${signStaticEmbeddedResource('dashboard', 1)}`, // dashboard id is always gonna be 1 for this example, as we're just generating 1 dashboard only
                        params: {}
                    })
                    , 301);
            case '/api/static_question': // this is the endpoint that the frontend will call to get the static embedded dashboard URL
                return Response.redirect(
                    url.format({
                        pathname: `${METABASE_URL}/embed/question/${signStaticEmbeddedResource('question', 4)}`, // dashboard id is always gonna be 1 for this example, as we're just generating 1 dashboard only
                        params: {}
                    })
                    , 301);
            case '/api/auth': // this is the endpoint that the frontend will call to get the SSO URL
                const isSdkRequest = params.get('response') === 'json';

                const user = {
                    email: "someone@somedomain.com",
                    first_name: "Someone",
                    last_name: "Somebody",
                    exp: Math.floor(Date.now() / 1000) + 60 * 60, // this is the expiration time for the token, in this case, it's 1 hour
                    groups: ["viewer"], // groups property is optional, we're sending this to show how you can configure group mappings in Metabase
                };

                const token = jwt.sign(
                    {
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        exp: user.exp,
                        groups: user.groups,
                    },
                    JWT_SIGNING_KEY_INTERACTIVE_EMBEDDING
                );

                if (isSdkRequest) {
                    // if the request is coming from the SDK, we return the token directly
                    return Response.json({ jwt: token },
                        {
                            headers: {
                                'Access-Control-Allow-Origin': 'http://localhost:8080',
                                'Access-Control-Allow-Credentials': 'true',
                                'Access-Control-Allow-Methods': 'GET'
                            }
                        });
                } else {
                    // if the request is not coming from the SDK, we redirect to the Metabase SSO URL with the token
                    // the return_to parameter is optional, but it's useful to redirect the user back to the frontend after the SSO login
                    return Response.redirect(
                        url.format({
                            pathname: `${METABASE_URL}/auth/sso`,
                            query: {
                                jwt: token,
                                return_to: params.get('return_to'),
                                // you can also include more parameters to customize the features you want to expose: https://www.metabase.com/docs/latest/embedding/interactive-embedding#showing-or-hiding-metabase-ui-components
                            },
                        }),
                        301);
                }
            default:
                return new Response(null, { status: 404 });
        }
    },
});

console.log(`Backend running on ${server.url}:${server.port}`);