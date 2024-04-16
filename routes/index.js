const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function validateInput(user, text) {
  if (!/[^\W]+/.test(user) || user.length < 3 || user.length > 16) return false;
  const trimmed = text.trim();
  if (trimmed.length > 400 || trimmed.length < 3) return false;
  return true;
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Micro Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res, next) => {
  const { user, text } = req.body;
  if (validateInput(user, text)) {
    messages.push({ user, text, added: new Date() });
    return res.redirect("/");
  }
  res.send("There was an error sending your message. ");
});

module.exports = router;
