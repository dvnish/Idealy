


const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require("bcrypt");
const { LocalConvenienceStoreOutlined } = require('@material-ui/icons');
const saltRounds = 10;

const app = express()

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));


//build production
const path=require('path');

if (process.env.NODE_ENV === "production"){
  app.use(express.static('build'));
  app.get('*',(req,res) => {
    req.sendFile(path.resolve(__dirname, 'build','index.html'));

  })
}

//initialize sessions
app.use(session({
  key: "email",
  secret: "makeitreallylongnotknowntoanyone",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60* 60*24, //in 24 hours, in milliseconds
  },
}));


//connect to database ..
const db=mysql.createConnection({
  user: "root",
  host: "localhost",
  password:"rootserver",
  database: "idealy",
})


//register requests
app.post("/register",(req,res) => {
  const email = req.body.email
  const password = req.body.password
  
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO idealy.user (email,password) VALUES (?,?)",
      [email,hash],
      (err,result) => {
        console.log(err);
    } 
  );      

  });

});


//check if session exists
app.get("/login", (req, res)=> { //check if session exists
  if (req.session.email) {
    res.send({loggedIn: true, email: req.session.email})
  } else {
    res.send({loggedIn: false})
  }
});


//login requests
app.post('/login',(req,res) =>{
  const email = req.body.email
  const password = req.body.password
  
  db.query(
    "SELECT * FROM idealy.user WHERE email = ?;",
    [email],
    (err,result) => {
      if(err){
        res.send({err:err});
    }
      
      if (result.length > 0){
        //res.send(result);
        bcrypt.compare(password, result[0].password, (error, response)=> {
          if (response){
            //console.log("response is",response);
            req.session.email = result; // make a session called email with the result obtained
            console.log(req.session.email);
            res.send({"message": "Log in successful"})
          } else {
            res.send({message: "Wrong email/password combination"}); //if incorrect password
          }
        })
        //console.log("this is: ",result[0].password);
      } else {
        res.send({message: "User does not exist"}); //if user does not exist
      }
  }
  );
});



//addcompany requests
app.post("/addcompany",(req,res) => {
  const companyName = req.body.companyName;
  const admin = req.body.admin;
  const domain = req.body.domain;
  const industry = req.body.industry;

  db.query(
    "INSERT INTO idealy.company (companyName,admin,domain,industry) VALUES (?,?,?,?)",
    [companyName,admin,domain,industry],
    (err,result) => {
      console.log(err);
    } 
  );      
  });


//addproduct requests
app.post("/addproduct",(req,res) => {
  const productType = req.body.productType;
  const productName = req.body.productName;
  const description = req.body.description;
  const ownerEmail = req.body.prodOwner;
  const brand = req.body.brandName;



  db.query(
    "INSERT INTO idealy.product_type (productType) VALUES (?)",
    [productType],
    (err,result) => {
      console.log(err);
    } 
  );      

  db.query(
    "INSERT INTO idealy.product (productName,description,ownerEmail,brand) VALUES (?,?,?,?)",
    [productName,description,ownerEmail,brand],
    (err,result) => {
      console.log(err);
    } 
  );      
  });

  //add types request
    app.put("/productconfig",(req,res) => {
      const productType = req.body.productType;
      const productInitiative = req.body.productInitiative;
      const productOpportunity = req.body.productOpportunity;
      const productMetric = req.body.productMetric;
      //types
      db.query(
        "INSERT INTO idealy.product_type (productType) VALUES (?)",
        [productType],
        (err,result) => {
          console.log(err);
        } 
      );
        // product initiatives
      db.query(
        "INSERT INTO idealy.product_initiative (productInitiative) VALUES (?)",
        [productInitiative],
        (err,result) => {
          console.log(err);
        } 
      );
        // opportunities
      db.query(
        "INSERT INTO idealy.product_opportunity (productOpportunity) VALUES (?)",
        [productOpportunity],
        (err,result) => {
          console.log(err);
        } 
      );
        //metrics
      db .query(
        "INSERT INTO idealy.product_metric (productMetric) VALUES (?)",
        [productMetric],
        (err,result) => {
          console.log(err);
        } 
      );
    
    });

        //check if session exists














app.listen(3307, () => {
  console.log("running server");
});

