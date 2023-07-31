// Business logic for user related operations
// const User = require('../models/userModel.js');

exports.home = (req, res) => {
    res.send('Hello World!');
};

// exports.createUser = async (req, res) => {
//     try {
//         const {name, email} = req.body;
//         if(!name || !email) {
//             throw new Error('Name and email are required');
//         }

//         const userExist = await User.findOne({email});
//         if(userExist) {
//             throw new Error('User already exists');
//         }

//         const user = await User.create({name, email});
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 user
//             },
//             messege: 'User created successfully'
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: 'fail',
//             messege: error.message
//         });
//     }
// };
