const Hoek = require('Hoek')

const r = // OK
const b = Hoek.merge({}, { "__proto__" : { "test" : 123 }}); // Blocked

console.log(r, b)