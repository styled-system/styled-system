const Benchmark = require('benchmark')
const {
  space,
  width,
  fontSize,
  color,
  style
} = require('../dist')

const suite = new Benchmark.Suite()

const tests = [
  // v3
  { name: 'space', func: () => space({ m: 2 }) },
  { name: 'width', func: () => width({ width: 1/2 }) },
  { name: 'fontSize', func: () => fontSize({ fontSize: 2 }) },
  { name: 'color', func: () => color({ color: 'tomato' }) },
  { name: 'style', func: () => style({ prop: 'color' })({ color: 'tomato' }) },
  { name: 'width array', func: () => width({ width: [ 1, 1/2, 1/3, 1/4, 1/5 ] }) },
  { name: 'space array', func: () => space({ m: [ 0, 1, 2, 3, 4 ] }) },
  { name: 'fontSize array', func: () => fontSize({ fontSize: [ 1, 2, 3, 4, 5 ] }) },
  {
    name: 'color array',
    func: () => color({ color: [
      'red',
      'blue',
      'green',
      'cyan',
      'magenta',
    ] })
  },
]

tests.forEach(({ name, func }) => { suite.add(name, func) })

suite
  .on('cycle', e => {
    console.log(String(e.target))
  })
  .on('complete', function () {
    const top = this.filter('fastest').map('name')
    console.log(`Fastest is ${top}`)
  })
  .run({ async: true })
