const express = require("express");
const upload = require("../config/multer");
const { uploadImage } = require("../controllers/upload.controllers.js");

const uploadRoutes = (app) => {
    app.post("/cb/v1/api/upload", upload.single("image"), uploadImage);
}

module.exports = uploadRoutes;