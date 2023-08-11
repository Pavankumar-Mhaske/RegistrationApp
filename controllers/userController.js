// Business logic for user related operations
const User = require('../models/userModel.js');

exports.home = (req, res) => {
  res.send("Hello World!");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new Error("User already exists");
    }

    const user = await User.create({ name, email });
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
      messege: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      messege: error.message,
      error,
    });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
      messege: "Users fetched successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      messege: error.message,
      error,
    });
  }
};  // Business logic for user related operations


// controller to update the user.
exports.updateUser = async (req, res) => {

  try {
    const user  = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
      message:"User updated Successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
      error,
      
    });    
  }
};

// controller to delete the user.
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
      message:"User deleted Successfully",
    });    
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
      error,
    });  
  }
};

