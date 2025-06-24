// Portfolio JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle Functionality
    const menuToggle = document.querySelector('#menu-toggle');
    const nav = document.querySelector('.main-nav') || document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            console.log('Menu toggled');
        });
    }

    // Change Content Button Functionality
    const changeContentBtn = document.querySelector('#change-content');
    const sections = document.querySelectorAll('article section');
    let currentSection = 0;

    if (changeContentBtn && sections.length > 0) {
        // Hide all sections initially except the first one
        sections.forEach((section, index) => {
            if (index !== 0) {
                section.style.display = 'none';
                section.style.opacity = '0';
            } else {
                section.style.opacity = '1';
            }
        });

        changeContentBtn.addEventListener('click', function() {
            // Fade out current section
            sections[currentSection].style.opacity = '0';
            
            setTimeout(() => {
                // Hide current section and show next
                sections[currentSection].style.display = 'none';
                currentSection = (currentSection + 1) % sections.length;
                sections[currentSection].style.display = 'block';
                
                // Fade in new section
                setTimeout(() => {
                    sections[currentSection].style.opacity = '1';
                }, 50);
                
                console.log('Showing section:', currentSection + 1, 'of', sections.length);
            }, 300);
        });
    }
});