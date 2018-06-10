#!/usr/bin/env node

const api = require("../src/main");
const path = require("path");
const rp = require("request-promise");

const { readFilePromise } = require("@keymux/promisrfs");

const command = process.argv[2];

const uri = [
  "https://api.github.com/repos/",
  process.env.ghprbGhRepository,
  "/issues/",
  process.env.ghprbPullId,
  "comments",
].join("");

const apiKey = process.env.GITHUB_ACCESS_TOKEN;

const bodyFile = path.resolve(process.env.BODY_FILE);

const main = () =>
  readFilePromise(bodyFile)
    .then(body => {
      body: body.toString();
    })
    .then(body =>
      api[command](uri, body, apiKey)
        .then(console.log)
        .then(() => process.exit(0))
        .catch(console.error)
        .then(() => process.exit(-1))
    );

return main();
