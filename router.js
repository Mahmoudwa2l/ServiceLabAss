
const router = require("express").Router();
const { getUsers,createUser} = require("./Controllers/userController");



router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
router.get("/users", getUsers);
router.post("/users/addUser", createUser);


module.exports = router;