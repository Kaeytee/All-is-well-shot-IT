import React from 'react';
import './Styles/QuestionPage.css';
import { useNavigate } from 'react-router-dom';

interface QuestionPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionPage: React.FC<QuestionPageProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to send the question to the company
    alert('Your question has been submitted!');
  };

  const faqItems = [
    { question: 'How do I ask a question?', answer: 'Click on the "Ask a Question" button and fill out the form.', link: '/ask-question' },
    { question: 'What is the response time?', answer: 'We typically respond within 24-48 hours.', link: '/book-us' },
    { question: 'Can I edit my question?', answer: 'Yes, you can edit your question within 24 hours of submission.', link: '/ask-question' },
    { question: 'Where can I find the rate card?', answer: 'You can find the rate card on the Rate Card page.', link: '/ratecard' },
    { question: 'How do I book a service?', answer: 'Visit the Book Us page to book a service.', link: '/book-us' },
  ];

  return (
    <div className="question-page">
	
      <main className="flex-1">
        <h1>Ask a Question</h1>
        <form onSubmit={handleSubmit}>
          <textarea placeholder="Type your question here..." required></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <ul>
            {faqItems.map((item, index) => (
              <li key={index} onClick={() => navigate(item.link)}>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default QuestionPage;