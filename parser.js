"use strict"
const fs = require('fs');

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
    this._file = file;
    this._filename = "";
    this._people = [];
  }
  parseCsv() {
    let file = this._file;
    let fileInString = file.toString();
    let arr = fileInString.split('\n');
    for (let index = 1; index <= arr.length - 1; index++) {
      let csvDataCol = arr[index].split(',');
      let person = new Person(csvDataCol[0], csvDataCol[1], csvDataCol[2], csvDataCol[3], csvDataCol[4], csvDataCol[5])
      this._people.push(person);
    }
    console.log(this._people);
  }
  get people() {
    return { size: this._people.length };
  }
  get file() {
    return this._filename;
  }
  addPerson(Person) {
    this._people.push(Person);
  }
  save(filename) {
    this._filename = filename
    let stringToWrite = "";
    for (let index = 0; index < this._people.length; index++) {
      // stringToWrite = stringToWrite + this._people[index]._id.toString();
      // stringToWrite = stringToWrite + ",";
      // stringToWrite = stringToWrite + this._people[index]._firstName.toString();
      // stringToWrite = stringToWrite + ",";
      // stringToWrite = stringToWrite + this._people[index]._lastName.toString();
      // stringToWrite = stringToWrite + ",";
      // stringToWrite = stringToWrite + this._people[index]._email.toString();
      // stringToWrite = stringToWrite + ",";
      // stringToWrite = stringToWrite + this._people[index]._phone.toString();
      // stringToWrite = stringToWrite + ",";
      // stringToWrite = stringToWrite + new Date(this._people[index]._createdAt);
      stringToWrite = stringToWrite + Object.values(this._people[index]);
      stringToWrite = stringToWrite + "\n";
    }
    fs.writeFileSync(filename, stringToWrite, { encoding: "utf8", mode: 0o666, flag: "w" });
  }
}



let csv = fs.readFileSync('people.csv');
let parser = new PersonParser(csv);
parser.parseCsv();
parser.addPerson(new Person(999, "Wika", "Silo", "wika@hacktiv8.co.id", "0819999999", "2013-07-06T07:23:09-07:00"));
parser.save("output.csv");
console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
