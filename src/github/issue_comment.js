const rp = require("request-promise");

const createAnIssueComment = (uri, body, token) =>
  rp({
    method: "POST",
    qs: {
      access_token: token,
    },
    headers: {
      "user-agent": "@keymux/github-cli",
      "content-type": "application/json",
      accept: "application/vnd.github.v3+json",
    },
    uri,
    body,
    resolveWithFullResponse: true,
    json: true,
  });

module.exports = {
  createAnIssueComment,
};
