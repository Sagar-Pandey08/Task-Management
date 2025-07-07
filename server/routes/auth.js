
// Missing this at the top
const router = require('express').Router();

router.post("/register", async (req, res) => {
  console.log("Incoming data:", req.body); // 👈 Add this

  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    console.log("Missing field"); // 👈 Optional: log if missing
    return res.status(400).json({ message: "All fields are required" });
  }

  // Proceed to create user...
  res.json({ message: "User registered successfully" });
});
