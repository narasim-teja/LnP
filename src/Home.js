import React from 'react';
import CourseCard from './CourseCard';
import './Styles.css'; // Import the CSS file

function Home() {
  return (
    <div className="course-page">
      <h1 className="course-title">Welcome to Learn and Plant</h1>
      <h1>Courses</h1>
      <div className="course-card">
        <CourseCard title="Vechain" />
      </div>
      <div className="course-card">
        <CourseCard title="Ethereum" />
      </div>
      <div className="course-card">
        <CourseCard title="Cryptography" />
      </div>
      <div className="course-card">
        <CourseCard title="Consensus Algorithms" />
      </div>
      {/* Add more courses if needed */}
    </div>
  );
}

export default Home;
