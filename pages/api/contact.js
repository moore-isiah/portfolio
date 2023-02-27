require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "isiahmdev@gmail.com",
    pass: "jziubvclctdyntqr",
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    let message = `First Name: ${data.firstName}\nLast Name: ${data.LastName} \nMessage:\n${data.message}`;

    if (!data) {
      return res.status(400).send({ message: "Bad Request" });
    }

    let details = {
      from: process.env.EMAIL_PASS,
      to: "isiahmdev@gmail.com",
      subject: data.subject,
      text: message,
    };

    try {
      await transporter.sendMail(details);
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).send({ message: "Bad Request" });
}
