
const user ={
    username:"sau",
    price:999,
    welcomeMessage: function(){
       console.log(`${this.username} ,welcome to website`);
    }
}
user.welcomeMessage()
user.username='sam'
user.welcomeMessage()
console.log(this);