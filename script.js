// Función para abrir una ventana
function openWindow(id) {
    var window = document.getElementById(id);
    window.style.display = 'block';
}

// Función para cerrar una ventana
function closeWindow(id) {
    var window = document.getElementById(id);
    window.style.display = 'none';
}

// Activar el botón de "Inicio" en la barra de tareas
document.getElementById('start-button').addEventListener('click', function() {
    alert("¡Bienvenido al Sistema Operativo Simulado!");
});

// Para mover las ventanas (función de arrastrar)
let windows = document.querySelectorAll('.window');
windows.forEach(window => {
    let header = window.querySelector('.window-header');
    header.onmousedown = function(e) {
        let shiftX = e.clientX - window.getBoundingClientRect().left;
        let shiftY = e.clientY - window.getBoundingClientRect().top;

        window.style.position = 'absolute';
        window.style.zIndex = 1000;

        function moveAt(pageX, pageY) {
            window.style.left = pageX - shiftX + 'px';
            window.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        window.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            window.onmouseup = null;
        };
    };

    header.ondragstart = function() {
        return false;
    };
});
