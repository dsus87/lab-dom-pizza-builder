// Iteration 1: Names and Input
let hacker1 = "Daniel"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Emilia"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
}
else  {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}


// Iteration 3: Loops

// Iterartion 3.1  

let string = '';

for(let i = 0; i < hacker2.length; i++){
    string += hacker2[i].toUpperCase()+ ' '      // += is the additiona assignment operator The addition assignment (+=) operator performs addition (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.
}  
console.log(string)

// Iterartion 3.2

let wordReversed = ""

for (let i=hacker2.length-1;i>=0;i--){
    const char = hacker2[i]
    wordReversed += char
}

console.log(wordReversed)

// Iterartion 3.3

const result = hacker1.localeCompare(hacker2)

if (result < 0){
    console.log("The driver's name goes first.");
}
else if (result>0) {
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}

// Test