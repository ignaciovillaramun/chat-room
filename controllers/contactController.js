var User = require("../models/contactModels");

exports.getAll = async (req, res, next) => {
  const data = await User.find();

  res.status(200).json(data);
};

exports.getOne = async (req, res, next) => {
  const data = await User.findById(req.params.id);

  res.status(200).json(data);
};

exports.createContact = async (req, res) => {
  const doc = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

exports.updateContact = async (req, res) => {
  const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(204).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

exports.deleteContact = async (req, res) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    data: null,
  });
};
