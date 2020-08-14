const dugme = document.getElementById("hesapla")
const sonuclar = document.getElementById("sonuclar")

//const hesapla = () => alert(sayilar) 

function hesapla(){
    let uzun_kenar = document.getElementById("uzun_kenar").value
    let kisa_kenar = document.getElementById("kisa_kenar").value

    uzun_kenar = parseInt(uzun_kenar)
    kisa_kenar = parseInt(kisa_kenar)

    if(kisa_kenar > uzun_kenar){
        [uzun_kenar, kisa_kenar] = [kisa_kenar, uzun_kenar]
    }

    //[uzun_kenar,kisa_kenar]=(uzun_kenar>kisa_kenar)? [uzun_kenar,kisa_kenar]: [kisa_kenar,uzun_kenar]

    const alan = kisa_kenar * uzun_kenar
    const cevre = (kisa_kenar + uzun_kenar) * 2

    sonuclar.innerHTML += `<li>Kisa kenar: ${kisa_kenar}  - Uzun kenar: ${uzun_kenar} Alan: ${alan} - Çevre: ${cevre} </li>`

}



dugme.addEventListener("click",hesapla)

