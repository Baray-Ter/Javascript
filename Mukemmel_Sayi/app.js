const sonuclar = document.getElementById("sonuclar")

function hesapla(){
    const sayi = parseInt( document.getElementById("sayi").value )
    let bolenler = []
    /*
    Algortima:
    1:Verilen sayıya ulaşılana kadar kendisine bölünen bütün sayılar heseplanacak
    2:Bölünen sayıları bir diziye aktarıcak
    3:Bu sayıları toplicak ve kendisine eşitmi diye kontrol edicek
    */
   
    /**
     * Adım:1
     * Verilen sayıya ulaşıldı ve kendisine bölünen sayılar hesaplandı 
     * Ve bölünenler dizisine eklendi
     */
    for(i=2; i<sayi; i++){
        if( (sayi % i) == 0 ) {
            bolenler.push(i)    
        }
    }

    /**
     * sayı = 6
     * let bolenler = [1, 2, 3, 9]
     */
    /**
     * 
     * 
     * 
     * topla(1,2) -- 3
     * topla(3,3) -- 6
     * topla(6,9) -- 15
     */
    const topla = (sayi1, sayi2) => sayi1 + sayi2

    let toplam = bolenler.reduce(topla)


    
    //yanlış if
    if(toplam == bolenler){
        //Mükemmel sayi
        sonuclar.innerHTML += `<li> ${sayi} - Mükemmel sayi</li>`

    }else{
        //Mükemmel sayi değil
        sonuclar.innerHTML += `<li> ${sayi} - Mükemmel sayi değil (${bolenler.join(", ")}) sayilarına bölünebilir </li>`
    }
}   

const dugme = document.getElementById("dugme").addEventListener("click", hesapla)

