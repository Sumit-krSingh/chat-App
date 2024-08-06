const express = require("express");

const router = express.Router();
const authcontrollers = require("../controllers/auth-controller")

router.route("/").get(authcontrollers.home);
router.route("/signup").post(authcontrollers.signup);


module.exports = router;