const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'laudablelearning@gmail.com',
    from: 'noreply@yourdomain.com', // Replace with your verified SendGrid sender
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<strong>Name:</strong> ${name}<br>
           <strong>Email:</strong> ${email}<br>
           <strong>Message:</strong> ${message}`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};