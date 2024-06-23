document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario haga submit
    
    var query = document.getElementById('busqueda').value.toLowerCase().trim(); // Obtener la consulta de búsqueda
    
    switch (query) {
        case 'productos':
            window.location.href = '#productos'; // Redireccionar a la sección de productos
            break;
        case 'contacto':
            window.location.href = '#contacto'; // Redireccionar a la sección de contacto
            break;
        case 'nosotros':
            window.location.href = '#nosotros'; // Redireccionar a la sección de nosotros
            break;
        case 'faq':
            window.location.href = '#faq'; // Redireccionar a la sección de preguntas frecuentes
            break;

        case 'blog':
            window.location.href = 'blog.html'; // Redireccionar a la página del blog
            break;

        default:
            alert('No se encontró ningún resultado para: ' + query); // Mostrar mensaje si la búsqueda no coincide
            break;
    }
    
    document.getElementById('searchInput').value = ''; // Limpiar el campo de búsqueda después de procesar la búsqueda
});

