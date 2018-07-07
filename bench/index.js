const Benchmark = require('benchmark')
// v3
const {
  space,
  width,
  fontSize,
  color,
  style
} = require('../dist')
// v2
const {
  styles: v2,
  style: v2Style,
  responsiveStyle: v2responsiveStyle
} = require('../_dist')

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

const v2tests = [
  { name: 'v2 space', func: () => v2.space({ m: 2 }) },
  { name: 'v2 width', func: () => v2.width({ width: 1/2 }) },
  { name: 'v2 fontSize', func: () => v2.fontSize({ fontSize: 2 }) },
  { name: 'v2 color', func: () => v2.color({ color: 'tomato' }) },
  { name: 'v2 style', func: () => v2Style({ prop: 'color' })({ color: 'tomato' }) },
  { name: 'v2 responsiveStyle', func: () => v2responsiveStyle({ prop: 'color' })({ color: 'tomato' }) },
  { name: 'v2 width array', func: () => v2.width({ width: [ 1, 1/2, 1/3, 1/4, 1/5 ] }) },
  { name: 'v2 space array', func: () => v2.space({ m: [ 0, 1, 2, 3, 4 ] }) },
  { name: 'v2 fontSize array', func: () => v2.fontSize({ fontSize: [ 1, 2, 3, 4, 5 ] }) },
  {
    name: 'v2 color array',
    func: () => v2.color({ color: [
      'red',
      'blue',
      'green',
      'cyan',
      'magenta',
    ] })
  },
]

tests.forEach(({ name, func }) => { suite.add(name, func) })
v2tests.forEach(({ name, func }) => { suite.add(name, func) })

suite
  .on('cycle', e => {
    console.log(String(e.target))
  })
  .on('complete', function () {
    const top = this.filter('fastest').map('name')
    console.log(`Fastest is ${top}`)
  })
  .run({ async: true })
