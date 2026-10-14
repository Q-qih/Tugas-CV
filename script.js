document.addEventListener("DOMContentLoaded", function () {
  // Tahun copyright otomatis
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Tutup menu setelah link diklik pada perangkat mobile
  const menu = document.getElementById("menu");

  if (menu && window.bootstrap) {
    const collapse = bootstrap.Collapse.getOrCreateInstance(
      menu,
      { toggle: false }
    );

    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 992 && menu.classList.contains("show")) {
          collapse.hide();
        }
      });
    });
  }
});