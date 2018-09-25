var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'luis20dr@gmail.com',
        pass: 'CGtww4256789'
    }
});

var mailOptions = {
    from: 'luis20dr@gmail.com',
    to: 'luis20dr@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});