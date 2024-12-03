require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { dbConnect } = require("./config/db");
const { notFound, errorHandler } = require("./lib/midlleware/error-middleware");
const accesslogs = require("./lib/midlleware/accesslogs");
const router = require("./routes/credentials");
require("colors")
const app = express();
const port = process.env.PORT || 5400;
const cors = require('cors');
app.use(cors());


app.use(express.json());

app.use("/", accesslogs, router);


app.use(notFound);
app.use(errorHandler);

dbConnect();
app.listen(port, () => console.log(`Server listening on port ${port}....`));
