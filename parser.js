"use strict"

class Person {
  constructor(id, firstName, lastName, email, phone, createdAt) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phone = phone;
    this._createdAt = createdAt;
  }
  // Look at the above CSV file
  // What attributes should a Person object have?
}

class PersonParser {
  constructor(file) {
    this._file = file
    this._people = null
  }
  get people() {
    return this._people
  }
  addPerson() { }
}

let fs = require('fs');
let csv = fs.readFileSync('people.csv').toString();

let x = new Person(12, "Telo", "pisang", "telo@pisang.com", "08121212", "2012-05-10T03:53:40-07:00");
console.log(x);
// let parser = new PersonParser('people.csv')
// console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
