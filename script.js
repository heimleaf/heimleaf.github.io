/* =============================================================================
   СКРИПТЫ ДЛЯ НУАРНОГО ПОРТФОЛИО
   ============================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    console.log('■ НУАРНОЕ ПОРТФОЛИО ЗАГРУЖЕНО ■');
    
    // =============================================================================
    // ПЕРЕВОРОТ КАРТОЧЕК ГАЛЕРЕИ
    // =============================================================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Игнорируем клик по кнопке удаления
            if (e.target.classList.contains('danayi-btn-delete')) return;
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
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // =============================================================================
    // ЭФФЕКТ ПЕЧАТНОЙ МАШИНКИ ДЛЯ ЗАГОЛОВКА
    // =============================================================================
    const title = document.querySelector('.noir-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});
