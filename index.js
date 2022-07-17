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
  console.log(`runId: ${runId}`);
} catch (error) {
  core.setFailed(error.message);
}