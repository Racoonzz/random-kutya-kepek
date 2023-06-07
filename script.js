function kiir(){
    fetch("https://dog.ceo/api/breed/dachshund/images/random")
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("kep1").src = res["message"]
    })
}

function kiir1(){
    fetch("https://dog.ceo/api/breed/labrador/images/random")
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("kep2").src = res["message"]
    })
}

function kiir2(){
    fetch("https://dog.ceo/api/breed/husky/images/random")
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("kep3").src = res["message"]
    })
}

function kiir3(){
    fetch("https://dog.ceo/api/breed/vizsla/images/random")
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("kep4").src = res["message"]
    })
}

function kiir4(){
    fetch("https://dog.ceo/api/breed/rottweiler/images/random")
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("kep5").src = res["message"]
    })
}