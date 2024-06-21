const video = document.getElementById('videoHero');
video.playbackRate = 0.4; // Cambia la velocidad a 1.5x

// Función de callback para el IntersectionObserver
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('animate-statisticBar');
        } else {
            entry.target.classList.remove('animate-statisticBar');
        }
    });
}

// Configuración del IntersectionObserver
const options = {
    root: null, // null significa que usa el viewport
    threshold: 0.5 // 50% de visibilidad
};

// Creación del observer
const observer = new IntersectionObserver(callback, options);

// Observación del elemento
const boxes = document.querySelectorAll('.statistic-bar');
boxes.forEach(box => observer.observe(box));

// Obtener elementos
var modal = document.getElementById("queSomosModal");
var openModalBtn = document.getElementById("queSomosCard");
var closeModalSpan = document.getElementsByClassName("close")[0];


// Modal queSomos
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Función para cerrar modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Obtener botones de abrir modales
document.getElementById("queSomosCard1").onclick = function() {
    openModal("queSomosModal1");
}
document.getElementById("queSomosCard2").onclick = function() {
    openModal("queSomosModal2");
}
document.getElementById("queSomosCard3").onclick = function() {
    openModal("queSomosModal3");
}

// Obtener todos los botones de cerrar modales
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var modalId = this.getAttribute("data-modal");
        closeModal(modalId);
    }
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target.classList.contains("queSomos-modal")) {
        closeModal(event.target.id);
    }
}

