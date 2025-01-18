import React from 'react'
import TextField from '@mui/material/TextField';
const ContactForm = () => {
  return (
	<div className="container my-16 grid gap-16 lg:grid-cols-2">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-muted-foreground">
            We appreciate your interest in our videography services. We are excited to discuss how we
            can meet your videography needs and help craft a memorable experience.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">NAME</label>
            <TextField variant="outlined" placeholder="Enter your full name" fullWidth />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">PHONE NUMBER</label>
            <TextField variant="outlined" placeholder="Eg: +233503245678" fullWidth />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">EMAIL ADDRESS</label>
            <TextField type="email" variant="outlined" placeholder="Enter your email" fullWidth />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm