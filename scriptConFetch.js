

let url = "https://dog.ceo/api/breeds/image/random"



//listeners


document.getElementById("button").addEventListener("click", cargarperro)
    
function cargarperro(){
fetch(url)

    .then( res => res.json())
    .then(data => {
        let img = document.getElementById('img')
            img.src = data.message;
            img.height = 300;
            img.style.borderRadius = "30px";

    
    });
    }

cargarperro()