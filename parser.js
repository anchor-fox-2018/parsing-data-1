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
  constructor(id, first_name, last_name, email, phone, created_at) {
    this._id = id;
    this._first_name = first_name;
    this._last_name = last_name;
    this._email = email;
    this._phone = phone;
    this._created_at = created_at;
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
      let inputPeople = nameList[i].split(',');

      let id = inputPeople[0];
      let first_name = inputPeople[1];
      let last_name = inputPeople[2];
      let email = inputPeople[3];
      let phone = inputPeople[4];
      let created_at = inputPeople[5];
      
      let dudette = new Person(id, first_name, last_name, email, phone, created_at);
      this._people.push(dudette);
    }
    return this._people;
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