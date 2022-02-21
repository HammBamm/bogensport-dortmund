const express = require('express');
const cors = require('cors');
const path = require('path');
const router = express.Router();
const compression = require('compression');
//const enforce = require('express-sslify');
const nodemailer = require("nodemailer");
const helmet = require('helmet');
const path = require("path");

class Server {
  constructor() {
    if (process.env.NODE_ENV !== 'production') require('dotenv').config();
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth: "/api/auth",
      homepage: "/api/homepage",
    };
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({
      extended: true
    }));
    //app.use(enforce.HTTPS({ trustProtoHeader: true }));
    this.app.use("/", router);

    if (process.env.NODE_ENV === 'production') {
      this.app.use(compression());
      //app.use(enforce.HTTPS({ trustProtoHeader: true }));
      this.app.use(express.static(path.join(__dirname, 'client/build')));
      this.app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
      })
    }

    this.app.listen(port, error => {
      if(error) throw error;
      console.log('Server running on port ' + port);
    });

    this.app.post('*', function(req,res,next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

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
  }

  // Bind controllers to routes
  routes() {
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.homepage, require("../routes/homepage"));
    // Catch all requests that don't match any route
    this.app.get("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "../client/build/index.html")
      );
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }

}

module.exports = Server;