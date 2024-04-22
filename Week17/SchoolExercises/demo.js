console.log("Hello world!"); // Print en sætning ud
var fullName = "Ahmad Alkaseb"; // Compileren finder selv ud af, hvilken datatype, der skal bruges.
fullName = 12; //Dynamasiske typer i JS og ikke statistike typer ligesom i Java.

//Forskellige datatyper String, number, boolean
var string = "asdkf";
var number  = 12;
var isBoolean  = true;

// var = variabel , oprindelige måde at gøre det på i gamle dage, men derefter fik vi const eller let
// var er gammeldags. var burde man bruge i dag. Brug const til default ellers let hvis datatypen skal kunne ændres.

//const object = {}; // Svarer til et map, key value
const object = {name: "John Doe", age: 12, isStudent: true, friends:["Jacne","jacl"], mother: {name: "ajsdasd", age:40}};
console.log("Mother's name: "+object.mother.name);
console.log(object.name); console.log(object.age);
console.log(object);

const arr = [1,"John",true,{name: "a", age:40}]; // Svarer til en liste
console.log(arr);
console.log(arr[0]);
arr.push("ahmad");
console.log(arr);
const popped = arr.pop();//Fjern det sidste indek i array'et
console.log("popped: ",popped+".", "Hello", "world"); 
console.log(arr);
const subArr = arr.slice(1,2); //Inklusiv indeks 1 og ekslusiv indeks 2
console.log(subArr);

// null
const myValue = null; // Man har bevidst sat den til null
console.log(myValue);
let myVar; // Det sker fordi man muligvis ikke har gjort noget ved den. en forglemmelse.
console.log(myVar); 

// function
function myFunc(name){ // ingen returtype
    if(typeof name === "string"){ // tjekker om den er en string. kan også tjekke for number ved "number".
    console.log("hello ", name);
    }
    else {
        console.log("Ikke en string");
    }
}
myFunc(12); // I JS bliver en funktion kaldt højstede. Det vil sige, at den kan blive kaldt længere op i ens kode.

// Ved sammenligner bruger man tre =.
const var1 = 10;
const var2 = "10";
console.log(var1 == var2); // Tjekker kun værdien .  Vi får true tilbage.
console.log(var1 === var2); // Ved tre tjekker den også datatypen. Vi får false tilbage, som vi gerne vil have.

const myString = "Hello world!";
console.log(myString.length);
console.log(myString.substring(0,5)); //Inklusiv 0 og ekslusiv 5.
console.log(myString.replace("Hello", "Hi"));
console.log(myString.indexOf("world"));

const newArr = ["Ahmad", "Jane", "Jack"];
for(let i = 0; i < newArr.length; i++){
    console.log(newArr[i])
}

newArr.forEach(function (name) {
    console.log(name);
});

newArr.forEach( (name, index)  => {
    console.log(name, index);
});

const newArrNew = newArr.map((name) => { // Arrow functions ikke lambda functions. 
    //Tager et callback, altså en function ind som parameter 
    return name + " Doe";
});
console.log(newArrNew);

const obj = {name: "John Doe", age: 12, isStudent: true, friends:["Jacne","jacl"], mother: {name: "ajsdasd", age:40}};
for(const key in obj){ // in opperator når vi bruger et object, og of når vi løber et array igennem i forhold til arrayets elementer.
    console.log(key,obj[key]);
}

for (const pop of newArr){
    console.log(pop);
}

// Descructing, kan bruges til arrays og objekter
const {name : fullNamee, age} = obj;
console.log(fullNamee,age);
console.log("");
const [first,second, ...rest] = newArr;
console.log(first,second,rest);

// ...rest hedder spread operator

const obj2 = {...obj,name: "Ahmad A", age: 42}; // Vi overskrider de nuværende værdier for name og age.
console.log(obj2); 