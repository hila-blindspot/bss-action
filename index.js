const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const time = new Date().toTimeString();
    core.setOutput("time", time);

    const github_token = core.getInput("github_token", { required: true });
    const bs_token = core.getInput("bs_token", { required: true });
    const runId = JSON.stringify(github.context.runId, undefined, 2);
    const { owner, repo } = github.context.repo;
    //response= api request to dashboard_api(runId, artNAme)
    console.log(`runId: ${runId}`);
    console.log(`repo: ${repo} owner ${owner}`);
    console.log(`github_token: ${token}`);
    console.log(`bs_token: ${bs_token}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
