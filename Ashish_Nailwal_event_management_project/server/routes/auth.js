const {
  login,
  register,
  logOut,
  getAllUsers
} = require("../controllers/userController");

const router = require("express").Router();
router.post("/login", login);
router.post("/register", register);
router.get("/products",getAllUsers)
router.get("/logout/:id", logOut);

module.exports = router;
