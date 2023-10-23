
const router = require("express").Router();
const { getUsers,createUser} = require("./Controllers/userController");
const { getAllProducts,createProduct,deleteProduct,getProduct,updateProduct} = require("./Controllers/productController");
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

//---------------------------------------------




//-----------------Products-----------------
//Get single Product
router.get("/product/:id", getProduct);
//Get all Products
router.get("/products", getAllProducts);

//Create Product
router.post("/product/create", createProduct);


//Delete Product
router.delete("/product/delete/:id",deleteProduct);


//Update Product
router.put("/product/update/:id", updateProduct);


module.exports = router;