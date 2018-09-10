"use strict"
const fs = require('fs');
class Person {
  constructor(_id,_firstname,_lastname,_email,_phone,_created_at){
    this.id = _id;
    this.first_name = _firstname;
    this.last_name = _lastname;
    this.email = _email;
    this.phone = _phone;
    this.created_at = _created_at;
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
    this.size = this.generateData().length
    return this
  }
  get file(){
    this._file = 'people.csv'
    return this._file
  }

  addPerson() {
    let hasil = []
    let hasilGenerate = this.generateData();
    hasil.push(hasilGenerate[0])
     for(let i = 1;i < hasilGenerate.length;i++){
      let person = new Person(hasilGenerate[i][0],hasilGenerate[i][1],hasilGenerate[i][2],hasilGenerate[i][3],hasilGenerate[i][4],hasilGenerate[i][5]);
        hasil.push(person)
     }
    
     return hasil
  }
  generateData(){
    let file = fs.readFileSync('people.csv').toString().split('\n');
    let hasil = []
    for(let i = 0;i < file.length;i++){
      let isi = file[i].split(',')
      hasil.push(isi)
    }
    return hasil
  }
  save (){
    let hasil = '' ;
    let addPerson = this.addPerson()
    for(let i = 0;i < addPerson.length;i++){
      let strArr = addPerson[i];
      if(i === 0){       
        hasil+=addPerson[i].join(',');
        hasil+= '\n'
      }else{
        let JadiString = Object.values(addPerson[i])
        hasil+=JadiString.join(',');
        if(i !== addPerson.length-1){
          hasil+= '\n'
        }
      }
    }
    fs.writeFileSync('new-people.csv',hasil)
    //console.log(addPerson.join('\n'))
  }

}
let parser = new PersonParser('people.csv')
console.log(`There are ${parser.people.size} people in the file '${parser.file}'.`)
console.log(parser.save())
//console.log(nama)