const db = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register new user
exports.register = (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query(
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
    [username, hashedPassword, email],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "User registered successfully!" });
    }
  );
};

// Login user
exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(404).json({ message: "User not found!" });

      const user = results[0];
      const isValidPassword = bcrypt.compareSync(password, user.password);

      if (!isValidPassword)
        return res.status(401).json({ message: "Invalid password!" });

      const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    }
  );
};
