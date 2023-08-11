const express = require("express");
const router = express.Router();
const {
  home,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

// route to get the home page;
router.get("/", home);
// route to create the user;
router.post("/createUser", createUser);
// route to get all the users;
router.get("/getUsers", getUsers);
// route to update the user;
router.put("/updateUser/:id", updateUser);
// route to delete the user;
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
