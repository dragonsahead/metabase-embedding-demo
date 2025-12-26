import React from 'react';

const StaticDashboard = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      <p>
        You can also resize the iframe to the viewport configuration with iframe-resizer. It's not included in this demo but you can check more details in our&nbsp;
        <a href="https://www.metabase.com/docs/latest/embedding/static-embedding#resizing-dashboards-to-fit-their-content" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>documentation</a>.
      </p>
      <iframe 
        src={`${backend}/api/static_dashboard`}
        className="w-full h-[calc(100vh-12rem)] rounded-lg"
        title="Metrics Dashboard"
      />
    </div>
  );
};

export default StaticDashboard;