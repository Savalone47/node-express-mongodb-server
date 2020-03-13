module.exports = app =>{
    app.listen(app.get("PORT"),()=>{
        console.log(`Task API - Port ${PORT}`);
    });
};