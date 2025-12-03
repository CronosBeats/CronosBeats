document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el contenedor principal
    const container = document.querySelector('.main-container');
    
    // Añadimos la clase que pone la opacidad a 1
    // El setTimeout es para asegurar que el navegador ha cargado estilos
    setTimeout(() => {
        container.classList.add('fade-in');
    }, 100);

    console.log("Cronos Beats Linktree cargado correctamente.");
});