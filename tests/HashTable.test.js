const HashTable = require('../src/HashTable')

describe('HashTable should perform size, get, set and forEach correctly', () => {
  test('perform init, get, set and then forEach', () => {
    const hashTable = HashTable({
      b: 1,
      a: 0,
      c: 2
    })
    expect(hashTable.get('a')).toEqual(0)
    expect(hashTable.set('d', 3)).toEqual(4)

    const expected = {
      b: 1,
      a: 0,
      c: 2,
      d: 3
    }

    hashTable.forEach((tuple, index) => {
      expect(tuple[0]).toEqual(Object.keys(expected)[index])
      expect(tuple[1]).toEqual(expected[tuple[0]])
    })
  })
})
