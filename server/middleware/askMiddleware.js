const nodemailer = require('nodemailer');
require('dotenv').config();

const sendQuestionEmail = async (req, res) => {
  const { name, email, question } = req.body;

  console.log('📩 Received question form data:', req.body);

  // Validate required fields
  if (!name || !email || !question) {
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

  // Email to website owner
  const ownerMailOptions = {
    from: email, // Use the email from the form as the sender's email
    to: process.env.EMAIL, // Send the email to the website owner
    subject: '📩 New Question Submission',
    text: `📢 New Question Submission\n\nName: ${name}\nEmail: ${email}\nQuestion: ${question}`
  };

  // Email to user
  const userMailOptions = {
    from: process.env.EMAIL, // Use the website owner's email as the sender's email
    to: email, // Send the email to the user
    subject: '🎉 Thank You for Your Question!',
    text: `Hi ${name},\n\nThank you for reaching out to us! We have received your question and will get back to you soon.\n\nBest regards,\nAllisWell Creative Studio\n\n📍 Point Hall, University of Ghana, Legon - Accra\n📞 +233503245678\n🕒 9AM - 5PM, Mon to Fri`
  };

  try {
    console.log('🚀 Sending email to website owner...');
    await transporter.sendMail(ownerMailOptions);
    console.log('✅ Email sent to website owner successfully');

    console.log('🚀 Sending email to user...');
    await transporter.sendMail(userMailOptions);
    console.log('✅ Email sent to user successfully');

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('❌ Error sending emails:', error);
    res.status(500).json({ error: 'Error sending emails' });
  }
};

module.exports = sendQuestionEmail;