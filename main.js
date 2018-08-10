const git = require("isomorphic-git");
const path = require("path");
const fs = require("fs");

a

const repo = {
  dir: ".",
  fs
};

const main = async () => {
  console.log("start");
  let pushResponse = await git.push({
    ...repo,
    remote: "origin",
    ref: "master",
    authUsername: process.env.GITHUB_TOKEN,
    authPassword: process.env.GITHUB_TOKEN
  });
  console.log(pushResponse);
  // await git.clone({
  //   ...repo,
  //   url:
  //     "https://cors-buster-tbgktfqyku.now.sh/github.com/isomorphic-git/isomorphic-git",
  //   singleBranch: true,
  //   depth: 1
  // })
  console.log("done");
};

main();
