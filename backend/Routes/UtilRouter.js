const multer = require("multer");
const express = require('express');
const router = require("express").Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  const filePath = req.file.filename; // Assuming you're saving the file name
  res.status(200).json({ status: 200, fileName: filePath }); // Include the file name in the response
});


module.exports = router;