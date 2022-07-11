// let car1 = {
//     marka:"Bmw",
//     Model:"M5 compatation",
//     year:"2020",
//     Engine:"4.4",
//     horsepower:"625",
//     price: "300.000$"
    
// }
// let car2 = {
//     marka:"Merc",
//     Model:"G-63",
//     Year:"2020",
//     Engine:"4.0",
//     horsepower:"625",
//     price: "400.000$"
// }
// let carinfo = {
//      showmodels: function(){
//         return  this.marka + " " + this.Model
//      },
//      showyears: function(){
//         return this.year + " " + this.Engine
//      },
//      showpower: function(){
//         return this.price
//      },
//      showspeed:function(kmh,mph){
//         return "kmh"+kmh + " "+"mph"+ mph
//      }
// }
// console.log(carinfo.showmodels.call(car1));
// console.log(carinfo.showyears.call(car1));
// console.log(carinfo.showpower.call(car1));
// console.log(carinfo.showspeed.call(car1, 300,200));

let ok = document.getElementById('okay')
let userval = document.getElementById('user')
let userregex = document.getElementById('user')
ok.onclick = () => {
    let h1 = document.getElementById('h1')
    if(userval.value == ""){
        h1.innerHTML = "Plese write correctly"
        return false;
    }
    if(userval.value.length < 4){
        h1.innerHTML = "Username is uncorrect"
        return false;
    }
    if(h1 = validateForm){
        alert('duzgun yazdin')
    }
    else{
        alert('pasword yanlisdi')
    }
    let mail = document.getElementById('mail')
    if(mail = ValidateEmail){
        alert(' mail duzgundu')
    }
    else{
        alert('mail duzgun deil')
    }
    
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function validateForm(){
    let nameRegex = /^[a-zA-Z\-]+$/;
    if(validUsername == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.frm.firstName.focus();
        return false;
    }
}