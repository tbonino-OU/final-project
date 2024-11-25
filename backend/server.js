//initiate connection variables
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
//parse incoming data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//implement CRUD API
const db = mysql.createPool ({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '1n1t1@lD',
    database: 'mashedpotatoes'
})

//setting SALT values for encrypting passwords
const saltRounds = 10;

// app.get('/', (re, res) => {
//     db.query("INSERT INTO user (UserID, Name, Profile, JoinDate, Password) VALUES (1001, 'Matthew', 'First!', '2024-11-16', g0sp3L#1)", (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(result)
//         }
//     })
// })

// Enable user signup
app.post('/signup', (req, res) => {
    console.log("User signing up")
    const username = req.body.username;
    const timestamp = new Date();
    // pass in current timestamp as the join_date
    const join_date = timestamp.getFullYear() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getDate();
    const password = req.body.password;
    const profile = req.body.profile;

    // encrypt password before storing it in database
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if(err){
            res.status(418).send(`Couldn't hash password.`)
        } else {
            db.query("INSERT INTO user (Name, JoinDate, Password, Profile) VALUES (? , ? , ? , ?)", [username, join_date, hashedPassword, profile], (err, result) => {
                if (err) {
                    console.log(err).send(`Couldn't register user.`)
                } else {
                    res.send({username: username})
                }
            })
        }
    })
})
    
// Enable user sign in
app.post('/signin', (req, res) => {
    console.log("User signing in")
    const username = req.body.username;
    const password = req.body.password;

    // query and selection structure to authenticate user details
    db.query("SELECT * FROM user WHERE Name = ?", [username], (err, result) => {
        if(err) {
            res.status(418).send(err.message)
            // handle wrong username
        } else if (result.length < 1) {
            res.status(418).send('Incorrect username.')
        } else {
            // pull the user's password
            bcrypt.compare(password, result[0].Password, (err, match) => {
                if (match) {
                    res.send({username: username})
                } 
                if (!match) {
                    console.log(password)
                    console.log(result[0].Password)
                    //console.log(err.message)
                    res.status(418).send('Incorrect password.')
                }
            })
        }
    })
})

    // commented out working code to incorporate into encryption function
    /* db.query("INSERT INTO user (Name, JoinDate, Password) VALUES (? , ? , ? )", [username, join_date, password], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send({username: username})
                }
            }) */
   


app.get('/', (req, res) =>{
    res.send('GET is working')
})

app.listen(8080, () => {
    console.log("listening");
})