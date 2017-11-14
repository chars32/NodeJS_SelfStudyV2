module.exports.add = (a,b) => {
  return a + b
}

module.exports.square = (a) => {
  return a**2
}

module.exports.setName= (user, fullName) => {
  let name = fullName.split(' ')
  user.firstName = name[0]
  user.lastName = name[1]
  return user
}

module.exports.asyncAdd = (a,b,callback) => {
  setTimeout(() => {
    callback(a+b)
  }, 1000)
}

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a**2)
  }, 1200)
}
