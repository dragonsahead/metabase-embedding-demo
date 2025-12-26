import React from 'react';

const Questions = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      <p>
        Note: You can also control the location of the iframe with postMessage. For more information,&nbsp;
        <a 
          href="https://www.metabase.com/docs/latest/embedding/interactive-embedding#supported-postmessage-messages-to-embedded-metabase" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }} // yes, inline styling is wrong, sorry about that
        >check our documentation</a>
      </p>
      <br></br>
      <iframe 
        src={`${backend}/api/auth?return_to=http://localhost:3000/question/new`}
        className="w-full h-[calc(100vh-12rem)] rounded-lg"
        title="Questions Section"
      />
    </div>
  );
};

export default Questions;