const nodemailer = require('nodemailer');
const { Subscription } = require("../db");
require('dotenv').config();

const { USERMAIL, PASS } = process.env;

const subscribe = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'yending',
    auth: {
      type: "OAuth2",
      user: USERMAIL,
      pass: PASS,
      // clientId: CLIENT_ID,
      // clientSecret: CLIENT_SECRET,
      // refreshToken: REFRESH_TOKEN
    }
  });

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Falta el correo electrónico" });
  }

  try {
    const newSubscription = await Subscription.create({
      email,
    });

    const mailOptions = {
      from: 'Yending',
      to: 'fersoria02@gmail.com',
      subject: 'Nueva suscripción',
      text: `Correo electrónico: ${newSubscription.email}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });

    return res.status(200).json(newSubscription);
  } catch (error) {
    return res.status(400).json({ msg: "Error al realizar la suscripción" });
  }
};

module.exports = {
  subscribe,
};
