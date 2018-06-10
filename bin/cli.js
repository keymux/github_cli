#!/usr/bin/env node

const api = require("../src/main");
const rp = require("request-promise");

const command = process.argv[2];

const uri = [
  "https://api.github.com/repos/",
  process.env.ghprbGhRepository,
  "/issues/",
  ghprbPullId,
  "comments",
].join("");

const body = {
  body: "test",
};

const apiKey = process.env.GITHUB_ACCESS_TOKEN;

console.log(uri);
console.log(api[command].toString());

const main = () =>
  api[command](uri, body, apiKey)
    .then(console.log)
    .then(() => process.exit(0))
    .catch(console.error)
    .then(() => process.exit(-1));

return main();
