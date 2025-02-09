import nodemailer from "nodemailer";

export async function sendMail(
  subject: string,
  toEmail: string,
  otpText: string
): Promise<boolean> {
  // Create the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  // Prepare email options
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  // Send the email and handle the promise
  try {
    const info = await transporter.sendMail(mailOptions); 
    console.log("Email Sent: " + info.response); 
    return true; 
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("error"); 
  }
}
