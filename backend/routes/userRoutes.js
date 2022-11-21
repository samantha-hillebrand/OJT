const router = require("express").Router();
const {
  signUp,
  login,
  mainPage,
  changePassword,
  logout,
  newIntern,
  interns,
} = require("../controllers/userControllers");

const { ensureAuthenticated } = require("../../ensure");
router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/newIntern").post(newIntern);
router.route("/interns").get(interns);
// router.route("/main").get(ensureAuthenticated, mainPage);
// router.route("/change").post(changePassword, login);
router.route("/logout").get(logout);
module.exports = router;
