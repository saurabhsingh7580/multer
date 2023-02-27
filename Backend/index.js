const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8000;
const multer = require("multer");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "multar",
  port: "3306",
});
connection.connect((err) => {
  if (err) {
    console.log("Error is occr");
  } else {
    console.log("databases is connect");
  }
});
app.get("/", (req, res) => {
  res.send("hiiiiiiiiii");
});
const config = multer.diskStorage({
  destination: function (req, file,cb,) {
    cb(null, "./image");
  },
  filename: function (req, file ,cd) {
    cd(null, `image-${Data.now()}.${file.originalname}`);
  },
});

const upload = multer({
  Storage: config,
});
app.post("/image", upload.single("imglogo"), async (req, res) => {
  const imagename = req.body;
  const filename = req.file;
  console.log("firs", filename);
  const data = {
    img_name: "imagename",
    img_logo: "filename",
  };
  console.log(data);
  const sqlquery = "insert into img set = ?";
  await connection.query(sqlquery, data, (err, result) => {
    try {
      if (err) {
        return res.send({ Error: err.sqlMessage });
      }
      return res.send({ status: 200, Response: result.response });
    } catch (err) {
      res.send(err.sqlMessage);
    }
  });
});
app.listen(port, (err) => {
  console.log(`port started http//:localhost:${port}`);
});
