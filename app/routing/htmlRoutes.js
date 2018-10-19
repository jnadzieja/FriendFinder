const express = require("express");
const path = require("path");

function htmlRoutes(app) {

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

}

module.exports = htmlRoutes;