const perf = fn => args => {
  const start = new Date()
  fn(args)
  const end = new Date()

  return end - start
}

const Helper = {
  perf
}

module.exports = Helper
