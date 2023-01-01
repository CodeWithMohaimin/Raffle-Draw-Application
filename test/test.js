const myDB = require("../db/db");
myDB.create("mohaimin", 10);
myDB.create("mohaimin2", 10);
myDB.create("mohaimin3", 10);
myDB.create("mohaimin4", 10);
myDB.create("mohaimin6", 10);
myDB.create("mohaimin7", 10);
myDB.create("mohaimin8", 10);
myDB.create("mohaimin9", 10);
myDB.create("mohaimin10", 10);
myDB.create("mohaimin11", 10);
myDB.create("mohaimin12", 10);
myDB.create("mohaimin13", 10);
myDB.create("mohaimin14", 10);
myDB.create("mohaimin15", 10);
myDB.create("mohaimin16", 10);
myDB.create("mohaimin17", 10);
myDB.create("mohaimin18", 10);
myDB.create("mohaimin19", 10);
myDB.create("mohaimin20", 10);

const tic = myDB.find();
console.log(tic);
// const bulk = myDB.bulkCreate("mohaimin", 20, 3);
// console.log("bulk", bulk);

const winners = myDB.drawWinners(3, tic);
console.log("winner___________", winners);
