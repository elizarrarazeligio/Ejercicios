const express = require("express");

const index = express();

const successMessage = "éxito";
const userData = {
  name: "Sam",
  email: "developer@yandex.com",
  isDeveloper: true,
  followersOnGithub: 12,
};

index.get("/", (req, res) => {
  res.status(200).send("¡Hola, mundo!");
});

index.post("/users", (req, res) => {
  res.status(201).send({
    message: successMessage,
    data: userData,
  });
});

module.exports = index;
