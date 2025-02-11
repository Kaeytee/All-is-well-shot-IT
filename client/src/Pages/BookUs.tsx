import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from "../Components/ui/input.tsx";
import { Textarea } from "../Components/ui/textarea.tsx";
import { Button } from "../Components/ui/button.tsx";
import axios from 'axios';

const BookUs = () => {
  const location = useLocation();
  const bookingData = location.state;

  // Format the booking details for the textarea
  const formatBookingDetails = () => {
    if (!bookingData) return '';
    
    return `Package: ${bookingData.title}
Price: GHC ${bookingData.fee}
Type: ${bookingData.description}
Details:
${bookingData.detail1 || ''}
${bookingData.detail2 || ''}
${bookingData.detail3 || ''}`;
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', // This will be set to recipientEmail
    service: bookingData?.title || '', // Initialize with booking title if available
    message: formatBookingDetails(), // Initialize with formatted booking details
    recipientEmail: '' // Add recipient email field
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      email: name === 'recipientEmail' ? value : prev.email // Update email when recipientEmail changes
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log('Submitting form data:', formData);
      await axios.post('https://server-sable-psi.vercel.app/send-email', formData);
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

  const handleRetry = () => {
    setIsSubmitted(false);
    setIsError(false);
  };

  return (
    <div className="w-[80%] mx-auto px-4 py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-2xl font-normal">Booking Form</h1>
        <p className="text-muted-foreground font-light">
          We appreciate your interest in our videography services. Remember to provide as much information as possible to help craft a
          tailored videography package that meets your needs and ensures a successful outcome for your event.
        </p>
      </div>

      {isSubmitted ? (
        <div className={`p-4 rounded-md text-center ${isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
          {isError ? (
            <>
              <p>Error submitting your form. Please try again.</p>
              <Button onClick={handleRetry} className="mt-4 bg-white text-black hover:bg-gray-200">
                Return to Form
              </Button>
            </>
          ) : (
            'Thank you! Your submission has been received!'
          )}
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">NAME</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="rounded-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">PHONE NUMBER</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Eg: +233503245678"
                className="rounded-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">EMAIL ADDRESS</label>
              <Input
                name="recipientEmail"
                type="email"
                value={formData.recipientEmail}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="rounded-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">ENTER SERVICE</label>
              <Input
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="Enter the service"
                className="rounded-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">MESSAGE</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Hi there, I want to book a service."
                className="min-h-[150px] rounded-none"
                required
              />
            </div>
            
            <Button type="submit" className="w-full rounded-none bg-black text-white hover:bg-black/90 ">
              {isLoading ? 'Submitting...' : 'SUBMIT'}
            </Button>
          </form>
          <hr className="my-32 border-gray-300" />
        </>
      )}
    </div>
  );
};

export default BookUs;