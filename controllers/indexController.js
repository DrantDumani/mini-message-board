const messages = require("../models/messages");

exports.getIndex = (req, res, next) => {
  res.render("index", { title: "Micro Messageboard", messages: messages });
};

exports.getNew = (req, res, next) => {
  res.render("form", { title: "New Message" });
};

exports.createPost = (req, res, next) => {
  messages.push({
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  });
  return res.redirect("/");
};
