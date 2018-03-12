describe('Routes Employees', () => {
    const Employees = require('../app/modules/models/employees')
    const rotaUrl = `${process.env.API_VERSION}/employees`
    let defaultObject = object

    beforeEach((done) => {
        Employees.remove({})
            .then(() => Employees.create(defaultObject))
            .then(response => {
                defaultObject._id = `${response._id}`
                done()
            })
            .catch(err => console.log('estou aqui', err))
    })

    describe(`Route get ${rotaUrl}`, (done) => {
        it('should list a Emplooyes', (done) => {
            requestAux.defaultGet(done, request, defaultObject, rotaUrl)
        })
    })

    describe(`Route get ${rotaUrl}{_id}`, () => {
        it('should return a one of Emplooyes', (done) => {
            requestAux.defaultGetOne(done, request, defaultObject, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route put ${rotaUrl}{id}`, () => {
        it('should update a Emplooyes', (done) => {
            defaultObject.name = 'Test'
            requestAux.defaultPut(done, request, defaultObject, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route delete ${rotaUrl}{id}`, () => {
        it('should delete a Emplooyes', (done) => {
            requestAux.defaultDelete(done, request, `${rotaUrl}/${defaultObject._id}`)
        })
    })

    describe(`Route create ${rotaUrl}`, () => {
        it('should create a Emplooyes', (done) => {
            requestAux.defaultPost(done, request, object, `${rotaUrl}`)
        })
    })
})
