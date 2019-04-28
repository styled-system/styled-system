/* eslint-disable no-console, import/no-unresolved */
const Benchmark = require('benchmark')

const libs = [
  {
    name: 'actual',
    module: require('../dist/styled-system.cjs'),
  },
  {
    name: 'v4',
    module: require('./v4.1.0'),
  },
].map(({ name, module: { compose, fontSize, space } }) => {
  const system = compose(
    fontSize,
    space
  )
  const run = () => system({ p: [10, 20], mt: 10, m: '20px', fontSize: 10 })
  return { name, run }
})

const suite = new Benchmark.Suite()

console.log('Initial run...')

libs.forEach(lib => {
  console.log(lib.name, lib.run())
  suite.add(lib.name, lib.run)
})

console.log('Run suite...')

suite
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', function onComplete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
