const popupClose = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('[data-popup]');
const btnPopup = document.querySelectorAll('[data-popup-btn]');

btnPopup.forEach(function(item) {
    item.addEventListener('click', function() {
        const popupId = document.querySelector('#'+ this.dataset.popupBtn);

        popupId.classList.add('open');

        document.body.classList.add('no-scroll');
        nav.classList.remove('nav--mobile');
        menuIcon.classList.remove('menu-icon-active');
    });
});

popupClose.forEach(function(item) {
    item.addEventListener('click', function() {
        popups.forEach(function(item) {
            item.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });
});

// Закрытие popup меню
popups.forEach(function (item) {
    item.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            item.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    })
})
