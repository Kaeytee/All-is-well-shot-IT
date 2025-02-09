import React from 'react';
import './QuestionButton.css';
import { useNavigate } from 'react-router-dom';
import button from '../../Assets/ask.png';

const QuestionButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ask-question');
  };

  return (
    <button className="question-button" onClick={handleClick}>
      <img src={button} alt="Question Button" />
    </button>
  );
};

export default QuestionButton;