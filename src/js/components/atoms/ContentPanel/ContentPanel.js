import React from 'react';

import './ContentPanel.css';

const ContentPanel = ({ children, className }) => {
  return <div className={`ContentPanel ${className}`}>{children}</div>;
};

export default ContentPanel;
