import deepmerge from 'deepmerge' // < 1kb payload overhead when lodash/merge is > 3kb.

export const is = n => n !== undefined && n !== null
export const num = n => typeof n === 'number' && !Number.isNaN(n)
export const string = n => typeof n === 'string' && n !== ''
export const obj = n => typeof n === 'object' && n !== null
export const func = n => typeof n === 'function'
export const negative = n => n < 0

export const get = (obj, path) =>
  String(path)
    .split('.')
    .reduce((a, b) => (a && is(a[b]) ? a[b] : undefined), obj)

export function merge(acc, item) {
  if (!item) {
    return acc
  }

  return deepmerge(acc, item, {
    clone: false, // No need to clone deep, it's way faster.
  })
}

export const assign = (target, source) => {
  const keys = Object.keys(source || {})
  const totalKeys = keys.length
  for (let i = 0; i < totalKeys; i += 1) {
    const key = keys[i]
    target[key] = source[key]
  }
  return target
}
