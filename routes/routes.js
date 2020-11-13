module.exports = app => {

    const Routes = app.models.model;

     app.get('/',(req, res) => {
      Routes.Node({}, (model) => {
        res.json({model:model});
      });
    });

    app.get('/user',(req, res) => {
      Routes.findUser({}, (model) => {
        res.json({model:model});
      });
    });
};
