const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').load({ silent: true }); 

const app = express();
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/img', express.static('pics'))


app.post('/sendmail', (req, res) => {
    console.log(req.body)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        },
        tls: {
          rejectUnauthorized: false

        }
      });
      
      let HelperOptions = {
        from: req.body.name + process.env.EMAIL,
        to: process.env.EMAIL,
        subject: req.body.subject,
        text: req.body.message
      };
    
      transporter.sendMail(HelperOptions, (error, info) => {
        if(error){
          res.json({error: error});
        }else{
          res.json({success: info.response});
        };
        console.log("The message was sent!");
        console.log(info);
      });
      
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.listen(port, () => console.log(`Listening on port ${port}`));


