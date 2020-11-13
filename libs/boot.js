module.exports = app => {
    app.listen(app.get("port"),() => {
        console.log(`API - Port ${app.get("port")}`);
    });
};