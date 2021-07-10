import React from 'react';

const Guide = ({ title, content }) => {
  return (
    <li style={{ marginBottom: '10px' }}>
      <div className="grey">{title}</div>
      <div className="white">{content}</div>
    </li>
  );
};

export default Guide;
