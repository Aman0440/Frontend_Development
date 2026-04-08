// concat() -> joins multiple array & returns result 

// unshift() -> add to start 

// shift() -> delete from Start & return

let marvelHeros = ["thor","spiderman","ironman"]
console.log("first array " , marvelHeros) // here we have created first array and printed it 
let dcHeros = ["superman","batman"];
console.log( "second array " , dcHeros) // here we have create second array and printed it 

let heroes = marvelHeros.concat(dcHeros);
console.log("after concate " , heroes) // at last we have add the array one and array two by using concat()