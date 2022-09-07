const date = require('./src/dataFormat')
const html = require('./src/htmlEscape')

module.exports = {
    ...date,
    ...html
}