function kiirRandomKep(fajta){
    fetch(`https://dog.ceo/api/breed/${fajta}/images/random`)
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("kep").src = res["message"]
    })
}

