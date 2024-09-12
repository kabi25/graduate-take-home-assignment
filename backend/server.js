/** @format */

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "your_secret_key";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the MySQL database.");
});

//Registration API
app.post("/sign-up", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
  const values = [name, email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error inserting user data" });
    }
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    return res
      .status(201)
      .json({ message: "User registered successfully!", token });
  });
});

//Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error during login" });
    }
    if (results.length > 0) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
      return res.status(200).json({ message: "Login successful", token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// Logout API
app.post("/logout", (req, res) => {
  return res.status(200).json({ message: "Logout successful" });
});

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
