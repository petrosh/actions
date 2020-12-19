module.exports = ({github, context}) => {
  const files_double = github.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.number
  }).then((response) => {
    console.log(response.data.filename, response.data.contents_url);
    return true;
  });
}
