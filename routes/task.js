module.exports = app =>{
    const Tasks = app.models.task;
    app.get('/node',(req,res)=>{
      Tasks.findAll({}, (task)=>{
        res.json({task:task});
      });
    });
};