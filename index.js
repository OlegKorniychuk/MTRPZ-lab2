class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class List {
  constructor() {
    this.head = {
      value: null,
      next: null,
      previous: null
    }
    this.tail = this.head;
    this.len = 0;
  }

  printList() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
        array.push(currentList.value);
        currentList = currentList.next;
    }

    console.log(array.join(' <--> '));
    return this;
  }

  length() {
    return this.len;
  }

  append(element) {
    if (typeof(element) !== "string" || element.length > 1) {
      throw new Error("Wrong element type, char expected")
    }
    let newElement = new Element(element);

    if(this.len == 0) {
      this.head = this.tail = newElement;
    }

    this.tail.next = newElement;
    newElement.previous = this.tail;
    this.tail = newElement;

    this.len++;
  }

  insert(element, index) {
    if (typeof(element) !== "string" || element.length > 1) {
      throw new Error("Wrong element type, char expected")
    }
    if (index > this.len || index < 0) {
      throw new Error("Index out of range")
    }
    if (typeof(index) != "number") {
      throw new Error("Index must be a number");
    }

    if (index === 0) {
      let newElement = new Element(element);

      newElement.next = this.head;
      this.head.previous = newElement;
      this.head = newElement;
      this.len++;
    }

    if (index === this.len) {
      this.append(element);
    }

    let newElement = new Element(element);
    let previousElement = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousElement = previousElement.next;
    }

    let nextElement = previousElement.next;

    newElement.next = nextElement;
    previousElement.next = newElement;
    newElement.previous = previousElement;
    nextElement.previous = newElement;

    this.len++;
  }

  delete(index) {
    if (index >= this.len || index < 0) {
      throw new Error("Index out of range")
    }
    if (typeof(index) != "number") {
      throw new Error("Wrong index type, number expected");
    }

    if (index === 0) {
      let deletedValue = this.head.value;
      this.head = this.head.next;
      this.head.previous = null;

      this.len--;
      return deletedValue;
    }

    if (index === this.len - 1) {
      let deletedValue = this.tail.value;
      this.tail = this.tail.previous;
      this.tail.next = null;

      this.len--;
      return deletedValue;
    }

    let previousElement = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousElement = previousElement.next;
    }
    let deleteElement = previousElement.next;
    let deletedValue = deleteElement.value;
    let nextElement = deleteElement.next;

    previousElement.next = nextElement;
    nextElement.previous = previousElement;

    this.len--;
    return deletedValue;
  }

  deleteAll(element) {
    let currentElement = this.head;
    for(let i = 0; i < this.len; i++) {
      console.log(i);
      console.log(currentElement.value);
      if (currentElement.value == element) {
        this.delete(i);
        currentElement = currentElement.next;
      }
      currentElement = currentElement.next
    }
  }

  get(index) {
    if (index >= this.len || index < 0) {
      throw new Error("Index out of range")
    }
    if (typeof(index) != "number") {
      throw new Error("Wrong index type, number expected");
    }
    let currentElement = this.head;
    for(let i = 0; i < index; i++) {
      currentElement = currentElement.next
    }
    return currentElement.value;
  }

  clone() {
    
  }

  reverse() {
    
  }

  findFirst(element) {
    
  }

  findLast(element) {
    
  }

  clear() {
    
  }

  extend(list) {
    
  }
}

module.exports = List;