var User = require("../models/userModels");

exports.getOverview = (req, res, next) => {
  res.send(`Hello There!`);
};

exports.getAll = async (req, res, next) => {
  const data = await User.find();

  res.status(200).json(data);
};

exports.getOne = async (req, res, next) => {
  const data = await User.findById(req.params.id);

  res.status(200).json(data);
};
