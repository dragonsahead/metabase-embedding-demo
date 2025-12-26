import React, { useEffect } from 'react';

const EmbeddedAnalyticsJS = () => {
  useEffect(() => {
    // Load the Metabase embed script
    const script = document.createElement('script');
    script.src = `${import.meta.env.VITE_METABASE_INSTANCE_URL}/app/embed.js`;
    script.defer = true;
    document.head.appendChild(script);

    // Define the configuration
    window.defineMetabaseConfig = (config) => {
      window.metabaseConfig = config;
    };

    // Set up the config
    window.defineMetabaseConfig({
      instanceUrl: import.meta.env.VITE_METABASE_INSTANCE_URL,
      useExistingUserSession: true, // For development/testing
      theme: {
        colors: {
          background: "#ffffff",
        },
      },
    });

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(`script[src*="${import.meta.env.VITE_METABASE_INSTANCE_URL}/app/embed.js"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <h2>Embedded Analytics JS</h2>
      <p>
        This demonstrates the new Embedded Analytics JS feature from Metabase.
        It allows embedding Metabase components using custom HTML elements.
        For more information, check the{' '}
        <a
          href="https://www.metabase.com/docs/latest/embedding/embedded-analytics-js"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          documentation
        </a>.
      </p>

      <div className="mt-6">
        <h3>Example Dashboard Embed:</h3>
        <div className="border rounded-lg p-4 bg-gray-50">
          {/* Placeholder for the embedded dashboard */}
          <metabase-dashboard
            dashboard-id="1"
            with-title="true"
            with-downloads="false"
          ></metabase-dashboard>
        </div>
      </div>

      <div className="mt-6">
        <h3>Example Question Embed:</h3>
        <div className="border rounded-lg p-4 bg-gray-50">
          {/* Placeholder for the embedded question */}
          <metabase-question
            question-id="1"
            with-title="true"
            with-downloads="false"
          ></metabase-question>
        </div>
      </div>

      <div className="mt-6">
        <h3>Query Builder Embed:</h3>
        <div className="border rounded-lg p-4 bg-gray-50">
          {/* Placeholder for the embedded query builder */}
          <metabase-question
            question-id="new"
            is-save-enabled="true"
          ></metabase-question>
        </div>
      </div>
    </div>
  );
};

export default EmbeddedAnalyticsJS;
