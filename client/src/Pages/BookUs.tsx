import React, { useState } from 'react';
import { Input } from "../Components/ui/input.tsx";
import { Textarea } from "../Components/ui/textarea.tsx";
import { Button } from "../Components/ui/button.tsx";

const BookUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
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
        <div className="bg-green-500 text-white p-4 rounded-md text-center">
          Thank you! Your submission has been received!
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
            <Button type="submit" className="w-full rounded-none bg-black text-white hover:bg-black/90 ">
              SUBMIT
            </Button>
          </form>
          <hr className="my-32 border-gray-300" />
        </>
      )}
    </div>
  );
};

export default BookUs;
