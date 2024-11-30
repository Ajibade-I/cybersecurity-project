const Credentials = require("../model/userCredentials");
const bcrypt = require("bcryptjs")


const storeCredentials = async (req, res) => {
  const { userName, password, email, platform } = req.body;

  // Validate input
  if (!userName || !password || !platform) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user credential
  const newCredential = new Credentials({
    userName,
    password: hashedPassword,
    email,
    platform,
  });


  // Save to the database
  await newCredential.save();

  res.status(201).json({ message: "Credentials stored successfully." });
};

const getAllCredentials = async (req, res) => {

      const { platform } = req.query; // Extract the platform query parameter
  
      // Create a filter object
      const filter = platform ? { platform } : {};
  
      // Retrieve credentials from the database based on the filter
      const credentials = await Credentials.find(filter);
  
      // Respond with the retrieved credentials
      res.status(200).json(credentials);
  
  };

module.exports = {storeCredentials,getAllCredentials};
