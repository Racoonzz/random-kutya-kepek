function kiirRandomKep(breed){
    fetch("https://dog.ceo/api/breed/${breed}/images/random")
    .then(adat=>adat.json())
    .then(res => {
        document.getElementById("kep").src = res["message"]
    })
}

kiirRandomKep("dashshud");
kiirRandomKep("labrador");
kiirRandomKep("husky");
kiirRandomKep("vizsla");
kiirRandomKep("rottweiler");
