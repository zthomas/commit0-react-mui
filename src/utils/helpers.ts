// function getProp(
//   object: object,
//   path: string | Array<string>,
//   defaultVal: any
// ): any {
//   const _path = Array.isArray(path)
//     ? path
//     : path.split('.').filter(i => i.length)
//   if (!_path.length) {
//     return object === undefined ? defaultVal : object
//   } else if (object === undefined || object === null) {
//     return undefined
//   }
//   return getProp(object[_path.shift()], _path, defaultVal)
// }

// function setProp(object: object, keys: string | Array<string>, val: any): any {
//   keys = Array.isArray(keys) ? keys : keys.split('.').filter(i => i.length)
//   if (keys.length > 1) {
//     object[keys[0]] = object[keys[0]] || {}
//     return setProp(object[keys[0]], keys.slice(1), val)
//   }
//   object[keys[0]] = val
// }

function keyBy(collection = [], key: string) {
  return collection.reduce((obj, val) => {
    const keyValue = val[key]
    obj[keyValue] = val
    return obj
  }, {})
}

function clamp(number: number, min: number, max: number = Infinity) {
  return Math.min(Math.max(number, min), max)
}

module.exports = {
  // getProp,
  // setProp,
  keyBy,
  clamp,
}
