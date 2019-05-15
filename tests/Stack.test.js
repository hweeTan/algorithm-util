const Stack = require('../src/Stack')

describe('Stack should top, push and pop correctly', () => {
  test('enque abc, xyz and then dequeue', () => {
    const list = Stack()
    expect(list.get()).toEqual([])

    list.push('abc')
    expect(list.get()).toEqual(['abc'])

    list.push('xyz')
    expect(list.get()).toEqual(['abc', 'xyz'])
    expect(list.pop()).toBe('xyz')
    expect(list.get()).toEqual(['abc'])
  })
})
