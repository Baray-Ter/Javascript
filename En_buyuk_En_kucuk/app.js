const dugme = document.getElementById("hesapla")
const sonuclar = document.getElementById("sonuclar")

//const hesapla = () => alert(sayilar) 

function hesapla(){
    const sayilar = document.getElementById("sayilar").value
    const sayi_dizisi = sayilar.split(" ")

    let buyuk_sayi = 0
    let kucuk_sayi = 0


    const sayi_bul = (sayi) => {
        sayi = parseInt(sayi)
        
        buyuk_sayi = (buyuk_sayi == 0) ? sayi: buyuk_sayi
        kucuk_sayi = (kucuk_sayi == 0) ? sayi: kucuk_sayi

        buyuk_sayi = (buyuk_sayi < sayi) ? sayi : buyuk_sayi
        kucuk_sayi = (kucuk_sayi < sayi) ? kucuk_sayi : sayi 

    }

    

    sayi_dizisi.map(sayi_bul)

    sonuclar.innerHTML += `<li>Büyük sayı: ${buyuk_sayi} - Küçük sayı: ${kucuk_sayi} - [${sayi_dizisi.join(", ")}] </li>`

    //alert(buyuk_sayi)
    //alert(kucuk_sayi)


    // if(sayi_dizisi[0] < sayi_dizisi[1]){
    //     alert(sayi_dizisi[0])
    // }
    // else{
    //     alert(sayi_dizisi[1])
    // }

}



dugme.addEventListener("click",hesapla)

