const User = require('../models/user.models');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
 
        const newUser = new User({ 
            username, 
            email, 
            password 
        });

        await newUser.save();
        
        res.status(201).json({ message: 'User created successfully', user: newUser });

    } catch (error) {
        console.error('Error creating user:', error); // Logs error in the terminal
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

module.exports = { createUser };
