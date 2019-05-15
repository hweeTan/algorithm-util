const Queue = require('../src/Queue')

describe('Queue should enqueue and dequeue correctly', () => {
  test('enque abc, xyz and then dequeue', () => {
    const queue = Queue()
    expect(queue.get()).toEqual([])

    queue.enqueue('abc')
    expect(queue.get()).toEqual(['abc'])

    queue.enqueue('xyz')
    expect(queue.get()).toEqual(['abc', 'xyz'])
    expect(queue.dequeue()).toBe('abc')
    expect(queue.get()).toEqual(['xyz'])
  })
})
