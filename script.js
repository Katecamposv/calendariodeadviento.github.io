// Configura la fecha objetivo (por ejemplo, el 24 de diciembre a medianoche)
const fechaObjetivo = new Date("Dec 24, 2024 00:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
const intervalo = setInterval(function() {

  // Obtiene la fecha y hora actual
  const ahora = new Date().getTime();

  // Calcula la diferencia entre la fecha objetivo y la fecha actual
  const diferencia = fechaObjetivo - ahora;

  // Calcula el tiempo restante en días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Muestra la cuenta regresiva en el HTML
  document.getElementById("dias-numero").innerHTML = dias < 10 ? "0" + dias : dias;
  document.getElementById("horas-numero").innerHTML = horas < 10 ? "0" + horas : horas;
  document.getElementById("minutos-numero").innerHTML = minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("segundos-numero").innerHTML = segundos < 10 ? "0" + segundos : segundos;

  // Si la cuenta regresiva ha terminado
  if (diferencia < 0) {
    clearInterval(intervalo);
    document.getElementById("cuenta-regresiva").innerHTML = "¡Es Navidad! 🎄";
  }

}, 1000); // Actualiza cada segundo




const regalos = [
  { tipo: "video", contenido: "Imagenes/Fotos/video1.mp4", mensaje: "¡Bienvenido al 1 de diciembre!" },
  { tipo: "imagen", contenido: "Imagenes/Fondos/OnePiece1.png", mensaje: "¡Día 2 del Calendario! " },
  { tipo: "mensaje", contenido: "Tienes un Vale por tu postre favorito hecho por mí, tomale screen y reclamalo cuando quieras", mensaje: "¡Día 2 del Calendario!" },
  { tipo: "enlace", contenido: "https://interacty.me/projects/7a447c9f051b1190", mensaje: "¡Día 4 del Calendario!" },
  { tipo: "audio", contenido: "Sonidos/Ecles.mpeg", mensaje: "¡Día 5 del Calendario!" },
  { tipo: "audio", contenido: "Sonidos/CR7.mpeg", mensaje: "¡Día 6 del Calendario!" },
  { tipo: "audio", contenido: "Sonidos/chistes.mpeg", mensaje: "¡Día 7 del Calendario!" },
  { tipo: "imagen", contenido: "Imagenes/Fotos/RecetaNavideña.jpeg", mensaje: "¡Día 8 del Calendario!" },
  { tipo: "mensaje", contenido: "Tienes un Vale por una cita sorpresa, tomale screen y reclamalo cuando quieras", mensaje: "¡Día 9 del Calendario!" },
  { tipo: "enlace", contenido: "https://www.educima.com/crosswords/crucigrama_navideno-42bd186e5d81e959a655cbff69d0d74a", mensaje: "¡Día 10 del Calendario!" },
  { tipo: "imagen", contenido: "Imagenes/Fotos/FondoVersiculo.jpeg", mensaje: "¡Día 11 del Calendario!" },
  { tipo: "video", contenido: "Imagenes/Fotos/Especial.mp4", mensaje: "¡Día 12 del Calendario!" },
  { tipo: "audio", contenido: "Sonidos/Salmo.mpeg", mensaje: "¡Día 13 del Calendario!" },
  { tipo: "enlace", contenido: "https://sticker.ly/s/8AWECF", mensaje: "¡Día 14 del Calendario!" },
  { tipo: "enlace", contenido: "https://open.spotify.com/playlist/06wbh4yzTpWWpf0hA0FCoB?si=c058d120ce4e4000", mensaje: "¡Día 15 del Calendario!" },
  { tipo: "enlace", contenido: "https://meet.google.com/mqs-tept-wbb", mensaje: "¡Día 16 del Calendario!" },
  { tipo: "imagen", contenido: "Imagenes/Fotos/meme.jpg", mensaje: "¡Día 17 del Calendario!" },
  { tipo: "imagen", contenido: "Imagenes/Fotos/Certificadomejornovio.png", mensaje: "¡Día 18 del Calendario!" },
  { tipo: "enlace", contenido: "https://www.canva.com/design/DAGXRiAzSU8/H1grYUG4chrt8kYSe7MSHg/view?utm_content=DAGXRiAzSU8&utm_campaign=designshare&utm_medium=link&utm_source=editor", mensaje: "¡Día 19 del Calendario!" },
  { tipo: "video", contenido: "Imagenes/Fotos/kenneth.mp4", mensaje: "¡Día 20 del Calendario!" },
  { tipo: "enlace", contenido: "https://www.educima.com/wordsearches/sopa_de_letras-709f6c2811a8e24c00750f486d5d7438", mensaje: "¡Día 21 del Calendario!" },
  { tipo: "enlace", contenido: "https://interacty.me/projects/4577342ae3261fa5", mensaje: "¡Día 22 del Calendario!" },
  { tipo: "mensaje", contenido: "Tienes un Vale por una crumbl cookie, tomale screen y reclamalo cuando quieras", mensaje: "¡Día 23 del Calendario!" },
  { tipo: "video", contenido: "Imagenes/Fotos/24.mp4", mensaje: "¡Día 24 del Calendario!" },

];

  // Obtener el día actual
function obtenerDiaActual() {
  const hoy = new Date();
  return hoy.getDate(); // Devuelve el día del mes (1-31)
}

// Crear las cajitas dinámicamente
const cajitasContainer = document.querySelector('.cajitas-container');
for (let i = 1; i <= 24; i++) {
  const cajita = document.createElement('div');
  cajita.classList.add('cajita');
  cajita.innerHTML = `<span>${i} de Diciembre</span>`;
  cajita.addEventListener('click', () => {
      const diaActual = obtenerDiaActual();
      if (i > diaActual) {
          mostrarCandado(); // Mostrar mensaje de "No hagas trampa"
      } else {
          mostrarModal(i); // Mostrar el modal del regalo
      }
  });
  cajitasContainer.appendChild(cajita);
}

// Mostrar modal con el regalo
function mostrarModal(dia) {
  const modal = document.getElementById('modal');
  const contenidoModal = document.getElementById('contenido-modal');
  const regalo = regalos[dia - 1];

  if (regalo) {
      let mensajeHTML = regalo.mensaje ? `<p>${regalo.mensaje}</p>` : '';

      if (regalo.tipo === 'mensaje') {
          contenidoModal.innerHTML = `${mensajeHTML}<p>${regalo.contenido}</p>`;
      } else if (regalo.tipo === 'imagen') {
          contenidoModal.innerHTML = `
              ${mensajeHTML}
              <img class="modal-content" src="${regalo.contenido}" alt="Imagen del regalo" />
          `;
      } else if (regalo.tipo === 'video') {
          contenidoModal.innerHTML = `
              ${mensajeHTML}
              <iframe class="modal-content" src="${regalo.contenido}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `;
      } else if (regalo.tipo === 'audio') {
          contenidoModal.innerHTML = `
              ${mensajeHTML}
              <audio class="modal-content" src="${regalo.contenido}" controls>
                  Tu navegador no soporta el elemento de audio.
              </audio>
          `;
      } else if (regalo.tipo === 'enlace') {
          contenidoModal.innerHTML = `
              ${mensajeHTML}
              <a href="${regalo.contenido}" target="_blank">¡Haz clic aquí para ver tu regalo!</a>
          `;
      }
  } else {
      contenidoModal.innerHTML = '<p>No hay contenido para este día.</p>';
  }

  modal.style.display = 'flex';
}

// Mostrar modal con el candado
function mostrarCandado() {
  const modal = document.getElementById('modal');
  const contenidoModal = document.getElementById('contenido-modal');
  contenidoModal.innerHTML = `
      <div style="text-align: center;">
          <img src="Imagenes/Fotos/candado.png" alt="Candado" style="width: 100px; margin-bottom: 20px;">
          <p style="font-size: 18px; color: #555;">¡No hagas trampa! Esta día aún no está disponible.</p>
      </div>
  `;
  modal.style.display = 'flex';
}

// Cerrar modal
document.getElementById('close-modal').addEventListener('click', () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
});
