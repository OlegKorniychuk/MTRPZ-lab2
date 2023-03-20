class List {
  constructor() {
    this.list = [];
  }

  length() {
    return this.list.length;
  }

  append(element) {
    if (typeof(element) !== "string" || element.length > 1) {
      throw new Error("Wrong element type, char expected");
    }
    this.list.push(element);
  }

  insert(element, index) {
    if (typeof(element) !== "string" || element.length > 1) {
      throw new Error("Wrong element type, char expected");
    }
    if (typeof(index) !== "number") {
      throw new Error("Index must be a number");
    }
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index out of range");
    }
    this.list.splice(index, 0, element);
  }

  delete(index) {
    if (typeof(index) !== "number") {
      throw new Error("Wrong index type, number expected");
    }
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index out of range");
    }
    const spliced = this.list.splice(index, 1);
    return spliced[0];
  }

  deleteAll(element) {
    this.list = this.list.filter(char => char !== element);
  }

  get(index) {
    if (typeof(index) !== "number") {
      throw new Error("Wrong index type, number expected");
    }
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index out of range");
    }
    return this.list[index];
  }

  clone() {
    let clonedList = new List();
    clonedList.list = this.list.slice();
    return clonedList;
  }

  reverse() {
    this.list.reverse();
  }

  findFirst(element) {
    for (let i = 0; i < this.list.length; i++) {
      console.log(i);
      if (this.list[i] == element) {
        return i;
      }
    }
    return -1;
  }

  findLast(element) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i] == element) {
        return i;
      }
    }
    return -1;
  }

  clear() {
    this.list = [];
  }

  extend(list) {
    for (let i = 0; i < list.length(); i++) {
      this.list.push(list.get(i));
    }
  }
}

module.exports = List;