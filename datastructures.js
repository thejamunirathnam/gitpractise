let originalDogs= ["Bulldog", "Beagle","Babrador"];
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let cats= new Array("American Curl","bengal");
let birds= new Array("Parrot","peacock","swan");


// copy elements
let slicedDogs = originalDogs.slice(1,2);
let copyDogs = [...originalDogs];
let dogs = originalDogs.slice(0);


// push and  pop 
// console.log(originalDogs)
let pusDog = originalDogs.push("Military dog");
// console.log(originalDogs)
let pullDog = originalDogs.pop();
// console.log(originalDogs)


// Add and remove first 
let addFirst = originalDogs.unshift("Military dog")
// console.log("unshiftt",originalDogs)
let shiftdog= originalDogs.shift();
// console.log("shift",originalDogs)

// where and how many 
// console.log(fruits.splice(0,2),"fruitssssssss",fruits)


// concat ,...spread ,sort 
console.log(dogs)
let animals = dogs.concat(cats,birds);
console.log(dogs,animals)
let newAnimal = [...dogs, ...cats].toString();
let sortDog= dogs.slice(0).sort();
A- z


