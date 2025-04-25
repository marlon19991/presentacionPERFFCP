// Funcionalidad para cambiar entre modo claro y oscuro
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay una preferencia guardada
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    
    // Si hay una preferencia guardada, aplicarla
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // Si no hay preferencia, usar modo oscuro por defecto
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Actualizar el ícono del botón de tema
    updateThemeToggleIcon();
    
    // Funcionalidad para el botón de cambio de tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Si está en modo claro, cambiar a oscuro y viceversa
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let targetTheme = 'light';
            
            if (currentTheme === 'light') {
                targetTheme = 'dark';
            }
            
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            
            // Actualizar el ícono
            updateThemeToggleIcon();
        });
    }
    
    // Funcionalidad para el menú móvil
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Funcionalidad para las pestañas (tabs)
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover la clase active de todos los botones y contenidos
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Añadir la clase active al botón clickeado y su contenido correspondiente
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Ejecutar la animación al cargar la página y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// Función para actualizar el ícono del botón de tema
function updateThemeToggleIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.setAttribute('title', 'Cambiar a modo claro');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.setAttribute('title', 'Cambiar a modo oscuro');
        }
    }
}

// Funcionalidad para diagramas interactivos
function initializeDiagrams() {
    const diagrams = document.querySelectorAll('.interactive-diagram');
    
    diagrams.forEach(diagram => {
        const elements = diagram.querySelectorAll('.diagram-element');
        
        elements.forEach(element => {
            element.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const targetInfo = document.getElementById(targetId);
                
                // Ocultar todas las informaciones
                document.querySelectorAll('.diagram-info').forEach(info => {
                    info.classList.remove('active');
                });
                
                // Mostrar la información correspondiente
                if (targetInfo) {
                    targetInfo.classList.add('active');
                }
                
                // Resaltar el elemento seleccionado
                elements.forEach(el => {
                    el.classList.remove('active');
                });
                
                this.classList.add('active');
            });
        });
    });
}

// Inicializar diagramas cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initializeDiagrams();
});
