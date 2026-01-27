// Datos de las herramientas con sus iconos y colores
        const tools = [
            { name: "Java", iconClass: "fab fa-java", colorClass: "java" },
            { name: "JavaScript", iconClass: "fab fa-js-square", colorClass: "javascript" },
            { name: "HTML", iconClass: "fab fa-html5", colorClass: "html" },
            { name: "CSS", iconClass: "fab fa-css3-alt", colorClass: "css" },
            { name: "MySQL", iconClass: "fas fa-database", colorClass: "mysql" },
            { name: "Git", iconClass: "fab fa-git-alt", colorClass: "git" },
            { name: "AutoCAD", iconClass: "fas fa-drafting-compass", colorClass: "autocad" },
            { name: "STAAD.Pro", iconClass: "fas fa-cube", colorClass: "staad-pro" }
        ];

        // Función para crear el slider infinito
        function createInfiniteSlider() {
            const sliderTrack = document.querySelector('.slider-track');
            
            // Duplicamos los elementos para crear el efecto infinito
            for (let i = 0; i < 2; i++) {
                tools.forEach(tool => {
                    const sliderItem = document.createElement('div');
                    sliderItem.className = 'slider-item';
                    
                    const icon = document.createElement('i');
                    icon.className = `${tool.iconClass} ${tool.colorClass}`;
                    
                    const name = document.createElement('span');
                    name.textContent = tool.name;
                    
                    sliderItem.appendChild(icon);
                    sliderItem.appendChild(name);
                    sliderTrack.appendChild(sliderItem);
                });
            }
        }

        // Menú responsive
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Smooth scroll para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Manejo del formulario de contacto
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Efecto anime al enviar
            const btn = this.querySelector('.btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '✦ MENSAJE ENVIADO ✦';
            btn.style.background = 'linear-gradient(90deg, #00ff9d, #00bfff)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = 'linear-gradient(90deg, var(--primary), var(--secondary))';
                alert('¡Mensaje enviado con éxito! ✨\nMe pondré en contacto contigo pronto.');
                this.reset();
            }, 1500);
        });

        // Efecto de partículas para el fondo
        function createParticles() {
            const floatingElements = document.querySelector('.floating-elements');
            
            for (let i = 0; i < 8; i++) {
                const particle = document.createElement('div');
                particle.className = 'floating-element';
                
                const size = Math.random() * 40 + 20;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                const colors = ['#ff4d7e', '#00bfff', '#ffcc00', '#00ff9d', '#b266ff'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
                
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 10}s`;
                particle.style.animationDuration = `${15 + Math.random() * 20}s`;
                
                floatingElements.appendChild(particle);
            }
        }

        // Inicializar el slider y partículas al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            createInfiniteSlider();
            createParticles();
        });
    
