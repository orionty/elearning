const express = require('express')
const path = require("path")
require('dotenv').config();
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')();
const mysql =require('mysql')
const session = require("express-session")
const cors = require('cors')
const nodemailer = require('nodemailer');
const { resolve4 } = require('dns');


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


const port = 3001

const app = express()
app.use(cors())

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(pino);
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/img", express.static(path.join(__dirname, "public/img")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));


// register web development
app.post("/register/web/development", (req, res, next) =>{

  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var web_email = req.body.web_email
  var phoneNumber = req.body.phoneNumber
  var web_country = req.body.web_country
  var web_course = req.body.course
  var content = `Email: ${web_email}'\n' Name : ${firstName} ${lastName}'\n'Phone number: ${phoneNumber}'\n'Country: ${user_country}'\n'Course: ${web_course} '\n' Country: ${web_country}`

  var mail = {
    from: web_email,
    to:process.env.EMAIL,
    subject: 'WEB DEVELOPMENT',
    text: content
  }
  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })

})
// course register
app.post("/register/course", (req, res, next) =>{

  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var registered_email = req.body.registered_email
  var phone_number = req.body.phone_number
  var user_country = req.body.user_country
  var course = req.body.course
  var content = `Email: ${registered_email}'\n' Name : ${first_name} ${last_name}'\n'Phone number: ${phone_number}'\n'Country: ${user_country}'\n'Course: ${course}`

  var mail = {
    from: registered_email,
    to:process.env.EMAIL,
    subject: 'Online Course Registration',
    text: content
  }
  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })

})


// contact mail
app.post("/send/mail", (req, res, next) =>{

  const email = req.body.email
  const subject = req.body.subject
  const message = req.body.message

  var mail = {
    from: email,
    to:process.env.EMAIL,
    subject:  subject,
    text: message
  }
  
  transporter1.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })

})
// online tutors
app.post("/online/tutors", (req, res, next) =>{

  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const user_email = req.body.user_email
  const cv = req.body.cv
  const certificate = req.body.certificate
  const linkedin = req.body.linkedin

  var mailOptions = {
    from: user_email,
    to:process.env.EMAIL,
    firstname:  firstname,
    lastname:  lastname,
    cv:  cv,
    certificate: certificate,
    linkedin: linkedin
  }
  
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })

})

//Online Tutors
app.post("/register/user", (req, res) =>{

  const db = mysql.createPool(
      {
          host: "localhost",
          user: "root",
          password: "",
          database: "elearning"
      }
  )
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const registered_email = req.body.registered_email
  const phone_number = req.body.phone_number
  const user_country = req.body.user_country
  const course = req.body.course


  const sqlInsert ="INSERT INTO course_registers(firstName,lastName,registered_email,phone_number,user_country,course) VALUES (?,?,?,?,?,?)"

  db.query(sqlInsert, [firstname,lastname,registered_email,phone_number,user_country,course], (error,result) => {
    if(error) throw error;
            
    res.send(result);
  })

})






  app.listen(port, ()=> console.log('server running on port 3001'))





