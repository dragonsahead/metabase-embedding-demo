# Metabase embedding sample

All the embedding types of Metabase in the same place

# Components

1) Metabase: running on localhost:3000 with a@b.com/metabot1 as the password
2) backend: needed for generating the signed URL's and SSO. Served in localhost:9090
3) frontend: a react application that calls the backend. Served in localhost:8080
4) setup container

## What does the setup container do?

This container will:
- set up Metabase with the admin credentials that are stated above
- connect Metabase to the database that is passed on the connection_string environment variable that's on the docker-compose.yml
- generate an x-ray about the table that's set in the table environment variable on the docker-compose.yml
- enable embedding for this new dashboard (this is to make static embedding to work)
- create a user and a group + permissions (this is optional)

# How to run

You can run all these components isolated and locally on your computer but we recommend that you use Docker to start all the components.

1) install Docker
2) pull this repository
3) modify the docker-compose.yaml with your Metabase token + your data warehouse connection string and the table you want to generate a dashboard from
4) just do `docker compose up` and wait for everything to start
5) go to localhost:8080 where the frontend will be running

## Limitations

- Right now the application supports connecting to a Postgres or MySQL DW (this is because the python script was configured to do so). Metabase supports way more DW's, so we'll have to check how we pass the attributes in Metabase for those and add these connections to the python setup script

## To do

- Add more styling to the SDK embedding
- Add more customizations to the static and interactive embedding