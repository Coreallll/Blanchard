const links = document.querySelectorAll('.swiper-gallery__slide');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const bodyScroll = document.querySelector('.body');
const closeBtn = document.querySelectorAll('.close-modals');

links.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
        
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
        bodyScroll.classList.add('bodyscroll');
    });
});

closeBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
    
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
        
        modalOverlay.classList.remove('modal-overlay--visible');
        bodyScroll.classList.remove('bodyscroll');
    });
});
