import React from 'react';
import { useNavigate } from 'react-router-dom';

function CourseCard({ title }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/course/${title.toLowerCase()}`)}>
      {title}
    </div>
  );
}

export default CourseCard;
