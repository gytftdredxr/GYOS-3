// Función para abrir la aplicación GREENER
function openGreenerApp() {
    const window = document.getElementById('greener-window');
    window.style.display = 'block';
}

// Función para cerrar cualquier ventana
function closeWindow(id) {
    const window = document.getElementById(id);
    window.style.display = 'none';
}

// Función para realizar una búsqueda en GREENER
function searchGreener() {
    const query = document.getElementById('search-query').value;
    if (query) {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    } else {
        alert("Por favor, ingrese un término de búsqueda.");
    }
}

// Función para abrir la ventana de la calculadora
function openCalculator() {
    const window = document.getElementById('calculator-window');
    window.style.display = 'block';
}

// Funciones para la calculadora
function appendCalc(value) {
    document.getElementById('calc-display').value += value;
}

function clearCalc() {
    document.getElementById('calc-display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('calc-display').value);
        document.getElementById('calc-display').value = result;
    } catch (e) {
        alert('Error en la expresión');
    }
}

// Mover las ventanas (drag and drop)
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
