//Preliminaries

//  5 is greater than 3
if (5>3) {
    console.log("is greater than");   
} 

//cat length
if ("cat".length === 3) {
    console.log("is the length");    
}

//cat vs dog
if ("cat" !="dog") {
    console.log("not the same")    
} 

//Bronze Medal
var person = {
    name: "Bobby",
    age: 12
  }

    if( person.age >= 18 ) {
        console.log( person.name + " is allowed to go to the movie");
    } else {
        console.log( person.name + " is not allowed to go to the movie");
    } 

    //First character
     console.log(person.name.charAt(0));

    if (person.name.charAt(0) === "B"){
        console.log(person.name.charAt + "Is allowed to go to the movie");
    }else {

        console.log(person.name.charAt + "Is not allowed to go to the movie");
    }
   
 //First character and age
console.log(person.name.charAt(0));

if (person.name.charAt(0) === "B" && person.age >=18 ){
    console.log(person.name.charAt + "Is allowed to go to the movie");
}else {

    console.log(person.name.charAt + "Is not allowed to go to the movie");
}
    
//Silver Medal part 1
if (1==="1") {
    console.log("strict")
}else if (1== "1") {
    console.log("loose");  
    
}else {
    console.log("not equal at all");
}

//Silver Medal part 2
 if( 1 <= 2 && 2 === 4) {
    console.log("yes");
} else {
    console.log("no");
} 
 
// Gold Medal Exercise
const val = 'dog';
 
if (typeof val === 'string') {
    console.log( val + 'Variable is a string');
}
else {
    console.log( val + 'Variable is not a string');
}
 
//Boolean
var x;

x = 0;
console.log(x == true);   
console.log(x == false);  


//Undefined variables
var x;
var y = 10; 

if(typeof x !== 'undefined'){
    // this statement will not execute
    alert("Variable x is defined.");
}

if(typeof y !== 'undefined'){
    // this statement will execute
    alert("Variable y is defined.");
}
