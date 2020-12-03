"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PORT = process.env.port || 5005;
var app = express();
app.listen(PORT, function () {
    console.log("Server is UP on Port: " + PORT);
});
app.use(express.static("public"));
