const UnionFind = require('../src/UnionFind')

const runTest = sites => {
  const size = sites.length
  const n = Math.sqrt(size)

  const noOfNodes = size + 2
  const uf = UnionFind(noOfNodes)

  const firstNode = size
  const lastNode = size + 1

  for (let i = 0; i < size; i++) {
    if (!sites[i]) continue

    if (sites[i + 1] && (i + 1) % n !== 0) {
      uf.union(i, i + 1)
    }

    if (i + n < size && sites[i + n]) {
      uf.union(i, i + n)
    }

    if (i < n) uf.union(firstNode, i)
    else if (i >= size - n) uf.union(lastNode, i)
  }

  return uf.connected(firstNode, lastNode)
}

const test1 = [
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  false,
  true,
  false
]

const test2 = [
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  true,
  false
] // true

const test3 = [
  false,
  true,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false
] // false

const test4 = [
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  true
] // true

describe('Percolation threshold simulation', () => {
  test(`test1 ${test1.map(i => (i ? 'o' : 'x')).join('')} to be false`, () => {
    expect(runTest(test1)).toBe(false)
  })

  test(`test2 ${test1.map(i => (i ? 'o' : 'x')).join('')} to be true`, () => {
    expect(runTest(test2)).toBe(true)
  })

  test(`test3 ${test1.map(i => (i ? 'o' : 'x')).join('')} to be false`, () => {
    expect(runTest(test3)).toBe(false)
  })

  test(`test4 ${test1.map(i => (i ? 'o' : 'x')).join('')} to be true`, () => {
    expect(runTest(test4)).toBe(true)
  })
})
