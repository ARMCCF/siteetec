const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path')

const upload = multer({
  dest:'./upload/images',
})

app.post("/upload", upload.single('profile'), (req, res)=>{
   console.log(req.file);
})

app.get("/status", (rec, res)=>{
    res.send("Server is Running")
})

app.listen(3001, ()=>{
  console.log("server up and running")
})
