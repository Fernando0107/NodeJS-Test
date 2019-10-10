var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jfgonzalez@ufm.edu',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'jfgonzalez@ufm.edu',
    to: 'jfgonzalez@ufm.edu',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});