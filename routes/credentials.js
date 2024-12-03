const express = require("express");
const { storeCredentials, getAllCredentials } = require("../controller/credentials");


const router = express.Router();

router.post("/storeCredentials", storeCredentials);
router.get("/view-all",getAllCredentials );

module.exports = router;
