const User = require("../Models/user");

//Get all users
const getUsers = async (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.send(err));
};

//Create a new user
const createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE user
const updateUser = async (req, res) => {
  
   
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get single user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    if(!user){
        return res.status(401).json("no user found");
    }
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
}




module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
