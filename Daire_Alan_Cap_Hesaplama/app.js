const sonuclar = document.getElementById("sonuclar")

function hesapla(){
    const yaricap = parseInt( document.getElementById("sayi").value )

    const alan  = (Math.PI * yaricap * yaricap).toFixed(2)
    const cevre = (Math.PI * yaricap * 2).toFixed(2)
   
    sonuclar.innerHTML += `<li>Yarıçapı ${yaricap} olan dairenin alanı <strong>${alan}</strong>, çevresiyse <strong>${cevre}</strong> olur.</li>`
}   

const dugme = document.getElementById("dugme").addEventListener("click", hesapla)

