"use strict"

// inserting file
var fs = require('fs')
var nameList = fs.readFileSync('people.csv')
  .toString()
  .split("\n")

// class person
class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(input) {
    let splitted = input.split(',');
    this._id = splitted[0];
    this._first_name = splitted[1];
    this._last_name = splitted[2];
    this._email = splitted[3];
    this._phone = splitted[4];
    this._created_at = splitted[5];
  }
}

// class person
class PersonParser {

  constructor(file) {
    this._file = file
    this._people = [];
  }

  rollPeople() {
    for (let i = 1; i < this._file.length; i++) {
      let dudette = new Person(nameList[i]);
      this._people.push(dudette);
    }
    return this.people;
  }

  get people() {
    return this._people
  }

  set people(input) {
  }

  addPerson() {}
}
let dudes = new PersonParser(nameList).rollPeople()
console.log(dudes);