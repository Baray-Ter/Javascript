
// for(let i = 0; i < sayi.length; i++){
//    for(let a = 0; a < sayi.length; a++){
//        console.log(` ${sayi[i]} x ${sayi[a]} = ${carpma(sayi[i],sayi[a])}`)
//    }
//}



/*

1,2,3,4,5,6,7,8
a,b,c,d,e,f,g,h

a8
b8
c8
d8
e8
f8
g8
h8
a7 b7 c7 d7 e7 f7 g7 h7



const sayi = [6,7,8,9,10,12,14,17]

const carpma = (x,y) => x * y



///////
sayi.map( i => {
        sayi.map( a=>{
            console.log(`${i} çarpı ${a} eşittir ${carpma(i,a)}`)
        })
    }
)
////////

/////////
const langs = ["Ahmet,Hasan,Nermin"]

let index = 0;

while(index < langs.length){

    console.log(langs[index]);

    index++;

}
////////

/////////
for(let index = 0; index < langs.length; index++){
    console.log(langs[length]);
}

const user = [
    {name: "Zeynep",age:"23"},
    {name: "Ahmet",age:"26"},
    {name: "Mustafa",age:"30"}
];

const names = users.map(function(user){ 
    return user.name
});
///////////
*/


// const sayilar = [1,2,3,4,5,6,7,8,9,10]

// const yaz = s => console.log(s)

// sayilar.map(i => {
//     // i sayılar dizisindeki her bir elaman
//     sayilar.map( j => {
//         // burada hem i hem de j değişkenini kullanabiliyorum
//         yaz(`${i} x ${j} = ${i*j}`)
//     })    
// })

/**
 * Sayısal Loto Programı
 * 
 * 
 * 1-100 arası 6 tane farklı sayı gösterecek
 */

 let sayilar = []

 while (sayilar.length < 6) {
    const i = Math.floor((Math.random() * 49) + 1)

    let sayivarmi = false

    sayilar.map(j => {
        if(i == j) {sayivarmi = true}
    })
  
    if( ! sayivarmi ){
        sayilar.push(i);
    }
 }
sayilar.sort(function(a, b){return a - b});

console.log(sayilar)

let value

value = document
value = document.all
value = document.all.length
value = document.all[0]


console.log(value)
