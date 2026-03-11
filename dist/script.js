// Menu mobile - garde contre le double-listener
(function () {
    const btn = document.querySelector(".icone-toggle");
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = "true";

    const menus = document.querySelectorAll(".toggle-menu");
    btn.addEventListener("click", function () {
        menus.forEach(function (el) { el.classList.toggle("hidden"); });
    });
})();
