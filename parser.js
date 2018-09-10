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

  parsingData() {
    for (let i = 1; i < this._file.length - 1; i++) {
      let inputPeople = nameList[i].split(',');

      let id = inputPeople[0];
      let first_name = inputPeople[1];
      let last_name = inputPeople[2];
      let email = inputPeople[3];
      let phone = inputPeople[4];
      let created_at = new Date(inputPeople[5]);
      
      let dudette = new Person(id, first_name, last_name, email, phone, created_at);
      this._people.push(dudette);
    }
    return this._people;
  }

  get people() {
    return this._people
  }

  addPerson(input) {
    let inputPeople = input.split(',')

    let id = inputPeople[0];
    let first_name = inputPeople[1];
    let last_name = inputPeople[2];
    let email = inputPeople[3];
    let phone = inputPeople[4];
    let created_at = new Date(inputPeople[5]);

    let dudette = new Person(id, first_name, last_name, email, phone, created_at);

    this._people.push(dudette)
  }

  save() {
    let parent = '';
    for (let i = 0; i < this._people.length; i++) {
      let temp = `${this._people[i]._id},${this._people[i]._first_name},${this._people[i]._last_name},${this._people[i]._email},${this._people[i]._phone},${this._people[i]._created_at}` + '\n';
      parent += temp;
    }
    fs.writeFileSync('people3.csv', parent, 'utf8');
  }
}
let dudes = new PersonParser(nameList);

dudes.parsingData();

dudes.addPerson('200,Merritt,Joyce,malesuada.fringilla@elitNullafacilisi.edu,1-702-580-4785,2012-02-22T10:09:03-08:00');

dudes.save();