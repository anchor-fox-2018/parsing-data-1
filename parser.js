"use strict"
const fs = require('fs')
class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(id, first_name, last_name, email, phone, created_at) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.created_at = Date(created_at);
  }
}

class PersonParser {

  constructor(file) {
    this._file = file;
    this._people = [];
  }

  parsingData() {
    let people_string = fs.readFileSync(this._file)
      .toString()
      .split("\n")

    for (var i = 1; i < people_string.length -1; i++) {
      let arrayOfPeople = people_string[i].split(',');
      let obj = new Person(arrayOfPeople[0], arrayOfPeople[1], arrayOfPeople[2], arrayOfPeople[3], arrayOfPeople[4], arrayOfPeople[5]);
      this._people.push(obj);
    }
    return this._people;
  }

  addPerson(personBaru) {
    this._people.push(personBaru);
  }

  saveNewList () {
    let convert = '' + Object.keys(this._people[0])
    for (var i = 1; i < this._people.length; i++) {
      let temp = Object.values(this._people[i]);
      convert += '\n' + temp;
    }
    fs.writeFileSync('newPeople.csv', convert, 'utf8');
  }

  get people() {
    let obj = {
      size: this._people.length
    }
    return obj;
  }
}

let parser = new PersonParser('people.csv');
parser.parsingData();

let anastasia = new Person('201','Anastasia', 'Santoso', 'tralalala@gmail.com', '1-519-693-8091', '2013-09-05T21:28:41-07:00')

parser.addPerson(anastasia);
parser.saveNewList();

console.log(`There are ${parser.people.size} people in the file '${parser._file}'.`)
