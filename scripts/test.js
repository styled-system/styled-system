const { exec } = require('child_process')
const { promisify } = require('util')
const x = promisify(exec)

const packages = require('./packages')

const cmd = pkg => `cd ${pkg} && npm t`
const runTest = async pkg => {
  try {
    const { stdout, stderr } = await x(cmd(pkg))
    if (stderr) console.error(stderr)
    if (stdout) console.log(stdout)
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}

packages.map(runTest)
