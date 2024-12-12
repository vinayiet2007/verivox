let verivox =[
    './project/ui/tests/features/*.feature',
    '--require ./project/ui/tests/steps/*.ts',
    '--require ./project/ui/tests/steps/*.ts',
    '--format json:reports/cucumber-report.json',
    '--format html:reports/report.html',
    '--require-module ts-node/register',
    '--format summary',
    '--format progress',
    '--format junit:test/results/cucumber-report.xml'
].join(' ');

module.exports = {
    default : verivox
};