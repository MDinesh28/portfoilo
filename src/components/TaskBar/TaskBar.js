import React from 'react';
import './TaskBar.css';

function TaskBar() {
  return (
    <nav className="taskbar">
      <ul>
        <li><a href="#introduction">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#github-repos">GitHub Repositories</a></li>
      </ul>
    </nav>
  );
}

export default TaskBar;
