const rastgele_sayi = Math.floor(Math.random() * 101)

function hesapla(){
    // tahmin edilen sayıyı al
    const tahmin = parseInt( document.getElementById("sayi").value )

/**
 * tahmin edilen sayıyla, bilgisayarın tuttuğu sayıyı karşılaştır
 *
 */
    
    // durum 1: sayıyı bildik?
    if(tahmin == rastgele_sayi){
        sonuclar.innerHTML += `<li>Bildiniz!</li>`
    }
    

    // durum 2: sayı küçük
    if(tahmin < rastgele_sayi){ 
    sonuclar.innerHTML += `<li>${tahmin} Daha Çok</li>`
    }
    // durum 3: sayı büyük
    if(tahmin > rastgele_sayi){
    sonuclar.innerHTML += `<li>${tahmin} Daha az</li>`
    }
    // sonucu ekrana yazdır
    //sonuclar.innerHTML += `<li>Yarıçapı ${yaricap} olan dairenin alanı <strong>${alan}</strong>, çevresiyse <strong>${cevre}</strong> olur.</li>`
}   

const dugme = document.getElementById("dugme").addEventListener("click", hesapla)

