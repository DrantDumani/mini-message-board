const db = require("../db/queries");

exports.getIndex = async (req, res, next) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Micro Messageboard", messages: messages });
};

exports.getNew = (req, res, next) => {
  res.render("form", { title: "New Message" });
};

exports.createPost = async (req, res, next) => {
  const date = new Date().toISOString();
  await db.insertNewMessage(req.body.user, req.body.text, date);
  return res.redirect("/");
};
