//Завдання *

//let a = Number(prompt('Введіть а')); 
//let b = Number(prompt('Введіть b'));
//let c = Number(prompt('Введіть c'));

/*let d = (b**2) - 4*a*c;
console.log(d);
let D = Math.sqrt(d);

let x1;
let x2;

if(d > 0){
    x1=(((-b)+D)/2*a);
    x2=(((-b)-D)/2*a);
    console.log(`Перше значення = ${x1}, друге значення = ${x2}.`);
}else if(D == 0){
    x1 = ((-b)/2*a);
    
}else{
    console.log("Розв'язків немає");
}*/

//Завдання **

/*let button = document.getElementById("button")
button.addEventListener("click", check);

let pass = document.getElementById("pass");
let pass2 = document.getElementById("pass2");

function check(){
    if((pass.value) != (pass2.value) ){
        alert("Ваші пароль не зівпадають");
    }else if(pass.value.length <=6){
        alert("Ваші паролі закороткі");
    }else{
        alert(`Запам'ятайте ваш пароль : ${pass.value}.`);
    }
}*/

// Завдання 1

/*let k = Number(prompt("Введіть а"));
let l = Number(prompt("Введіть b"));

if( k < l){
    console.log("a < b");
}else if(k == l){
    console.log("a = b");
}else{
    console.log("a > b");
}*/

//Завдання 2

console.log("До другого завдання:")

let helth = 100;
let button = document.getElementById("helth");
button.addEventListener("click", hit) 
let myHelth = document.getElementById("myHelth"); 
let container = document.getElementById("container");
container.style.cssText=`
    border: 5px solid black;
    height: 40px;
`;
myHelth.style.cssText=`
background: green;
height:40px;
width:100%;
`
function hit(){
    let m = Number(prompt("Введіть на скільки буде зменшуватися здоровя користувача"));

    if (m < helth){
    helth -=m;
    myHelth.style.cssText=`
    width: ${helth}%;
    background: green;
    height:40px;
    `;
    
    }else{
        alert("Ви вмерли");
        myHelth.style.cssText=`
        width:0px;
        background: green;
        height:40px;`
    }

}









