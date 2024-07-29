let myDate = new Date();
//console.log(myDate.toString());
//console.log(myDate.toUTCString());
//console.log(typeof myDate);
//<-----------------For Specfic date declaration------------------>
let myCreateDate= new Date(2023,0,23,5,3)
//let myCreateDate= new Date(2023,0,23)
console.log(myCreateDate.toDateString());      //Mon Jan 23 2023
console.log(myCreateDate.toLocaleString());  //23/1/2023, 5:03:00 am

//<--------------FOR SPECFIC FORMATE DECLARTION ---------->
let myN1date= new Date("2023-01-14");
console.log(myN1date.toLocaleString());          //14/1/2023, 5:30:00 am
console.log(typeof myN1date.toLocaleDateString);         //function