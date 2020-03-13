import express from "express";
import consign from "consign";

const app = express();

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("libs/boot.js")
    .then("routes")
    .into(app);