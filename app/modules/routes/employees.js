module.exports = app => {
    const url = `${process.env.API_VERSION}/employees`
    const Controller = require('../controllers/employees')(app)
    const Validate = require('../validates/employees')(app)

    app.route(url)
        .get(Controller.listAll)
        .post(Validate.create, Controller.create)

    app.route(`${url}/:_id`)
        .get(Validate.isId, Controller.listOne)
        .put(Validate.isId, Validate.update, Controller.update)
        .delete(Validate.isId, Controller.delete)
}
