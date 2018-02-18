import fs from 'fs'
import test from 'ava'
import path from 'path'
import webpack from 'webpack'
import memoryFs from 'memory-fs'

const testFixture = (fixture, options = {}) => {
  const compiler = webpack({
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    externals: {
      'system-components': 'systemComponents'
    },
    module: {
      rules: [
        {
          test: /fixture.json$/,
          use: path.resolve(__dirname, './')
        }
      ]
    }
  })

  compiler.outputFileSystem = new memoryFs()

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)

      resolve(stats)
    })
  })
}

test('returns components', async t => {
  const stats = await testFixture('fixture.json')
  const json = stats.toJson()
  const src = json.modules[0].source
  t.snapshot(src)
})
