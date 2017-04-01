console.log("hello");

object oriented  describing things
var person = {
  hair: "curly",
  eyeColor: "dark brown",
  weight: "112"

}
console.log(person.hair)


  var car = {
  wheels: "round",
  color: "red",
  doors:4,
  engine : "bmv i3"

}
console.log (car)
// constructor funtion
function Car () {

}
var formField = {
  type: "text",
  numOfCharacter:10
}
function formField(type, numOfCharacter){
  this.type = type
  this.numOfCharacter = numOfCharacter
}
var textField = new formField("text",10)
var textField = new formField("password",20)
console.log (textField)
funtion StructureCar(brand, wheels){
  this.brand =brand
  this. wheels = wheels
}
StructureCar.prototype.friendlyBrand = funtion(){
  return "this structure car brand " + this.brand
}
var newStructeredcar = new StructureCar ("honda",2)
console.log(newStructeredcar.friendlyBrand());
// homework
// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

var Multiplier ={
  this.multiply =funtion(number){
    this.
}}

// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.
function Animal(gender,age, species){
 this.gender = gender
 this. age = age
 this. species = species
}
function Farm(){
  this.animals = []
}
Farm.prototype.addAnimal = function( animal) {
  this.animals.push(animal)
}
// creating an Object
var horse = new Animal ("female", 10, "horse")
var cow = new animal ("female", 12, "cow")
var farm =new Farm ("red")

console.log (horse)
console.log (farm)

create the objects methods
farm.addAnimal(horse)
farm.addAnimal(cow)
console.log (farm)

// ================================================
function Album (){
  this.photosArray = []
}

Album.prototype.addPhoto = function(photo){
  this.photosArray.push (photo)
}
Album.prototype.listAll =  function(){
  return this.photosArray
}
Album.prototype.seeSingle = function (index){
  return this.photosArray[index]
}
Album.prototype.seeSingle = function (index){
   return this photosArray[index]
}
Album.prototype.seeSingle =function (index1){
  return this photosArray[index2]
}
  var album1 = new Album();
  album1.addPhoto('newPic.jpg');
  album1.listAll();
  album1.seeSingle(0);
  album1.seeSingle(1);
  album1.seeSingle(2);
console.log(album1.listAll());
console.log(album1.seeSingle(0));


Album. prototype.listAll = (function){
for (var i = 0; i < this.photos.lenght; i++) {
  console.log(this.photos[i]);
}
}



function Photo ( photoyear,location ) {
  this.photoyear = photoyear
  this.location = location
}
var cat = new Photo ("1909", "nyc")
console.log( cat);

// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.


function Person (gender, age, haircolor){
  this.gender = gender
  this.age = age
  this.haircolor =haircolor
}
Person.prototype.displayAllInfo = function(){
  return this.gender + ":" + this.age
}
function Student (gender, age, haircolor){
  Person.call(this,gender, age, haircolor)
}
Student.prototype= Object.create(Person.prototype)

function Teacher (gender, age, haircolor){
  Person.call(this, gender, age, haircolor)
}
Teacher.prototype= Object.create(Person.prototype)

function School (){
 this.teachers= []
 this.students= []
}

var school = new School()

School.prototype.addStudent = function(student){
 this.students.push(student)
}
School.prototype.addTeacher = function(teacher){
 this.teachers.push(teacher)
}
School.prototype.displayAllInfo = function(){
 return this.teachers + this.students
}
var student = new Student ("female", 34, "blonde")
var teacher = new Teacher ("male", 12, "blonde")
var vince = new Student ("male", 34, "blonde")
var orlando = new Teacher("male", 34, "blonde")
school.addStudent(student)
school.addStudent(vince)
school.addTeacher(orlando)

console.log("student.displayAllInfo: " + student.displayAllInfo());
console.log("teacher.displayAllInfo: "+teacher.displayAllInfo());
console.log(school.students[0].displayAllInfo());
console.log(school.displayAllInfo());
console.log(school);
console.log(vince.displayAllInfo());
console.log(orlando.displayAllInfo());
