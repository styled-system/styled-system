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

const suite = new Benchmark.Suite()

suite
  .add('width', () => {
    width({ w: 1/2 })
  })
  .add('fontSize', () => {
    fontSize({ f: 2 })
  })
  .add('space', () => {
    space({ m: 2 })
  })
  .add('color', () => {
    color({ color: 'tomato' })
  })
  .add('style', () => {
    style({ prop: 'color' })({ color: 'tomato' })
  })
  .add('responsiveStyle', () => {
    responsiveStyle({ prop: 'color' })({ color: 'tomato' })
  })
  .add('width-array', () => {
    width({
      w: [ 1, 1/2, 1/3, 1/4, 1/5 ]
    })
  })
  .add('fontSize-array', () => {
    fontSize({
      f: [ 1, 2, 3, 4, 5 ]
    })
  })
  .add('space-array', () => {
    space({
      m: [ 0, 1, 2, 3, 4 ]
    })
  })
  .add('color-array', () => {
    color({
      color: [ 'red', 'blue', 'green', 'cyan', 'magenta' ]
    })
  })
  .add('responsiveStyle-array', () => {
    responsiveStyle({ prop: 'color' })({
      color: [
        'tomato', 'red', 'green', 'blue', 'cyan'
      ]
    })
  })
  .on('cycle', e => {
    console.log(String(e.target))
  })
  .on('complete', function () {
    const top = this.filter('fastest').map('name')
    console.log(`Fastest is ${top}`)
  })
  .run({ async: true })
