const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    // `who-to-greet` input defined in action metadata file
    const token = core.getInput("github_token", { required: true });
    const repoName = core.getInput("repo-name");
    console.log(`repository ${repoName}!`);
    const time = new Date().toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    // const github = new GitHub(process.env.GITHUB_TOKEN);
    const runId = JSON.stringify(github.context.runId, undefined, 2);
    const { owner, repo } = github.context.repo;
    console.log(`runId: ${runId}`);
    console.log(`repo: ${repo} owner ${owner}`);
    console.log(`github.token: ${github}`);
    console.log(`github.context.token: ${token}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
