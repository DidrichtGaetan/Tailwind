// Menu mobile - garde contre le double-listener
(function () {
    const btn = document.querySelector(".icone-toggle");
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = "true";

    const menus = document.querySelectorAll(".toggle-menu");

    function closeMenu() {
        menus.forEach(function (el) { el.classList.add("hidden"); });
    }

    btn.addEventListener("click", function () {
        menus.forEach(function (el) { el.classList.toggle("hidden"); });
    });

    // Fermer le menu quand on clique un lien dedans
    menus.forEach(function (menu) {
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });
    });
})();
