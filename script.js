/* ============================================
   BENDECIDOS F.C. - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Menú móvil ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('is-open');
        });

        // Cerrar el menú al hacer clic en un enlace
        nav.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
            });
        });
    }

    /* ---------- Navegación activa al hacer scroll ---------- */
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');

    const updateActiveLink = () => {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);

    /* ---------- Datos de jugadores (Nuestro XI) ---------- */
    const playersData = {
        '1':  { name: 'A. MORENO',     role: 'Arquero',       age: '29 años', foot: 'Derecha',   height: '1.86 m', weight: '80 kg', highlight: 'Capitán del equipo', quote: '"Un buen arquero defiende a su equipo con el corazón."' },
        '2':  { name: 'R. SALAZAR',    role: 'Defensa',       age: '26 años', foot: 'Derecha',   height: '1.80 m', weight: '76 kg', highlight: 'Imbatible al uno contra uno', quote: '"La defensa es el primer paso del ataque."' },
        '3':  { name: 'R. VARGAS',     role: 'Defensa',       age: '28 años', foot: 'Izquierda', height: '1.82 m', weight: '78 kg', highlight: 'Especialista en tiros libres', quote: '"Nadie pasa sin permiso."' },
        '4':  { name: 'J. RAMOS',      role: 'Defensa',       age: '30 años', foot: 'Derecha',   height: '1.84 m', weight: '79 kg', highlight: 'Líder de la zaga', quote: '"Capitán por convicción."' },
        '5':  { name: 'P. FLORES',     role: 'Defensa',       age: '25 años', foot: 'Derecha',   height: '1.83 m', weight: '77 kg', highlight: 'Cabeceador implacable', quote: '"Cada partido, una batalla."' },
        '6':  { name: 'J. HERNÁNDEZ',  role: 'Mediocampista', age: '26 años', foot: 'Derecha',   height: '1.76 m', weight: '70 kg', highlight: 'Cerebro del equipo', quote: '"El control empieza desde atrás."' },
        '7':  { name: 'N. GONZÁLEZ',   role: 'Atacante',      age: '24 años', foot: 'Izquierda', height: '1.74 m', weight: '68 kg', highlight: 'Velocidad pura por la banda', quote: '"Velocidad y precisión."' },
        '8':  { name: 'C. TORRES',     role: 'Mediocampista', age: '27 años', foot: 'Derecha',   height: '1.78 m', weight: '73 kg', highlight: 'Recuperador del medio', quote: '"El medio campo es el corazón del juego."' },
        '9':  { name: 'A. RODRÍGUEZ',  role: 'Delantero',     age: '23 años', foot: 'Derecha',   height: '1.82 m', weight: '76 kg', highlight: 'Goleador del torneo', quote: '"El gol es la recompensa al esfuerzo."' },
        '10': { name: 'A. PÉREZ',      role: 'Mediocampista', age: '27 años', foot: 'Derecha',   height: '1.78 m', weight: '72 kg', highlight: 'Máximo goleador', quote: '"Jugar juntos es lo que gana cada partido."' },
        '11': { name: 'J. MARTÍNEZ',   role: 'Atacante',      age: '25 años', foot: 'Izquierda', height: '1.75 m', weight: '70 kg', highlight: 'Asistencias en cada partido', quote: '"La creatividad es mi mejor arma."' }
    };

    /* ---------- Interactividad de la cancha ---------- */
    const playerSpots = document.querySelectorAll('.player-spot');
    const playerCard = document.getElementById('playerCard');

    playerSpots.forEach(spot => {
        spot.addEventListener('click', () => {
            // Marcar el jugador activo
            playerSpots.forEach(s => s.classList.remove('player-spot--active'));
            spot.classList.add('player-spot--active');

            // Obtener el número del data attribute
            const number = spot.dataset.number;
            const data = playersData[number];

            if (data && playerCard) {
                playerCard.querySelector('.player-card__number').textContent = number;
                playerCard.querySelector('.player-card__name').textContent = data.name;
                playerCard.querySelector('.player-card__role').textContent = data.role;
                playerCard.querySelector('.player-card__quote').textContent = data.quote;

                // Actualizar las estadísticas (orden: edad, pierna, altura, peso, destacado)
                const statValues = playerCard.querySelectorAll('.stat__value');
                statValues[0].textContent = data.age;
                statValues[1].textContent = data.foot;
                statValues[2].textContent = data.height;
                statValues[3].textContent = data.weight;
                statValues[4].textContent = data.highlight;
            }
        });
    });

    /* ---------- Cerrar tarjeta de jugador (visual) ---------- */
    const closeCard = document.querySelector('.player-card__close');
    if (closeCard) {
        closeCard.addEventListener('click', () => {
            playerCard.style.opacity = '0';
            setTimeout(() => {
                playerCard.style.opacity = '1';
            }, 300);
        });
    }

    /* ---------- Animación de aparición al hacer scroll ---------- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.player-tile, .galeria__item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });

});