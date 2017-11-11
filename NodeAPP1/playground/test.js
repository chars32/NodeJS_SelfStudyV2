
let arr = [1,2,3,2,2,2,3,3,31,1,1,1,3,45,5,672342,453]

console.log(_.isString(true));
console.log(_.isString('hshshsh'));
console.log(arr);
console.log(_.uniq(arr));

let MJ = production.totalPoints(32292,5633)
let LBJ = production.totalPoints(29104, 7561)

console.log(`Micheal's point total is: ${MJ}`);
console.log(`Lebron's point total is: ${LBJ}`);

if (MJ > LBJ) {
  console.log(`Micheal has more points`);
}else {
  console.log(`Lebron has more points`);
}
