const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    secure:true,
    host: 'smtp.gmail.com',
    port: 465,
    auth:{
      user: 'shreyasskhandagale@gmail.com',
      pass: 'hrfd tsqi ngay ohji'
    }
  }
);

function sendMail(to,sub,msg){
  transporter.sendMail({
    to:to,
    subject:sub,
    html: msg
  });
  console.log("Email sent.");
}
sendMail("shreyasskhandagale@gmail.com","This is a subject","This is a test message 2");
