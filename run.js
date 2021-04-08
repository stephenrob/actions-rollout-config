const fs = require('fs')

const params = fs.readFileSync('examples/params.yaml', 'utf8')

process.env.INPUT_CONFIG_FILE = 'examples/config.yaml'
process.env.INPUT_CONFIG = params

require('./index.js')