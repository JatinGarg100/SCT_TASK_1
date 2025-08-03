document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#ffd54f';
            this.style.transform = 'translateY(-3px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.color = 'white';
            this.style.transform = 'translateY(0)';
        });
    });
});
