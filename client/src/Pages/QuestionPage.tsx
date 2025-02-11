import React, { useState } from 'react';
import './Styles/QuestionPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface QuestionPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionPage: React.FC<QuestionPageProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ question: '' });

  const API_BASE_URL = "https://backend-service.onrender.com";

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log('Submitting form data:', formData);
      await axios.post(`${API_BASE_URL}/send-question-email`, formData);
      setIsSubmitted(true);
      setIsError(false);
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitted(true);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
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
          <textarea 
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            placeholder="Type your question here..." 
            required
          ></textarea>
          <button type="submit">{isLoading ? 'Submitting...' : 'Submit'}</button>
        </form>
        {isSubmitted && (
          <div className={`p-4 rounded-md text-center ${isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
            {isError ? 'Error submitting your question. Please try again.' : 'Thank you! Your question has been submitted!'}
          </div>
        )}
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