module.exports = app => {
    const Employees = require('../models/employees')
    const Persistence = require('../../helpers/persistence')(Employees)
    const Validate = require('../../helpers/validate')
    return {
        create: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'name', 'lastName', 'participation')(body)
            Persistence.create(res)(body)
        },
        update: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'name', 'lastName', 'participation')(body)
            Persistence.update(res)(req.params)(body)
        },
        listAll: (req, res) => Persistence.findAll(res)(req.params, req.body),
        listOne: (req, res) => Persistence.findOne(res)(req.params, req.body),
        delete: (req, res) => Persistence.remove(res)(req.params)
    }
}
