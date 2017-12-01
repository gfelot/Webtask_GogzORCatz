"use latest";

const nodemailer = require("nodemailer@2.5.0");

module.exports = (ctx, done) => {
  
  const {email, data, EMAIL_PWD} =  ctx.data
  
  let text = 'List of your favourite Gifs => \n'
  let html = '<h1>List of your favourite Gifs =></h1></br>'
  data.forEach((url, i) => {
    text += `#${i+1}: ${url}\n`
    html += `<img src="${url}" ></br>`
  })
  
  console.log('Array', data)
 
  // setup transporter config #SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'gil.felot@epitech.eu',
        pass: EMAIL_PWD
    }
  });
 
  // setup email data
  const mailOptions = {
      from: 'gil.felot@epitech.eu',
      to: email,
      subject: 'From Dogz or Catz website ;)',
      text,
      html
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        done(null, "An error occurred: " + err)
      }
      done(null, "Email sent with data")
  });
};