const express = require("express");
const path = require("path");

function apiRoutes(app) {

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  let friends = [];

  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    let newFriend = req.body

    console.log(newFriend);

    friends.push(newFriend)

    res.json(newFriend)

  });
}

module.exports = apiRoutes;