document.addEventListener("DOMContentLoaded", function () {
  // Tahun copyright otomatis
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menu = document.getElementById("menu");
  const collapse = bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false });

  // Semua link internal (menu + brand)
  const links = document.querySelectorAll('.navbar-nav .nav-link, .navbar-brand');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const goTo = function () {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", href);
      };

      // Jika menu HP sedang terbuka: tutup dulu, baru scroll
      // supaya tinggi navbar sudah final saat posisi dihitung
      if (menu.classList.contains("show")) {
        menu.addEventListener("hidden.bs.collapse", goTo, { once: true });
        collapse.hide();
      } else {
        goTo();
      }
    });
  });
});