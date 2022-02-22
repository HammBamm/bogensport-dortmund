const express = require('express');
const cors = require('cors');
const path = require('path');
const router = express.Router();
const compression = require('compression');
//const enforce = require('express-sslify');
const nodemailer = require("nodemailer");
const helmet = require('helmet');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(express.urlencoded({
  extended: true
}));
//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use("/", router);

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  //app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, error => {
  if(error) throw error;
  console.log('Server running on port ' + port);
});

app.post('*', function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* app.get('/service-worker.js', (req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  res.sendFile(path.resolve(__dirname, '..', 'build','service-worker.js'));
}); */

/* const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  },
}); */

const contactEmail = nodemailer.createTransport({
  host: "sv09.net-housting.de",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  },
});

contactEmail.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Ready to Send: ${success}`);
  }
});

app.post("/kontakt", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: `[Bogensport Dortmund] Anwärter: ${name}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});