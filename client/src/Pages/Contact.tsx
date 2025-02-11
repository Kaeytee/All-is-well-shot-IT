import React, { useState } from 'react';
import axios from 'axios';
import contact from '../Assets/contact.png';
import { Input } from "../Components/ui/input.tsx";
import { Textarea } from "../Components/ui/textarea.tsx";
import { Button } from "../Components/ui/button.tsx";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      await axios.post('https://server-sable-psi.vercel.app/send-contact-email', formData);
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

  return (
    <div className="relative w-full md:w-11/12 lg:w-4/5 overflow-hidden mb-16 md:mb-24 lg:mb-32 mx-auto px-4 md:px-6 lg:px-0">
      {/* Background Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={contact || "/placeholder.svg"}
          alt="Contact Us Hero"
          className="w-full h-full object-cover transform transition-transform duration-500 grayscale hover:filter-none hover:scale-110 "
        />
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Contact Form Section */}
      <div className="container mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16 flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-16">
        {/* Form Section */}
        <div className="flex-1 w-full lg:max-w-[900px] lg:border lg:border-gray-200 lg:p-6 xl:p-8 lg:shadow-sm lg:rounded-lg bg-white">
          <div className="space-y-4 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              We appreciate your interest in our videography services. We are excited to discuss how we
              can meet your videography needs and help craft a memorable experience.
            </p>
          </div>

          {isSubmitted ? (
            <div className={`p-4 rounded-md text-center ${isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
              {isError ? (
                <>
                  <p>Error submitting your form. Please try again.</p>
                  <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-white text-black hover:bg-gray-200">
                    Return to Form
                  </Button>
                </>
              ) : (
                'Thank you! Your submission has been received!'
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email" 
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
              <Button type="submit" className="w-full rounded-none bg-black text-white hover:bg-black/90 transition-colors duration-300">
                {isLoading ? 'Submitting...' : 'SUBMIT'}
              </Button>
            </form>
          )}
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[500px] flex-shrink-0 space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4 mt-0 md:mt-8 lg:mt-14">
            <h3 className="text-lg font-semibold">REACH OUT</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              If you have any questions or need additional information, please don't hesitate to reach out.
              We are here to assist you in any way we can.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg font-semibold">OUR OFFICE</h3>
            <div className="space-y-1 text-muted-foreground text-sm md:text-base">
              <p>AllisWell Creative Studio</p>
              <p>Point Hall</p>
              <p>University of Ghana</p>
              <p>Legon - Accra</p>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg font-semibold">WORKING HOURS</h3>
            <p className="text-muted-foreground text-sm md:text-base">9AM - 5PM, Mon to Fri</p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8893737380657!2d-0.1869537!3d5.6502508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMDAuOSJOIDDCsDExJzEzLjAiVw!5e0!3m2!1sen!2sgh!4v1635959145563!5m2!1sen!2sgh"
            className="w-full h-[250px] md:h-[300px] border-0 rounded-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AllisWell Creative Studio Location"
            aria-label="Map showing location of AllisWell Creative Studio"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;