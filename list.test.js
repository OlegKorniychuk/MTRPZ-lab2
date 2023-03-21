const List = require('./index.js');

describe("length()", () => {
  it("Should return 0 for an empty list", () => {
    let list1 = new List();
    expect(list1.length()).toEqual(0);
  })

  it("Should return number of elements", ()  => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    expect(list1.length()).toEqual(3);
  })
})

describe("append()", () => {
  it("Should add an element to the end of the list", ()  => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    expect(list1.get(0)).toBe("a");
    expect(list1.get(1)).toBe("b");
    expect(list1.get(2)).toBe("c");
    expect(list1.length()).toEqual(3);
  })

  it("Should only append chars to the list", () => {
    let list1 = new List();
    expect(() => list1.append(1)).toThrow("Wrong element type, char expected");
    expect(() => list1.append(null)).toThrow("Wrong element type, char expected");
    expect(() => list1.append(false)).toThrow("Wrong element type, char expected");
    expect(() => list1.append({ a: "aboba" })).toThrow("Wrong element type, char expected");
  })
})

describe("insert()", () => {
  it("Should insert an element into the list", ()  => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    list1.insert("f", 1);
    expect(list1.length()).toEqual(4);
    expect(list1.get(1)).toBe("f");
  })

  it("Should not insert items with out of range or non-numerical index", () => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    expect(() => list1.insert("f", 7)).toThrow("Index out of range");
    expect(() => list1.insert("f", "b")).toThrow("Index must be a number");
  })

  it("Should only insert chars", () => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    expect(() => list1.insert(1, 1)).toThrow("Wrong element type, char expected");
  })
})

describe("delete()", () => {
  it("Should delete an element with given index and return it", ()  => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    const deletedElement = list1.delete(0);
    expect(deletedElement).toBe("a");
    expect(list1.length()).toEqual(2);
    expect(list1.get(0)).toBe("b");
  })

  it("Should not accept out of range or non-numerical index", () => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    expect(() => list1.delete(5)).toThrow("Index out of range");
    expect(() => list1.delete("a")).toThrow("Wrong index type, number expected");
  })
})

describe("deleteAll()", () => {
  it("Should delete all occurances of given element", ()  => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    list1.append("a");
    list1.append("b");
    list1.append("c");
    list1.deleteAll("a");
    expect(list1.length()).toEqual(4);
  })

  it("Shouldn`t do anything if no occurances found", () => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    list1.deleteAll("n");
    list1.deleteAll(5);
    expect(list1.length()).toEqual(3);
  })
})

describe("get()", () => {
  it("Should return element at given index", ()  => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    const element = list1.get(0);
    expect(element).toBe("a");
    expect(list1.length()).toEqual(3);
  })

  it("Should not accept out of range or non-numerical index", () => {
    let list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    expect(() => list1.get(5)).toThrow("Index out of range");
    expect(() => list1.get("a")).toThrow("Wrong index type, number expected");
  })
})

// describe("clone()", () => {
//   it("Should return a copy of a list", ()  => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     const newList = list1.clone();
//     expect(newList.length()).toEqual(3);
//     expect(newList.get(0)).toBe("a");
//     expect(newList.get(1)).toBe("b");
//     expect(newList.get(2)).toBe("c");
//   })

//   it("Altering the copy should not alter the original", () => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     const newList = list1.clone();
//     newList.delete(2);
//     expect(list1.length()).toEqual(3);
//     expect(list1.get(2)).toBe("c");
//   })
// })

// describe("reverse()", () => {
//   it("Should reverse the order of the elements in a list", ()  => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     list1.reverse();
//     expect(list1.get(0)).toBe("c");
//     expect(list1.get(1)).toBe("b");
//     expect(list1.get(2)).toBe("a");
//   })
// })

// describe("findFirst()", () => {
//   it("Should find the first occurance of an element and return its index", ()  => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     const indexOfB = list1.findFirst("b");
//     expect(indexOfB).toEqual(1);
//   })

//   it("Should return -1 if no occurances found", () => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     const indexOfF = list1.findFirst("f");
//     expect(indexOfF).toEqual(-1);
//   })
// })

// describe("findLast()", () => {
//   it("Should find the last occurance of an element and return its index", ()  => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     const indexOfB = list1.findLast("b");
//     expect(indexOfB).toEqual(4);
//   })

//   it("Should return -1 if no occurances found", () => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     const indexOfF = list1.findFirst("f");
//     expect(indexOfF).toEqual(-1);
//   })
// })

// describe("clear()", () => {
//   it("Should delete all the elements of the list", ()  => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     list1.clear();
//     expect(list1.length()).toEqual(0);
//     expect(() => list1.get(0)).toThrow("Index out of range");
//   })
// })

// describe("extend()", () => {
//   it("Should append all the elements of the second list to the first one", ()  => {
//     let list1 = new List();
//     list1.append("a");
//     list1.append("b");
//     list1.append("c");
//     let list2 = new List();
//     list2.append("d");
//     list2.append("e");
//     list2.append("f");
//     list1.extend(list2);
//     expect(list1.length()).toEqual(6);
//     expect(list1.get(3)).toBe("d");
//     expect(list1.get(4)).toBe("e");
//     expect(list1.get(5)).toBe("f");
//   })
// })