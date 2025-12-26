import React from 'react';

const StaticCard = () => {
  return (
    <div>
      <p>
        You can also resize the iframe to the viewport configuration with iframe-resizer. It's not included in this demo but you can check more details in our&nbsp;
        <a href="https://www.metabase.com/docs/latest/embedding/static-embedding#resizing-dashboards-to-fit-their-content" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>documentation</a>.
      </p>
      <iframe 
        src="http://localhost:9090/api/static_question"
        className="w-full h-[calc(100vh-12rem)] rounded-lg"
        title="Metrics Dashboard"
      />
    </div>
  );
};

export default StaticCard;