import React, { useState } from 'react';
import './Styles.css'; // Import your CSS for styling

const Quiz = () => {
  // Sample questions and options
  const questions = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Highly Technical Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which programming language is often used for web development?',
      options: ['Python', 'Java', 'JavaScript', 'C++'],
      correctAnswer: 'JavaScript',
    },
    {
      question: 'What is the purpose of CSS?',
      options: ['To structure web pages', 'To create interactive web applications', 'To style web pages', 'To store data'],
      correctAnswer: 'To style web pages',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false); // Control whether to show the quiz
  const [quizCompleted, setQuizCompleted] = useState(false); // Control whether the quiz is completed

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // All questions are answered, quiz completed
      setQuizCompleted(true);
    }
  };

  const startQuiz = () => {
    setShowQuiz(true); // Show the quiz when the button is clicked
  };

  return (
    <div className="quiz-container">
      <h1>Certification Quiz</h1>
      {!showQuiz ? (
        <div>
          <button className='quiz-button' onClick={startQuiz}>Start here</button>
        </div>
      ) : (
        <div>
          {quizCompleted ? (
            <div className="result-container">
              <h2>Quiz Completed!</h2>
              <p>Your Score: {score} / {questions.length}</p>
            </div>
          ) : (
            <div className="question-container">
              <h2>Question {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
              <ul className="options-list">
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
