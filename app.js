import consign from "consign";

import express from "express";

const app = express();

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("libs/boot.js")
    .then("routes")
    .into(app);