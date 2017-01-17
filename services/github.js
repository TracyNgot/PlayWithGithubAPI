var GitHubApi = require('octonode');
var config = require('./../env.json')[process.env.NODE_ENV || 'dev'];

var github = new GitHubApi.client({
  username: config.github.USERNAME,
  password: config.github.PASSWORD
});

module.exports = github;