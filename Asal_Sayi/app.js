const sonuclar = document.getElementById("sonuclar")

function hesapla(){
    const sayi = parseInt( document.getElementById("sayi").value )
    let bolen = 0
    let bolenler = []

    for(i=2; i<sayi; i++){
        if( (sayi % i) == 0 ) {
            bolen++    
            bolenler.push(i)    
        }
    }

    if(bolen == 0){
        //asal
        sonuclar.innerHTML += `<li> ${sayi} - Asal sayı </li>`

    }else{
        //asal değil 
        sonuclar.innerHTML += `<li> ${sayi} - Asal sayı değil (${bolenler.join(", ")}) sayilarına bölünebilir </li>`
    }
}   

const dugme = document.getElementById("dugme").addEventListener("click", hesapla)

