const core = require('@actions/core');
const yaml = require('js-yaml');
const fs = require('fs');
const merge = require('lodash.merge');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const configFile = core.getInput('config_file');
    const newConfig = yaml.load(core.getInput('config'))
    let fileContents = fs.readFileSync(configFile, 'utf-8');
    let config = yaml.load(fileContents);
    
    core.debug('Read config')
    core.debug(config)
    core.debug('Read new config')
    core.debug(newConfig)

    let updatedConfig = {}

    merge(updatedConfig, config)
    merge(updatedConfig, newConfig)

    core.debug('Updated config')
    core.debug(updatedConfig)

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
