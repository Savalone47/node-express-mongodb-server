module.exports = app =>{
    return {
        findAll: (params, callback)=>{
            return callback([
                {title: "Build Node Api"},
                {programmer: "Josue Yenga" }
            ]);
        }
    };
};