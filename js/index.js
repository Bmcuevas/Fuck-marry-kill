 // Función para obtener una imagen aleatoria de la carpeta "imagenes"
 function obtenerImagenAleatoria() {
    const carpeta = 'imagenes';
    const imagenes = [];
    for (let i = 1; i <= 149; i++) {
      imagenes.push(`imagen${i}.png`);
    } // Agrega aquí el nombre de tus imágenes
    const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    return `${carpeta}/${imagenAleatoria}`;
  }

  // Función para jugar y mostrar tres imágenes diferentes
  function jugar() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
      const imagen = obtenerImagenAleatoria();
      const imgElement = document.createElement('img');
      imgElement.src = imagen;

      // Verifica que la imagen no esté repetida
      if (!imageContainer.innerHTML.includes(imgElement.outerHTML)) {
        imageContainer.appendChild(imgElement);
      } else {
        // Si la imagen está repetida, reduce el índice para intentar otra vez
        i--;
      }
    }
  }
