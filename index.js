const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml')
const fs = require('fs')

try{
    const baseURLs = core.getMultilineInput('baseURLs')
    const ids = yaml.load(fs.readFileSync('ids.yml', 'utf8'));
    console.log(ids);
}
catch (e) {
    core.setFailed(e.message)
}