import UnionFind from '../src/UnionFind'

test('10 nodes', () => {
  const uf = UnionFind(10)
  uf.union(0, 5)
  uf.union(5, 6)
  uf.union(6, 1)
  uf.union(1, 2)
  uf.union(2, 7)

  uf.union(3, 8)
  uf.union(3, 4)
  uf.union(4, 9)
  expect(uf.connected(0, 7)).toBe(true)
  expect(uf.connected(1, 8)).toBe(false)
  uf.union(7, 8)
  expect(uf.connected(1, 8)).toBe(true)
})

test('1m nodes', () => {
  const uf = UnionFind(1000000)
  uf.union(0, 5)
  uf.union(5, 2000)
  uf.union(2000, 9876)
  uf.union(1, 9876)
  uf.union(0, 987314)
  uf.union(987314, 786111)
  uf.union(987314, 111222)
  uf.union(111222, 111333)

  uf.union(3, 8)
  uf.union(3, 4)
  uf.union(4, 9)
  expect(uf.connected(111333, 9876)).toBe(true)
  expect(uf.connected(2000, 8)).toBe(false)
  uf.union(987314, 8)
  expect(uf.connected(2000, 9)).toBe(true)
})
