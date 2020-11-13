import consign from "consign";

import express from "express";

const app = express();

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("libs/boot.js")
    .then("routes")
    .into(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	let err = new Error('File Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send(err.message);
});