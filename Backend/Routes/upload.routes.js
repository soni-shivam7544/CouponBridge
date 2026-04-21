const express = require("express");
const upload = require("../config/multer");
const uploadController = require("../Controllers/upload.controllers.js");

const uploadRoutes = (app) => {
    app.post("/cb/v1/api/upload", upload.single("image"), uploadController.uploadImage);
}

module.exports = uploadRoutes;