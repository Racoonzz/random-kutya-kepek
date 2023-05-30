function kiir(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("uzenet").innerHTML = res("messege")
    })
}