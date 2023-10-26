const express = require('express');
const mongoose = require('mongoose');
const { generatePath } = require('react-router-dom');

const app = express()

const DbUrl = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

mongoose.connect(DbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(8080,() => console.log('Sever running on port 8O8O')))
    .catch((err) => console.log(err));
// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Code generator
genCode = () => {
    const index1 = (Math.random().toFixed(2)*100).toString()
    const index2 = (Math.random().toFixed(2)*100).toString()

    const code = index2.concat(index1)
    if (code.length < 4) {
        return code.concat('4')
    }
    if (code.includes('.')) {
        return genCode()
    }
    return index2.concat(index1)
}
// APIs
app.post('/sign-up', (req, res) => {
    
    console.log(req.body);
    // referral code generator using the username before saving to database
    const user_name = req.body.User_name;
    const Referral_code = user_name.concat('-',genCode());

    console.log(Referral_code);
    
    // const user = new User(req.body)
    // user.save()
    //     .then((result) => {
    //         console.log(result);
    //         res.json(result)
    //     }).catch((err) => {
    //         res.json({ error: err })
    //     });
})

app.post('/sign-in', (req, res) => {
    console.log(req.body);

    User.findOne(req.body)
        .then((result) => {
            console.log(result) 
            // The use
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.json({ error: err })
        });
})
// Transaction APIs
app.post('/pay', (req, res) => {
    console.log(req.body);
    res.send('API reached')
})

app.post('/send', (req, res) => {
    // Send transaction which triggers 
    console.log(req.body);
    res.send('API reached')
})


