exports.validateInput = (req, res, next) => {
  req.body.user = typeof req.body.user === "string" ? req.body.user.trim() : "";
  req.body.text = typeof req.body.text === "string" ? req.body.text.trim() : "";

  const { user, text } = req.body;

  if (
    !/[^\W]+/.test(user) ||
    user.length < 3 ||
    user.length > 16 ||
    text.length > 400 ||
    text.length < 3
  ) {
    return res.send("There was an error sending your message. ");
  } else return next();
};
