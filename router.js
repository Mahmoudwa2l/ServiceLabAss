
const router = require("express").Router();
const { getUsers,createUser} = require("./Controllers/userController");
//const {} = require("./Controllers/productController");


//-----------------Users------------------
router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
//Get all Users
router.get("/users", getUsers);

//Create User
router.post("/users/addUser", createUser);

//Delete User
router.delete("/users/delete",);

//Upadate User
router.put("/users/update",);

//-----------------Products-----------------
//Get all Products


//Create Product


//Delete Product


//Update Product


module.exports = router;