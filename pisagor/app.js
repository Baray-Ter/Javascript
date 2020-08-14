// function pisagor(a,b) {
//     return Math.sqrt(a*a + b*b);
// }

const pisagor = (a,b) => Math.sqrt(a*a + b*b);
const getValue = id => document.getElementById(id).value

const dugme = document.getElementById("dugme");
const sonuclar = document.getElementById("sonuclar");

function runPisagor(){
    const deger = pisagor(
        getValue("sayi1"),
        getValue("sayi2")
    )
    //alert(deger)
    sonuclar.innerHTML += `<li>${getValue("sayi1")}&sup2; + ${getValue("sayi2")}&sup2; = ${deger}&sup2;</li>`
}

dugme.addEventListener("click",runPisagor)