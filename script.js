/* ============================================
   BENDECIDOS F.C. - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Menú móvil ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('is-open');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            menuToggle.classList.remove('active');
        });
    });

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
        '1':  { name: 'J. RODRIGUEZ',  role: 'Arquero',       age: '28 años', foot: 'Derecha',   height: '1.66 m', weight: '70 kg', highlight: 'Mejor arquero en la historia del club', quote: '"Traigan cigarros pa la cana"', image: 'images/Jugadores/jugador-1.png' },
        '2':  { name: 'M. NUÑEZ',      role: 'Lateral Derecho',       age: '27 años', foot: 'Derecha',   height: '1.70 m', weight: '86 kg', highlight: 'Imbatible al uno contra uno', quote: '"Por qué estoy de lateral? llevame a paraíso."', image: 'images/Jugadores/jugador-2.png' },
        '11':  { name: 'M. COLLAO',     role: 'Lateral Izquierdo',       age: '28 años', foot: 'Izquierda', height: '1.82 m', weight: '78 kg', highlight: 'Un lateral con recorrido', quote: '"Puedo ir con la Marce?."', image: 'images/Jugadores/jugador-11.png' },
        '15':  { name: 'M. FUENTEALBA',      role: 'Defensa',       age: '30 años', foot: 'Derecha',   height: '1.84 m', weight: '79 kg', highlight: 'Capitán del equipo', quote: '"Ah no si no, es que por lo mismo le dije yo."', image: 'images/Jugadores/jugador-15.png' },
        '3':  { name: 'J. VIDAL',     role: 'Defensa',       age: '32 años', foot: 'Derecha',   height: '1.83 m', weight: '77 kg', highlight: 'Líder de la zaga', quote: '"Prende oscurito, vamos por sus Bolivianas."', image: 'images/Jugadores/jugador-3.png' },
        '6':  { name: 'A. MARCHANT',  role: 'Mediocampista', age: '30 años', foot: 'Derecha',   height: '1.76 m', weight: '70 kg', highlight: 'El contención del equipo', quote: '"Crossfit no es de wekos perro."', image: 'images/Jugadores/jugador-6.png' },
        '7':  { name: 'M. PEREZ',   role: 'Atacante',      age: '24 años', foot: 'Derecha', height: '1.74 m', weight: '68 kg', highlight: 'Goleador historico del club', quote: '"Nada mejor que un fulbito para pasar las penas."', image: 'images/Jugadores/jugador-7.png' },
        '8':  { name: 'N. HERRERA',     role: 'Mediocampista', age: '28 años', foot: 'Derecha',   height: '1.70 m', weight: '83 kg', highlight: 'Fuerte, pero al balong', quote: '"Cabros paguen la cancha."', image: 'images/Jugadores/jugador-8.png' },
        '9':  { name: 'S. FERNANDEZ',  role: 'Delantero',     age: '29 años', foot: 'Derecha',   height: '1.82 m', weight: '76 kg', highlight: 'Goleador de raza', quote: '"Alguien se va a comer eso?."', image: 'images/Jugadores/jugador-9.png' },
        '10': { name: 'S. RUBILAR',    role: 'Mediocampista', age: '30 años', foot: 'Derecha',   height: '1.78 m', weight: '72 kg', highlight: 'Creador de juego.', quote: '"Esteee compadre, loco imbecil."', image: 'images/Jugadores/jugador-10.png' },
        '14': { name: 'M. CISTERNA',   role: 'Atacante',      age: '28 años', foot: 'Derecha', height: '1.73 m', weight: '75 kg', highlight: 'El lujo hecho persona', quote: '"Si, yo refunde este club...Sale paraíso?."', image: 'images/Jugadores/jugador-14.png' }
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

            // Animación fade
            playerCard.style.opacity = '0.6';
            playerCard.style.transform = 'translateY(10px)';

            setTimeout(() => {

                playerCard.querySelector('.player-card__number').textContent = number;
                playerCard.querySelector('.player-card__name').textContent = data.name;
                playerCard.querySelector('.player-card__role').textContent = data.role;
                playerCard.querySelector('.player-card__quote').textContent = data.quote;

                // Imagen dinámica
                const playerImage = document.getElementById('playerImage');

                playerImage.src = data.image;
                playerImage.alt = data.name;

                // Estadísticas
                const statValues = playerCard.querySelectorAll('.stat__value');

                statValues[0].textContent = data.age;
                statValues[1].textContent = data.foot;
                statValues[2].textContent = data.height;
                statValues[3].textContent = data.weight;
                statValues[4].textContent = data.highlight;

                // Restaurar animación
                playerCard.style.opacity = '1';
                playerCard.style.transform = 'translateY(0)';

            }, 180);
        }
        });
    });


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

    /* ---------- Animación cambio de Logo ---------- */
    const logoHeader = document.getElementById('logoEquipo');
    const logoFooter = document.getElementById('footerLogo');

    let logoActual = 'antiguo';

    function cambiarLogos(e) {

        if (e) {
            e.preventDefault();
        }

        if (logoActual === 'antiguo') {

            logoHeader.src = 'images/logo.png';
            logoFooter.src = 'images/logo.png';

            logoActual = 'nuevo';

        } else {

            logoHeader.src = 'images/logo-antiguo.png';
            logoFooter.src = 'images/logo-antiguo.png';

            logoActual = 'antiguo';
        }
    }

    logoHeader.addEventListener('click', cambiarLogos);
    logoFooter.addEventListener('click', cambiarLogos);

});