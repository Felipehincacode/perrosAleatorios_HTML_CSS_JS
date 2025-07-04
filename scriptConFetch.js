

let url1 = "https://dog.ceo/api/breeds/image/random"

let url2 = "https://api.thecatapi.com/v1/images/search"

//listeners


document.getElementById("button1").addEventListener("click", cargarperro);
document.getElementById("button2").addEventListener("click", cargargato);


    
function cargarperro(){
fetch(url1)

    .then( res => res.json())
    .then(data => {
        let img = document.getElementById('img')
            img.src = data.message;
            img.height = 300;
            img.style.borderRadius = "30px";

    
    });
    }



async function cargargato(){
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    let image = document.getElementById('img'); // Correctly gets the image element
    image.src = data[0].url; // Correctly sets the src property of the image element
    image.height = 300; // Added for consistency with the dog image
    image.style.borderRadius = "30px"; // Added for consistency with the dog image

  } catch (error) {
    console.error("Error al cargar gatito:", error); // Changed message to 'gatito' for clarity
  }
}

cargarperro()
cargargato()