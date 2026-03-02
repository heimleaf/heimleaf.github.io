// =============================================================================
// СКРИПТЫ ДЛЯ ИНТЕРАКТИВНОСТИ
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // =============================================================================
    // ПЕРЕВОРОТ КАРТОЧЕК ГАЛЕРЕИ
    // =============================================================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('flipped');
        });
    });

    // =============================================================================
    // ПЛАВНАЯ ПРОКРУТКА ПО ЯКОРЯМ
    // =============================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =============================================================================
    // АНИМАЦИЯ ПРИ ПРОКРУТКЕ
    // =============================================================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.danayi-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });

    // =============================================================================
    // КОНСОЛЬ ДЛЯ ОТЛАДКИ
    // =============================================================================
    console.log('🎨 Портфолио загружено успешно!');
});
