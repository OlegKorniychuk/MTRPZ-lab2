const List = require("./index.js");

const list1 = new List();
list1.append("a");
list1.append("b");
list1.append("a");
list1.append("b");
console.log(list1.findFirst("a"));
console.log(list1.findLast("a"));
list1.clear()
console.log(list1.length());
list1.get(1);