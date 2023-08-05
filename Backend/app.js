const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/users')

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Connect to MongoDB database
const db_url = 'mongodb://localhost:27017/Users'
mongoose.connect(db_url).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.error(`Error connecting to ${db_url}`, err)
})

app.post('/register', (req, res) => {
    User.findOne({ email: req.body.email }).then((userData) => {
        if (userData) {
            res.send({ message: 'User Already Present' })
        } else {
            const newUser = new User({
                Name: req.body.name,
                Email: req.body.email,
                Phone: req.body.phone,
                Password: req.body.password
            });
            newUser.save().then(() => {
                res.send({ message: 'User Registered Successfully' })
            }).catch(() => {
                res.send({ message: 'User Registration Failed.. Try Again Later' })
            });
        }
    });
});



app.post('/login', (req, res) => {
    User.findOne({ Email: req.body.email }).then((userData) => {
        if (userData) {
            if (req.body.password === userData.Password) {
                res.send({ message: 'LogIn Successfull', status: 200 })
            } else {
                res.send({ message: 'Please enter your valid password' })
            }
        } else {
            res.send({ message: 'USer not found' })
        }
    })
})



app.listen(4000, () => {
    console.log('Server running on 4000 port')
});
