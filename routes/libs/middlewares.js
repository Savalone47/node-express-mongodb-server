module.exports = app =>{
    app.set("PORT", process.env.PORT || 3000);
    app.set("json spaces", 4);
};