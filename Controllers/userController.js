const User = require("../Models/User");


const getUsers = async (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.send(err));
};




const createUser = async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    createdAt: req.body.createdAt,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};





module.exports = {
  getUsers,
  createUser,
};
