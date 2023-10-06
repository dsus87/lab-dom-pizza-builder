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

// BONUS 1

let longText = "elementum. Nulla eget porta neque. Aliquam molestie neque ac condimentum tempor. Sed vehicula nisi ut nisi porttitor, sed malesuada arcu consectetur. Nulla vestibulum efficitur odio id tempor. Aliquam in tempor ex, eget tempor metus. Nullam rutrum venenatis justo in vehicula. Mauris tristique finibus metus a interdum. Cras vitae ipsum ex. Nam ante sem, fringilla eget pretium eget, interdum vel magna. Donec consequat orci ut laoreet consectetur. Aliquam nisi lacus, pharetra blandit lectus maximus, lacinia tincidunt dolor. Donec commodo efficitur orci, vel blandit erat tincidunt sed. Praesent consectetur lectus a massa venenatis egestas. Morbi sit amet vestibulum nisi. Fusce tincidunt dapibus elit sit amet tempor. Duis pharetra ante vitae eros ullamcorper, id mollis mi hendrerit. Ut viverra nunc venenatis, efficitur turpis vel, semper risus. Suspendisse accumsan arcu iaculis, posuere risus at, commodo metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.In efficitur nisl vel lorem porta, gravida placerat leo ornare. Pellentesque nec lectus dui. Aenean vitae orci vitae risus varius accumsan. Mauris felis mauris, euismod et odio vestibulum, porta lobortis dolor. Quisque pellentesque nisl vitae sapien egestas tristique et at libero. Duis maximus dapibus dui, ac viverra mauris imperdiet et. Quisque imperdiet at quam at posuere. In hac habitasse platea dictumst. Duis lobortis tincidunt libero, et consequat mauris mattis eget. In id quam egestas, rhoncus ante quis, sagittis orci. Phasellus venenatis varius dui, vitae posuere odio gravida eu."


let words = longText.split(' ')
let count = words.length

console.log(count)

let etCount = 0

for (let i=0; i<longText.length;i++) {
 const twoChars =longText[i] + longText[i + 1] + longText[i + 2]

 if (twoChars === ' et' ){
    etCount++
 }

}
console.log(`${etCount}`)
