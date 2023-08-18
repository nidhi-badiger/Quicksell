import React from 'react';
import './Topbar..css'; 

const TopBar = () => {
  const names = ['Name 1', 'Name 2', 'Name 3', 'Name 4'];

  return (
    <div className="top-bar">
      {names.map((name, index) => (
        <div className="name-container" key={index}>
          <span className="name">{name}</span>
          <span className="add-icon">+</span>
        </div>
      ))}
    </div>
  );
};

export default TopBar;
