const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
var nodemailer = require('nodemailer');




app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/feedback.html' , { root : __dirname});
});



app.post('/submit', (req, res) => {

    console.log( "form submitted" );
    
    var name = req.body.name;
    var semester = req.body.semester;
    var email = req.body.email;
    var course = req.body.course;
    var feedback = req.body.feedback;

    var final = name + ' , ' + semester + ' , ' + email + ' , ' + course + ' , ' + feedback + ' \n ' ;
    console.log(final);
    fs.appendFile('data.txt', final , function(err) {
        if (err) throw err;
        console.log('saved'); 
    });

    



   /*
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'Your_Email',
        pass: 'Your_Password'
        }
    });

	var mailOptions = {
		from: 'Your_email',
		to: email,
		subject: 'Feedback Form',
		text: 'Feedback successfully submitted!'
	};
	transporter.sendMail(mailOptions, function(err, info){
		if(err) console.log(err);
		else console.log('Email sent: ' + info.response);
	});
            */	    
    
    res.end('Successfully Submitted!');
});

app.listen(3000);
console.log('listning on port 3000');