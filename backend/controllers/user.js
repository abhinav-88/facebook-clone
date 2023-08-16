// exports.home = (req, res) => {
// res.status(200).json({
//   message: "afs;jkadslkfj",
//   error: "dflkjadh",
// });

const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;
    const user = await new User({
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    // Can also be used as:
    // const user = await User(req.body).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
