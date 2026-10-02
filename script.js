(() => {
  document.documentElement.classList.remove("no-js");

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Nav: background on scroll + mobile menu
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("nav-links");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    links.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

  // Toast
  const toast = document.getElementById("toast");
  let toastTimer;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
  };

  // Sun-gem collecting
  const gems = [...document.querySelectorAll(".gem")];
  const countEl = document.getElementById("gem-count");
  const totalEl = document.getElementById("gem-total");
  const counter = document.querySelector(".gem-counter");
  let collected = 0;
  totalEl.textContent = gems.length;

  const sparkle = (x, y) => {
    for (let i = 0; i < 10; i++) {
      const s = document.createElement("span");
      const angle = (Math.PI * 2 * i) / 10;
      const dist = 40 + Math.random() * 40;
      s.className = "sparkle";
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      s.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    }
  };

  gems.forEach((gem) => {
    gem.addEventListener("click", () => {
      if (gem.classList.contains("is-collected")) return;
      const r = gem.getBoundingClientRect();
      sparkle(r.left + r.width / 2, r.top + r.height / 2);
      gem.classList.add("is-collected");
      gem.setAttribute("aria-hidden", "true");
      gem.tabIndex = -1;
      collected++;
      countEl.textContent = collected;
      counter.classList.remove("bump");
      void counter.offsetWidth;
      counter.classList.add("bump");
      if (collected === gems.length) {
        showToast("You found every sun-gem! Fynn would be proud. ✨");
      } else {
        showToast(`Sun-gem collected! ${gems.length - collected} to go.`);
      }
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lbImg = lightbox.querySelector("img");
  const lbClose = lightbox.querySelector(".lightbox__close");
  let lastFocus;

  const openLightbox = (src, alt) => {
    lastFocus = document.activeElement;
    lbImg.src = src;
    lbImg.alt = alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lbClose.focus();
  };
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };

  document.querySelectorAll("[data-lightbox]").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(btn.dataset.lightbox, btn.querySelector("img").alt));
  });
  lightbox.addEventListener("click", (e) => { if (e.target !== lbImg) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
})();
