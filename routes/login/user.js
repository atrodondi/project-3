const router = require("express").Router();
const loginController = require("../../controllers/loginControllers");

// matches with "loginPage/login/createUser"
router.route("/createUser").post(loginController.createUser);

// matchecs with "loginPage/login/login"
router.route("/login").post(loginController.userLogin);

router.route("/checkUser").post(loginController.checkUser);

module.exports = router;
