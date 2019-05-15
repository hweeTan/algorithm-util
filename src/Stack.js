function Stack() {
  const list = []

  return {
    get: () => list.slice(),
    top: () => list[list.length - 1],
    push: element => {
      list.push(element)
      return list.length
    },
    pop: () => {
      return list.pop()
    }
  }
}

module.exports = Stack
