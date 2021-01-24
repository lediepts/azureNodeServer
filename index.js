const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path")

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 50,
  })
);
app.use(cors());
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/",(req,res)=>{
  res.status(200).send("hello");
})
app.listen(port, () => console.warn(`Listening on port ${port}`));
