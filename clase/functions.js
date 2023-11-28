// ***** TIPOS DE VARIABLES
// const= para constantes
const pi = 3.1416;
const pul= 2.54;
// var= para variables globales
var cant_days = 10;
var name      = "Yurith Noelia Toro";
// let = para variables de bloque o locales son como contadores  
let count = 5;
let i     = 0;

// ###### FORMAS DE IMPRESION O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Yurith Noelia Toro</h1>";
document.getElementById("text_one").innerText = "<h1>Yurith Noelia Toro</h1>";
// LIBRERIAS
Swal.fire({
    icon: 'success',
    title: 'Yurith Noelia ',
    text: 'Estudiante de la UFPSO',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background:'#000'
});
// TIPOS DE DATOS
// NUMERICOS
let number_one = 10;
let number_two = 5.5;
// STRING
let text = "Soy un texto";
// BOOLEANOS
let boolean = true; // false
// ARRAY
let array_num = [1,2,3,4,5,6];
let array_tex = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
    {name: "Yurith", last_name:"Pallares", age: 19},
    {name: "Roberth", last_name:"Carvajalino", age: 25},
    {name: "Ibeth",last_name:"Pallares", age: 15},
    {name: "Karol",last_name:"Angarita", age:17}
];

// ##### OPERADORES BASICOS
// SUMA
var suma = number_one + number_two;
console.log("Suma = " + suma);
// RESTA
var resta = number_one - number_two;
console.log("Resta = " + resta);
// MULTIPLICACION
var multi = number_one * number_two;
console.log("Multiplicacion =" + multi)
// DIVISION
var div = number_one / number_two;
div = div.toFixed(2);
console.log("Division = " + div);
// MOOD - MODULO  
var mod = number_one % number_two;
console.log("Módulo = " + mod);


console.log(
    "Suma = " + suma +"\n" +
    "Resta = " + resta +"\n" +
    "Multiplicacion =" + multi +"\n" +
    "Division = " + div +"\n" +
    "Módulo = " + mod +"\n"
);

var respuesta = "Suma = " + suma + "<br>" + "Resta = " + resta + "<br>" + "Multiplicacion =" + multi + "<br>" + "Division = " + div + "<br>" + "Módulo = " + mod ;

Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background:'#fff' ,
    timer: 1000,
    showConfirmButton: false
});

// ##### OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES (i)
// AND &&(ampersan) con if
var bool    = false;
var numeric = 5;
if(!bool && numeric === 5){ 
    console.log("Ingresa if: " + bool);
} 
else {
    console.log("Ingresa else: " + bool);
}
// OR || con if
var age = 31;
if(age == 31 || numeric == "5"){
    console.log("ingresa if: " + age)
    age++;
}
else{
    console.log("Ingresa else: " + age)
}
console.log(age);

//FOR
console.log(array_tex.length)
for(let i=0; i <array_tex.length; i++){
    console.log(array_tex[i] + (i + 1));
}

//WHILE
let j = 0;
while(j<array_tex.length){
    console.log(array_tex[j] + (j + 1));
    j++;
}
// DO WHILE
let w = 0;
do{
    console.log(array_tex[j] + (j + 1));
    w++;
}while(w<array_tex.length)

// FUNCIONES
function load_page(){ 
    alert("Bienvenido a mi sitio web")
}

var color = "#fff"
function change_color(){
    document.body.style.backgroundColor = "blue"
    document.body.style.color = color;
}

const btn_clear = document.querySelector("#limpiar")
btn_clear.addEventListener("click", () => { 
    document.body.style.backgroundColor = "white"
    document.body.style.color = "#000";
});


const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos")
const validation    = document.getElementById("validation")

form_register.addEventListener("submit", event_name =>{ 
    event_name.preventDefault();
    let info = "";
    if(nombres.ariaValueMax.length <= 2 || apellidos.ariaValueMax.length <= 2 ){
        info += "Nombres y o apellidos deben ser mayores a 2 letras";
        validation.style.backgroundColor ;
    }
    else{
        accion.style.backgroundColor = "green";
    }
});

function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getMonth());

    for(let a=0; a<array_mul.length; a++){
        console.log(array_mul[a].name);
    } 
}

function validate(){ // es para que el usuario entienda que no puede hacer nada sin registrarse 
    alert("funciona");
    let nombres = document.getElementById("nombres").value;
    console.log(nombres.length);
    if(nombres.length > 2){ // identifica si una caja de texto esta vacia o no 
         document.getElementById("apellidos").disabled = false;
         document.getElementById("apellidos").focus();
        
        alert(nombres.split("")); 
        document.getElementById("nombres").value = " ";

    }
}

function lim(){
    let nombres = document.getElementById("nombres");
}