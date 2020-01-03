const express = require('express');
const router = express.Router();
const User = require('../../db/models/user');

module.exports = router;


router.get('/getdetails', async (req, res) => {

    try {

        let { email } = req.query;

        let user = await User.findOne({deleted:false});

        return res.status(200).json({ success: true, message: 'User Detail Fetch Success', data: user });
    } catch (err) {
        return res.status(400).json({ success: false, message: 'User Detail Fetch Failed' });
    }
});

router.post('/create', async (req, res) => {

    try {

        let { user_name, email, password } = req.body;

        let user = new User({
            user_name: user_name,
            email: email,
            password: password
        })

        let doc = await user.save();

        if (doc) {
            return res.status(200).json({ success: true, message: 'User created success', data: doc });
        } else {
            return res.status(400).json({ success: false, message: 'User creation failed' });
        }


    } catch (err) {
        return res.status(400).json({ success: false, message: 'User creation failed' });
    }
});