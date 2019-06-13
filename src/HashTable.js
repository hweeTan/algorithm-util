function HashTable(initial = {}) {
  const { hash, list } = Object.keys(initial).reduce(
    (result, key, index) => {
      result.hash[key] = index
      result.list.push(initial[key])
      return result
    },
    {
      hash: {},
      list: []
    }
  )
  return {
    size: () => list.length,
    get: key => hash[key] && list[hash[key]],
    set: (key, value) => {
      const index = list.push(value) - 1
      hash[key] = index
      return list.length
    },
    forEach: fn => {
      Object.keys(hash).forEach((key, index) => {
        fn([key, list[hash[key]]], index)
      })
    }
  }
}

module.exports = HashTable
