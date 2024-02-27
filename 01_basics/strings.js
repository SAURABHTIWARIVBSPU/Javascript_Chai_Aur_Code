const name ="SaurabhTiwari";
const repoCount = 25;
//console.log(name + repoCount +"value");// this syntax is outdated?

console.log( 'hello my name is $ {name} and my repo count is $ {repoCount}');
const gameName = new String('Saurabh');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());//original value is not changing only change the lower case all the value?
const game_Name= new String('Mohan');
console.log(game_Name.charAt(2));
console.log(game_Name.indexOf('h')); // for finding the position?
    const new_String = game_Name.substring(0,4);// Substring are ignoring the negative values;
const another_String = game_Name.slice(-8,4);// We can use the negative values in slice because it is not ignoring the value of the negative values
console.log(another_String);
/* trim and Replace method in */
const new_String_One = "Rahul";
console.log(new_String_One);
console.log(new_String_One.trim());
console.log(new_String_One.replace());
const url="http://saurabhtiwari.com/saurabh%20tiwari";
console.log(url.replace('%20','-'));
console.log(url.includes('tiwari')) ;  
/* how to find the key word is present are not*/
console.log(url.includes('Sunday'));

