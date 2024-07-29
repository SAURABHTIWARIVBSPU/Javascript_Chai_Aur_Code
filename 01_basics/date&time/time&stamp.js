let newDate= new Date();
//console.log(newDate.getMonth());
//console.log(newDate.getDay());
//console.log(newDate.getMilliseconds()){
newDate.toLocaleDateString('default',
{
    weekday:"long"
})
console.log(newDate.toLocaleTimeString())
