const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "isiahistj@gmail.com",
    pass: "6ryzvyim",
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
      from: "isiahistj@gmail.com",
      to: "isiahmdev@gmail.com",
      subject: data.subject,
      text: message,
    };

    console.log(details);

    try {
      await transporter.sendMail(details);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).send({ message: "Bad Request" });
}
