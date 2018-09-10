"use strict"

class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(people_list) {
    this._id = people_list[0];
    this._firstName = people_list[1];
    this._lastName = people_list[2];
    this._email = people_list[3];
    this._phone = people_list[4];
    this._createdAt = people_list[5];
  }
}

class PersonParser {

  constructor(file) {
    this._file = file;
    this._people = [];
  }

  people() {
    for (var i = 1; i < this._file.length; i++) {
      let arrayOfPeople = this._file[i].split(',');
      let obj = new Person(arrayOfPeople);
      this._people.push(obj);
    }
    return this._people;
  }

  addPerson() {}

}
var fs = require('fs');
var people_list = fs.readFileSync('people.csv')
  .toString()
  .split("\n")

let parser = new PersonParser(people_list);

console.log(parser.people());

//console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
