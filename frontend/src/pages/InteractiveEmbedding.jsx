import React from 'react';

const Interactive = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      <p>
        You can show or hide Metabase UI components on interactive embedding to adapt the experience to your use case, please check our documentation about the possibilities&nbsp;
        <a href="https://www.metabase.com/docs/latest/embedding/interactive-embedding#showing-or-hiding-metabase-ui-components" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.
      </p>
      <iframe 
        src={`${backend}/api/auth?return_to=http://localhost:3000/dashboard/1?side_nav=true&top_nav=true`}
        className="w-full h-[calc(100vh-12rem)] rounded-lg"
        title="Analytics Dashboard"
      />
    </div>
  );
};

export default Interactive;