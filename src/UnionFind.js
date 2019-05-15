const root = (id, i) => {
  while (i !== id[i]) {
    id[i] = id[id[i]]
    i = id[i]
  }

  return i
}

function UnionFind(n) {
  const id = []
  const sz = []

  for (let i = 0; i < n; i++) {
    id[i] = i
  }

  return {
    connected: (p, q) => root(id, p) === root(id, q),
    union: (p, q) => {
      const i = root(id, p)
      const j = root(id, q)

      if (i === j) return

      if (sz[i] < sz[j]) {
        id[i] = j
        sz[j] += sz[i]
      } else {
        id[j] = i
        sz[i] += sz[j]
      }
    }
  }
}

module.exports = UnionFind
