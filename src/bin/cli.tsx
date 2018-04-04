import { h, renderToString } from "ink";

import { Green } from "../lib/green";

import cosmiconfig = require("cosmiconfig")

import uuid = require("uuid/v4")

import * as execa from "execa"
import * as shell from "shelljs"
import * as path from "path"

interface IConfigV1 {
  version: number,
  type: "js" | "java",
  source_branch: string,
  target_branch: string,
  dependencies_branch_prefix: string,
  reviewers: string[],
  update: string,
  yarn_version: string,
}

const run_id = uuid()

const result =
  cosmiconfig("uaas", {
    rcExtensions: true,
    sync: true
  }).load()

const config = result.config as IConfigV1

const deps_branch = `${config.dependencies_branch_prefix}/${run_id}`
// checkout branch
//shell.exec(`git branch ${deps_branch} ${config.source_branch}`)

// update lockfile
//shell.exec(`yarn upgrade --ignore-scripts --ignore-engines --ignore-platform`)

// commit update
//shell.exec(`git commit yarn.lock -m "chore(deps): update yarn.lock"`)

// update dependencies one by one
const package_json = require(path.resolve("./package.json"))

const dependencyTypesToUpdate = ["dependencies", "devDependencies"]

dependencyTypesToUpdate
  .filter(t => package_json.hasOwnProperty(t))
  .map(t => {
    Object.keys(package_json[t])
      .forEach(k => {
        const latest = JSON.parse((shell.exec(`npm view ${k} --json dist-tags`, { silent: true} ).stdout as String).trim()).latest
        package_json[t][k] = latest
      })
    console.log(JSON.stringify(package_json))
  })

  /*
process.stdout.write(
  renderToString(
    <Green>
      {JSON.stringify(package_json, null, 2)}
    </Green>,
  ),
);
*/
