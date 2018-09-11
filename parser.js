"use strict"
const fs = require('fs')

class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(input){
    this._id = input.id;
    this._first_name = input.first_name;
    this._last_name = input.last_name;
    this._email = input.email;
    this._phone = input.phone;
  }

}

class PersonParser {

  constructor(file) {
    this._file = file
    this._people = []
  }

  get people() {
    return this._people
  }

  generateData(){
    let people = fs.readFileSync('people.csv').toString().split('\n') ;
    console.log(people);
    this._people = [];
    // console.log(people[])
    for(let i = 0; i < people.length; i++){
      let dataPerson = people[i].split(',')
      // console.log(dataPerson);
      let obj = {}
      obj.id = dataPerson[0];
      obj.first_name = dataPerson[1];
      obj.last_name = dataPerson[2];
      obj.email = dataPerson[3];
      obj.phone = dataPerson[4];
      obj.created_at = new Date(dataPerson[5]);
      this._people.push(obj);
    }
    return this._people;
    
  }

  
  addPerson() {
    return new Person;
  }

}

//write file sinc
//read file sinc

let parser = new PersonParser('people.csv')
console.log(parser.generateData());

// console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
