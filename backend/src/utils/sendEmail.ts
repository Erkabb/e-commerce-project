import nodemailer from "nodemailer";

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

export const sendEmail = async (email: string, otp: string) => {
  const info = await transporter.sendMail({
    from: "erkabb816@gmail.com", // sender address
    to: "enkhuush0309@gmail.com", // list of receivers
    subject: "", // Subject line
    text: "Hello world?", // plain text body
    html: "", // html body
  });
};
