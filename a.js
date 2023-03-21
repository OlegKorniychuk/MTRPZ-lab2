const List = require("./index.js");

const list1 = new List();
list1.append("a");
list1.append("b");
list1.append("c");
list1.append("a");
list1.append("b");
list1.append("c");
list1.deleteAll("a");
list1.printList();