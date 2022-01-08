//Closure - Nested function with preserved data value
//example of Closure in JavaScript

function increment(){
    let num = 1;
    return function(){
        num = num + 1;
        console.log(" current value of num is: " + num);        
    }
}

//Now when we create an instance of function increment, everytime we call it the num value will keep increasing.

const counter = increment(); // will return function
counter();  //2
counter();  //3
counter();  //4