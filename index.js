const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const repoName = core.getInput('repo-name');
  console.log(`repository ${repoName}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const runId = JSON.stringify(github.context.runId, undefined, 2)
  const repo = github.context.repo
  console.log(`runId: ${runId}`);
  console.log(`repo: ${repo}`);
  console.log(`github.token: ${github.token}`);
  console.log(`github.context.token: ${github.context.token}`);

} catch (error) {
  core.setFailed(error.message);
}