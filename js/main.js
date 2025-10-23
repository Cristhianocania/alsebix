const whatsappLink = "https://wa.me/1165804851?text=Hola%2C%20quisiera%20pedir%20asistencia%20inform%C3%A1tica.";

window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('nav-mobile');

    // Toggle menú móvil
    hamburger.addEventListener('click', () => {
        navMobile.classList.toggle('is-active');
        hamburger.classList.toggle('is-active');
        document.body.style.overflow = navMobile.classList.contains('is-active') ? 'hidden' : 'auto';
    });

    // Cierra menú móvil al hacer clic en un enlace
    document.querySelectorAll('#nav-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('is-active');
            hamburger.classList.remove('is-active');
            document.body.style.overflow = 'auto';
        });
    });

    // Botones de WhatsApp interactivos
    document.querySelectorAll('.btn-whatsapp, .whatsapp-float').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Pregunta inicial al usuario
            let userMessage = prompt("Escribe tu consulta para el técnico de ALSEBIX:", "Hola, quisiera asistencia informática...");
            
            // Si el usuario no escribe nada, usamos un mensaje por defecto
            if (!userMessage || userMessage.trim() === "") {
                userMessage = "Hola, quisiera asistencia informática...";
            }

            // Codificamos el mensaje para URL
            const whatsappLink = "https://wa.me/1165804851?text=" + encodeURIComponent(userMessage);
            window.open(whatsappLink, '_blank');
        });
    });
});
