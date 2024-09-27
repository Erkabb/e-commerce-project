import nodemailer from "nodemailer";
import generateHTML from "./generateHTML";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.RESEND_USER_EMAIL,
    pass: process.env.RESEND_PASSWORD,
  },
});

export const sendEmail = async (email: string, otp: string): Promise<void> => {
  const info = await transporter.sendMail({
    from: "erkabb816@gmail.com", // sender address
    to: email, // list of receivers
    subject: "E-Commerce", // Subject line

    html: generateHTML(otp), // html body
  });
};
