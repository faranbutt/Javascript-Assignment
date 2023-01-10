//..................Exercise 1 & 2.......................
// var is a function scope variable
if (i=0,i<10,i++){
  var name = "Faran"
  //prints "Faran"
}
console.log("Faran") 
//prints Faran
//---------------------------------------------------
//let is a block scope variable.Variable decleared by let can
//only be accessed insied block
if(a=0,a<10,a++){
  let age = 24
  console.log(age)
  //Prints age value = 24
}
console.log(age)
//Gives error 

//-------------------------------------------------
//const is a block scope whole value can't be accessed outside
//block neither its VALUE CAN"T BE CHANGED
if(p=0,p<10,p++){
  const umar = 24
  console.log(umar)
  //Prints umar = 24
  umar = 44
  //Gives error because reassigning value
} 
console.log(umar)
//Gives error because block scope
//.................................................................
//...............................................................
//................................................................
//,,,,,,,,,,,,,,,,,,,,,,,,,Exercise 3,,,,,,,,,,,,,,,,,,,,,,,
// An object literal in JavaScript allows us to create plain JavaScript objects.
// It consists of a list of key-value pairs, each separated by a comma and wrapped inside curly braces.
var myObject = {
  name:"faran",
  age:24,
  uni:"NUST"
}