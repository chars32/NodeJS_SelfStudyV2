let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'adrian'
  };

  setTimeout(() => {
    callback(user)
  }, 3000)
}

getUser(21, (user) => {
  console.log(user);
})
