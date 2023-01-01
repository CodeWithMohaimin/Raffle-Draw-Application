const myDB = require("../db/db");
// myDB.create("user01", 10);
// myDB.create("user02", 10);
// myDB.create("user03", 10);
// myDB.create("user04", 10);
// myDB.create("user05", 10);
// const tic = myDB.find();
// console.log(tic);
const bulk = myDB.bulkCreate("mohaimin", 20, 3);
console.log("bulk", bulk);

// const winners = myDB.draw(3);
// console.log("winner", winners);
