const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added_at DESC"
  );
  return rows;
}

async function insertNewMessage(username, text, date) {
  await pool.query(
    "INSERT INTO messages (username, content, added_at) VALUES ($1, $2, $3)",
    [username, text, date]
  );
}

module.exports = {
  getAllMessages,
  insertNewMessage,
};
