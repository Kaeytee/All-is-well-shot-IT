import React, { useState, useEffect } from 'react';
import './QuestionButton.css';
import { useNavigate, useLocation } from 'react-router-dom';
import button from '../../Assets/ask.png';

const QuestionButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate('/ask-question');
  };

  // Do not render the button on the ask-question page
  if (location.pathname === '/ask-question') {
    return null;
  }

  return (
    <button className="question-button" onClick={handleClick}>
      <img src={button} alt="Question Button" />
      <div className={`tooltip ${showTooltip ? 'show' : ''}`}>Click me for answers</div>
    </button>
  );
};

export default QuestionButton;