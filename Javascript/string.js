
// Lowercase & uppercase

var name = "Rizwan";
name.toLowerCase() // 'rizwan'
name.toUpperCase() // 'RIZWAN'

// charAt

var name = "Rizwan";
name.charAt(2) // z

// concat

var name = "Rizwan";
name.concat(" Jamal") // "Rizwan Jamal"

// startsWith & endsWith

var name = "Rizwan";
name.startsWith("Ri") // true
name.endsWith("an") // true

// replace

var name = "Faisalabad";
name.replace('Faisal', 'Islam')

// trim
var greeting = '   Hello world!   ';
greeting.trim() // 'Hello World!'

// trim start & trim end
var greeting = '   Hello world!   ';
greeting.trimStart() // 'Hello World!   '
greeting.trimEnd() // '   Hello World!'


// Split

// Example 1
var name = "Rizwan";
name.split() // ["Rizwan"]
name.split("w") // ["Riz", "an"]

// Example 2
var url = "https://www.google.com";
var splittedUrl= url.split("/"); // ["https:", "", "www.google.com"]
splittedUrl.pop() // www.google.com
