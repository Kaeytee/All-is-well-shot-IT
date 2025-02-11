const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  console.log('📩 Received form data:', req.body);

  // Validate required fields
  if (!name || !phone || !email || !service || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Validate environment variables
  if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("❌ Missing EMAIL or PASSWORD in .env");
    return res.status(500).json({ error: "Server email configuration error" });
  }

  // Create email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // Verify transporter setup
  transporter.verify((error) => {
    if (error) {
      console.error("❌ Transporter Error:", error);
    } else {
      console.log("✅ Server is ready to send emails");
    }
  });

  // Email to website owner (Admin)
  const adminMailOptions = {
    from: email, // Website admin's email
    to: process.env.EMAIL, // Send to owner
    subject: `📩 New Booking Request from ${name}`,
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <br>
      <p>📌 <strong>Please respond promptly to the customer.</strong></p>
    `
  };

  // Confirmation email to the user
  const userMailOptions = {
    from: process.env.EMAIL,
    to: email, // Send to the user who filled the form
    subject: `📌 Confirmation: We've Received Your Booking Request`,
    html: `
      <h2>Hello ${name},</h2>
      <p>Thank you for reaching out to us regarding the <strong>${service}</strong> service.</p>
      <p>Your request has been received, and our team will review it as soon as possible.</p>
      <p>If you need urgent assistance, feel free to contact our support team at:</p>
      <h3>📞 +233552727570</h3>
      <br>
      <p>Best regards,</p>
      <p><strong>𝐀𝐥𝐥𝐢𝐬𝐰𝐞𝐥𝐥 𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐞 𝐒𝐭𝐮𝐝𝐢𝐨𝐬</strong></p>
    `
  };

  try {
    console.log('🚀 Sending emails...');

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log('✅ Emails sent successfully');
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('❌ Error sending emails:', error);
    res.status(500).json({ error: 'Error sending emails' });
  }
};

module.exports = sendEmail;
