const express = require('express');
const cors = require('cors');
const path = require('path');
const router = express.Router();
const compression = require('compression');
const enforce = require('express-sslify');

const nodemailer = require("nodemailer");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use("/", router);
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}
app.listen(port, error => {
  if(error) throw error;
  console.log('Server running on port ' + port);
})

app.get('/service-worker.js', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build','service-worker.js'));
})

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "ke.massmann@gmail.com",
    pass: "C0nv3xHull"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/kontakt", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "ke.massmann@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});