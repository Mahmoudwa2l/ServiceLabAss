const User = require("../Models/user");


const getUsers = async (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.send(err));
};




const createUser = async (req, res) => {
  const user = new User(req.body);

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
