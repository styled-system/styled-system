const { exec } = require('child_process')
const { promisify } = require('util')
const isCI = require('is-ci')
const x = promisify(exec)

const args = process.argv.slice(2)

const packages = require('./packages')

const cmd = pkg => ([
  `cd ${pkg}`,
  args.map(a => `npm ${a}`).join(' && ')
].join(' && '))

const runTest = async pkg => {
  try {
    console.log(cmd(pkg))
    const { stdout, stderr } = await x(cmd(pkg))

    if (stderr) console.error(stderr)
    if (stdout) console.log(stdout)
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}

packages.map(runTest)
