var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vrajvansh2004@gmail.com',
        pass:'xhixxtjqkaqzsjsi'
    }
});

var mailOptions = {
    from: 'vrajvansh2004@gmail.com',
    to: 'vrajvansh2802@gmail.com',
    subject:'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions,function(error, info){
    if (error){
        console.log(error);
    }else{
        console.log('Email sent:' + info.response);
    }
});
