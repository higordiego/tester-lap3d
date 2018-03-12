module.exports = app => {
    const Errors = require('../../errors/employees/error')
    const Validate = require('../../helpers/validate')
    return {
        create: (req, res, next) => {
            const required = ['lastName', 'name', 'participation']
            const error = Validate.requestRequired(req, required, Errors)
            error ? res.status(400).json(error) : next()
        },
        update: (req, res, next) => {
            const required = ['lastName', 'name', 'participation']
            const error = Validate.requestOptional(req, required, Errors)
            error ? res.status(400).json(error) : next()
        },
        isId: (req, res, next) => Validate.isId(req.params._id, res, next, Errors.idInvalid)
    }
}
