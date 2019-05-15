function Queue() {
  const list = []

  return {
    get: () => list.slice(),
    enqueue: element => {
      list.push(element)
      return list.length
    },
    dequeue: () => {
      return list.shift()
    }
  }
}

module.exports = Queue
