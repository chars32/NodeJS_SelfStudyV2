module.exports.totalPoints = (points, assists) => {
  return points + (assists * 2)
}

module.exports.production = (points, assists, steals, blocks) => {
  return points + (assists * 2) - (steals + blocks)
}
