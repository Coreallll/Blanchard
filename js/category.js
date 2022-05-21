window.addEventListener('DOMContentLoaded', function () {
    var Category = {
        btnClassName: "btn-category",
    }

    btnClassName.addEventListener('click', function () {
        btnClassName.classList.toggle(activeClassName)
    });
});