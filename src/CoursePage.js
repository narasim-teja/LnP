import React from 'react';
import Module from './Module';
import { useParams } from 'react-router-dom';
import './Styles.css'; // Import the CSS file
import Quiz from './Quiz';

function CoursePage() {
  const { title } = useParams();

  return (
    <div className="course-page">
      <h1 className="course-title">{title.toUpperCase()}</h1>
      <h2>Course Introduction</h2>
      <div>
        <button className="free-button">Free</button>
        <button className="premium-button">Premium</button>
      </div>
      <Module title="Module 1" />
      <Module title="Module 2" />
      <Module title="Module 3" />
      <Module title="Module 4" />
      <Quiz/>
      {/* Add more modules if needed */}
    </div>
  );
}

export default CoursePage;
