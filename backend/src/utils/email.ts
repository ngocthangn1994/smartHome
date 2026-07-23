import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const sendEmail = async (options: any) => {
  // create a transporter
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "38fe391840b5f8",
      pass: "2deb9549f88c7e",
    },
  } as SMTPTransport.Options);

  // define the email options
  const mailOptions = {
    from: "Ngoc Nguyen <admin@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // actually send the email.

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
