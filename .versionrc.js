const packageJson = require('./package.json');

const makeConfig = packageJson => ({
    types: [
        {'type': 'feat', 'section': 'Features'},
        {'type': 'feature', 'section': 'Features'},
        {'type': 'fix', 'section': 'Bug Fixes'},
        {'type': 'perf', 'section': 'Performance Improvements'},
        {'type': 'revert', 'section': 'Reverts'},
        {'type': 'docs', 'section': 'Documentation'},
        {'type': 'style', 'section': 'Styles'},
        {'type': 'chore', 'section': 'Miscellaneous'},
        {'type': 'refactor', 'section': 'Miscellaneous'},
        {'type': 'test', 'section': 'Tests'},
        {'type': 'build', 'section': 'Build'},
        {'type': 'ci', 'section': 'Build'}
    ],
    compareUrlFormat: `${packageJson.repository.url}/compare/diff?targetBranch=refs%2Ftags%2F{{currentTag}}&sourceBranch=refs%2Ftags%2F{{previousTag}}`,
    commitUrlFormat: `${packageJson.repository.url}/commits/{{hash}}`,
    issueUrlFormat: 'https://touchbase.touchnet.com/jira/browse/{{prefix}}{{id}}',
    issuePrefixes: ['[A-Z]+-'],
});

module.exports = makeConfig(packageJson);
