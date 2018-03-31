const User = require('./user.model');

module.exports.create = async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json(user);
};

module.exports.list = async (req, res) => {
  const users = await User.find();

  res.json(users);
};

module.exports.remove = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);

  res.json(req.params.id);
};

module.exports.update = async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  });

  res.json(user);
};

module.exports.view = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json(user);
};
