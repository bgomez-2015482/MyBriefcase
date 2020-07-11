let i = 0;

function Mostrar() {
    if (!i) {
        document.getElementById("showElements").style.display = 'block';
        document.getElementById("button").value = 'Ocultar';
        i = 1;
    } else {
        document.getElementById("showElements").style.display = 'none';
        document.getElementById("button").value = 'Proyectos';
        i = 0;
    }
}

function Mostrar2() {
    if (!i) {
        document.getElementById("showElements2").style.display = 'block';
        document.getElementById("button2").value = 'Ocultar';
        i = 1;
    } else {
        document.getElementById("showElements2").style.display = 'none';
        document.getElementById("button2").value = 'En desarrollo';
        i = 0;
    }
}


var btnAbrirPopup = document.getElementById('btnFrontOverlay'),
    overlay = document.getElementById('overlayId'),
    popup = document.getElementById('popupId'),
    onScroll = document.getElementById('bodyId'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    onScroll.classList.add('scrolling');
});

btnCerrarPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});