const isArray = require('is-array')
const objectMap = require('object.map')

module.exports = (list, fun) => {
  if (isArray(list)) {
    const promises = []

    list.map((v, k) => promises.push(fun(v, k)))

    return Promise.all(promises)
  }
  else {
    const promises = {}
    const results = {}

    objectMap(list, (v, k) => promises[k] = fun(v, k).then(r => results[k] = r))

    return Promise.all(Object.values(promises)).then(() => results)
  }
}