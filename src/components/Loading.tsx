import React from 'react';

const Loading: React.FC = () => {

  return (
    <div id="loading">
      <div className="circle"></div>
      <div className="circle circle-small"></div>
    </div>
  );
}

export default Loading;