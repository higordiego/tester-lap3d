const supertest = require('supertest')
const chai = require('chai')
const app = require('../app')
const requestAux = require('./functions/routeDefaults')
const object = require('./objectCrud/employees')

global.app = app
global.object = object
global.requestAux = requestAux
global.request = supertest(app)
global.expect = chai.expect
