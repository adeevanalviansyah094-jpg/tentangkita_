/* =========================================================
   MODERN LOVE WEBSITE JS 2026
   ULTRA PRO MAX VERSION
   PREMIUM • SMOOTH • MODERN • OPTIMIZED
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  "use strict";

  /* =========================================================
     GLOBAL SELECTOR
  ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const body = document.body;

  /* =========================================================
     DEVICE DETECTION
  ========================================================= */

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    body.classList.add("mobile-device");
  }

  /* =========================================================
     AOS INIT
  ========================================================= */

  if (typeof AOS !== "undefined") {

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
      mirror: false
    });

  }

  /* =========================================================
     LOADER
  ========================================================= */

  body.style.overflow = "hidden";

  window.addEventListener("load", () => {

    const loader = $(".loader");

    setTimeout(() => {

      loader?.classList.add("hide");

      body.style.overflow = "visible";

    }, 1200);

  });

  /* =========================================================
     LOVE DATE CONFIG
  ========================================================= */

  const relationshipDate =
    new Date("2023-03-23T20:30:00");

  /* =========================================================
     UTILITIES
  ========================================================= */

  const wait = ms =>
    new Promise(resolve =>
      setTimeout(resolve, ms)
    );

  const setText = (id, value) => {

    const el =
      document.getElementById(id);

    if (el) {
      el.textContent = value;
    }

  };

  /* =========================================================
     LIVE LOVE TIMER
  ========================================================= */

  function updateLoveData() {

    const now = new Date();

    const diff =
      now - relationshipDate;

    const totalDays =
      Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
      );

    const years =
      Math.floor(totalDays / 365);

    const months =
      Math.floor(
        (totalDays % 365) / 30
      );

    const days =
      totalDays % 30;

    const hours =
      Math.floor(
        (diff / (1000 * 60 * 60)) % 24
      );

    const minutes =
      Math.floor(
        (diff / (1000 * 60)) % 60
      );

    const seconds =
      Math.floor(
        (diff / 1000) % 60
      );

    setText("years", years);
    setText("months", months);
    setText("days", days);

    setText(
      "hours",
      String(hours).padStart(2, "0")
    );

    setText(
      "minutes",
      String(minutes).padStart(2, "0")
    );

    setText(
      "seconds",
      String(seconds).padStart(2, "0")
    );

    setText("loveDays", totalDays);

    /* LOVE STATS */

    const togetherText =
      $("#togetherDaysText");

    if (togetherText) {

      togetherText.innerHTML =
        `${totalDays} Hari Bersama ❤️`;

    }

    /* LOVE PROGRESS */

    const loveProgress =
      $("#loveProgress");

    if (loveProgress) {

      const progress =
        Math.min(
          (totalDays / 1000) * 100,
          100
        );

      loveProgress.style.width =
        `${progress}%`;

    }

  }

  updateLoveData();

  setInterval(
    updateLoveData,
    1000
  );

  /* =========================================================
     LIVE CLOCK
  ========================================================= */

  function updateClock() {

    const liveClock =
      $("#liveClock");

    if (!liveClock)
      return;

    const now =
      new Date();

    liveClock.textContent =
      now.toLocaleTimeString(
        "id-ID",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }
      );

  }

  updateClock();

  setInterval(
    updateClock,
    1000
  );

  /* =========================================================
     SCROLL PROGRESS
  ========================================================= */

  const progressBar =
    $(".scroll-progress");

  function updateScrollProgress() {

    const scrollTop =
      window.scrollY;

    const height =
      document.documentElement
        .scrollHeight -
      window.innerHeight;

    const progress =
      (scrollTop / height) * 100;

    if (progressBar) {

      progressBar.style.width =
        `${progress}%`;

    }

  }

  window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
  );

  /* =========================================================
     HEADER EFFECT
  ========================================================= */

  const header =
    $("header");

  let lastScroll = 0;

  function updateHeader() {

    if (!header)
      return;

    const currentScroll =
      window.scrollY;

    header.classList.toggle(
      "sticky",
      currentScroll > 50
    );

    if (
      currentScroll >
        lastScroll &&
      currentScroll > 150
    ) {

      header.classList.add(
        "hide-nav"
      );

    } else {

      header.classList.remove(
        "hide-nav"
      );

    }

    lastScroll =
      currentScroll;

  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const sections =
    $$("section");

  const navLinks =
    $$(".nav-link");

  function activateNav() {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 250;

      if (
        window.scrollY >= sectionTop
      ) {

        current =
          section.getAttribute("id");

      }

    });

    navLinks.forEach(link => {

      link.classList.toggle(
        "active",
        link.dataset.section === current
      );

    });

  }

  window.addEventListener(
    "scroll",
    activateNav,
    { passive: true }
  );

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const menuBtn =
    $(".menu-btn");

  const navMenu =
    $(".nav-links");

  if (menuBtn && navMenu) {

    menuBtn.addEventListener(
      "click",
      () => {

        navMenu.classList.toggle(
          "active"
        );

        menuBtn.classList.toggle(
          "active"
        );

        menuBtn.innerHTML =
          navMenu.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

      }
    );

    navLinks.forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navMenu.classList.remove(
            "active"
          );

          menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        }
      );

    });

  }

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  $$('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener(
      "click",
      e => {

        e.preventDefault();

        const target =
          $(
            anchor.getAttribute("href")
          );

        target?.scrollIntoView({
          behavior: "smooth"
        });

      }
    );

  });

  /* =========================================================
     CUSTOM CURSOR
  ========================================================= */

  const cursorGlow =
    $(".cursor-glow");

  if (
    cursorGlow &&
    !isMobile
  ) {

    document.addEventListener(
      "mousemove",
      e => {

        requestAnimationFrame(() => {

          cursorGlow.style.left =
            `${e.clientX}px`;

          cursorGlow.style.top =
            `${e.clientY}px`;

        });

      }
    );

  }

  /* =========================================================
     THEME SYSTEM
  ========================================================= */

  const themeToggle =
    $("#themeToggle");

  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme === "light") {

    body.classList.add(
      "light-theme"
    );

  }

  function updateThemeIcon() {

    const icon =
      themeToggle?.querySelector("i");

    if (!icon)
      return;

    if (
      body.classList.contains(
        "light-theme"
      )
    ) {

      icon.classList.replace(
        "fa-moon",
        "fa-sun"
      );

    } else {

      icon.classList.replace(
        "fa-sun",
        "fa-moon"
      );

    }

  }

  updateThemeIcon();

  themeToggle?.addEventListener(
    "click",
    () => {

      body.classList.toggle(
        "light-theme"
      );

      localStorage.setItem(
        "theme",
        body.classList.contains(
          "light-theme"
        )
          ? "light"
          : "dark"
      );

      updateThemeIcon();

    }
  );

  /* =========================================================
     PARTICLES SYSTEM
  ========================================================= */

  const particles =
    $(".particles");

  if (particles) {

    const total =
      isMobile ? 25 : 80;

    const fragment =
      document.createDocumentFragment();

    for (let i = 0; i < total; i++) {

      const particle =
        document.createElement("span");

      particle.className =
        "particle";

      particle.style.left =
        `${Math.random() * 100}%`;

      particle.style.animationDuration =
        `${Math.random() * 10 + 5}s`;

      particle.style.animationDelay =
        `${Math.random() * 5}s`;

      fragment.appendChild(
        particle
      );

    }

    particles.appendChild(
      fragment
    );

  }

  /* =========================================================
     HERO 3D EFFECT
  ========================================================= */

  const heroCard =
    $(".hero-card");

  if (
    heroCard &&
    !isMobile
  ) {

    heroCard.addEventListener(
      "mousemove",
      e => {

        const rect =
          heroCard.getBoundingClientRect();

        const x =
          e.clientX - rect.left;

        const y =
          e.clientY - rect.top;

        const rotateX =
          ((y - rect.height / 2) /
            rect.height) *
          15;

        const rotateY =
          ((x - rect.width / 2) /
            rect.width) *
          15;

        heroCard.style.transform =
          `
          perspective(1000px)
          rotateX(${-rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.03)
          `;

      }
    );

    heroCard.addEventListener(
      "mouseleave",
      () => {

        heroCard.style.transform =
          `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
          `;

      }
    );

  }

  /* =========================================================
     TYPING EFFECT
  ========================================================= */

  const typingText =
    $(".typing-text");

  const typingWords = [

    "Forever Together ❤",
    "You Are My Happiness ✨",
    "Every Moment Is Beautiful 💕",
    "Love You More Everyday 💖"

  ];

  async function typingEffect() {

    if (!typingText)
      return;

    let index = 0;

    while (true) {

      const word =
        typingWords[index];

      for (let i = 0; i <= word.length; i++) {

        typingText.textContent =
          word.substring(0, i);

        await wait(70);

      }

      await wait(1500);

      for (
        let i = word.length;
        i >= 0;
        i--
      ) {

        typingText.textContent =
          word.substring(0, i);

        await wait(40);

      }

      index =
        (index + 1) %
        typingWords.length;

    }

  }

  typingEffect();

  /* =========================================================
     GALLERY FILTER
  ========================================================= */

  const filterButtons =
    $$(".filter-btn");

  const galleryCards =
    $$(".gallery-card");

  filterButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        filterButtons.forEach(btn =>
          btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
          button.dataset.filter;

        galleryCards.forEach(card => {

          const category =
            card.dataset.filter;

          if (
            filter === "all" ||
            category === filter
          ) {

            card.style.display =
              "block";

            setTimeout(() => {

              card.style.opacity = "1";
              card.style.transform =
                "scale(1)";

            }, 50);

          } else {

            card.style.opacity = "0";
            card.style.transform =
              "scale(.8)";

            setTimeout(() => {

              card.style.display =
                "none";

            }, 300);

          }

        });

      }
    );

  });

  /* =========================================================
     LOVE BUTTON
  ========================================================= */

  const loveBtn =
    $("#loveBtn");

  const lovePopup =
    $("#lovePopup");

  const closeLovePopup =
    $("#closeLovePopup");

  loveBtn?.addEventListener(
    "click",
    () => {

      lovePopup?.classList.add(
        "show"
      );

      createConfetti();
      createHearts();

      navigator.vibrate?.(100);

      setTimeout(() => {

        lovePopup?.classList.remove(
          "show"
        );

      }, 3500);

    }
  );

  closeLovePopup?.addEventListener(
    "click",
    () => {

      lovePopup?.classList.remove(
        "show"
      );

    }
  );

  /* =========================================================
     CONFETTI EFFECT
  ========================================================= */

  function createConfetti() {

    const container =
      $(".confetti-container");

    if (!container)
      return;

    for (let i = 0; i < 80; i++) {

      const confetti =
        document.createElement("span");

      confetti.className =
        "confetti";

      confetti.style.left =
        `${Math.random() * 100}vw`;

      confetti.style.animationDuration =
        `${Math.random() * 3 + 2}s`;

      container.appendChild(
        confetti
      );

      setTimeout(() => {

        confetti.remove();

      }, 5000);

    }

  }

  /* =========================================================
     FLOATING HEARTS
  ========================================================= */

  function createHearts() {

    for (let i = 0; i < 25; i++) {

      const heart =
        document.createElement("div");

      heart.className =
        "floating-love";

      heart.innerHTML = "❤";

      heart.style.left =
        `${Math.random() * 100}vw`;

      heart.style.fontSize =
        `${Math.random() * 20 + 20}px`;

      body.appendChild(heart);

      setTimeout(() => {

        heart.remove();

      }, 5000);

    }

  }

  /* =========================================================
     MUSIC SYSTEM
  ========================================================= */

  const allAudios =
    $$("audio");

  const allButtons =
    $$(".music-play-btn");

  const bgMusic =
    $("#bgMusic");

  const mainMusicBtn =
    $("#musicToggle");

  let currentAudio = null;

  function resetButtons() {

    allButtons.forEach(btn => {

      btn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

      btn.classList.remove(
        "playing"
      );

    });

    if (mainMusicBtn) {

      mainMusicBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

      mainMusicBtn.classList.remove(
        "playing"
      );

    }

  }

  function stopCurrentAudio() {

    if (currentAudio) {

      currentAudio.pause();

      currentAudio.currentTime = 0;

    }

    resetButtons();

    currentAudio = null;

  }

  async function playAudio(
    audio,
    button
  ) {

    if (!audio || !button)
      return;

    if (
      currentAudio === audio &&
      !audio.paused
    ) {

      audio.pause();

      button.innerHTML =
        '<i class="fa-solid fa-play"></i>';

      return;

    }

    stopCurrentAudio();

    try {

      audio.volume = 0.7;

      await audio.play();

      currentAudio = audio;

      button.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

      button.classList.add(
        "playing"
      );

    } catch (err) {

      console.log(err);

    }

  }

  /* MAIN MUSIC */

  mainMusicBtn?.addEventListener(
    "click",
    () => {

      playAudio(
        bgMusic,
        mainMusicBtn
      );

    }
  );

  /* FAVORITE SONG */

  allButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const audio =
          document.getElementById(
            button.dataset.audio
          );

        playAudio(
          audio,
          button
        );

      }
    );

  });

  /* AUTO RESET */

  allAudios.forEach(audio => {

    audio.addEventListener(
      "ended",
      () => {

        resetButtons();

        currentAudio = null;

      }
    );

  });

  /* =========================================================
     AUTO PLAY MUSIC AFTER INTERACTION
  ========================================================= */

  window.addEventListener(
    "click",
    () => {

      if (
        bgMusic &&
        bgMusic.paused
      ) {

        bgMusic.volume = 0.5;

        bgMusic.play()
          .then(() => {

            currentAudio =
              bgMusic;

            mainMusicBtn.innerHTML =
              '<i class="fa-solid fa-pause"></i>';

          })
          .catch(() => {});

      }

    },
    { once: true }
  );

  /* =========================================================
     REVEAL ANIMATION
  ========================================================= */

  const revealElements =
    $$(".reveal");

  const revealOnScroll =
    () => {

      const trigger =
        window.innerHeight * 0.85;

      revealElements.forEach(el => {

        const top =
          el.getBoundingClientRect().top;

        if (top < trigger) {

          el.classList.add("active");

        }

      });

    };

  revealOnScroll();

  window.addEventListener(
    "scroll",
    revealOnScroll,
    { passive: true }
  );

  /* =========================================================
     RANDOM LOVE QUOTES
  ========================================================= */

  const quotes = [

    "Love grows stronger every day ❤",
    "You are my favorite person ✨",
    "Every story with you is beautiful 💕",
    "Together forever 💖"

  ];

  setInterval(() => {

    const quote =
      quotes[
        Math.floor(
          Math.random() *
          quotes.length
        )
      ];

    console.log(
      `%c${quote}`,
      `
      color:#ff69b4;
      font-size:14px;
      font-weight:bold;
      `
    );

  }, 5000);

  /* =========================================================
     PERFORMANCE OPTIMIZATION
  ========================================================= */

  let resizeTimer;

  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimer
      );

      resizeTimer =
        setTimeout(() => {

          updateScrollProgress();
          activateNav();

        }, 200);

    }
  );

  /* =========================================================
     WEBSITE READY
  ========================================================= */

  console.log(
    "%c❤ MODERN LOVE WEBSITE 2026 READY ❤",
    `
    color:#ff4d8d;
    font-size:20px;
    font-weight:bold;
    `
  );

});

/* =========================================
WHATSAPP FORM SEND
========================================= */

const waForm =
document.getElementById("waForm");

waForm.addEventListener("submit", (e) => {

  e.preventDefault();

  /* GET VALUE */
  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const message =
  document.getElementById("message").value;

  /* FORMAT MESSAGE */
  const text =

`❤ Pesan Baru Dari Website ❤

👤 Nama:
${name}

📧 Email:
${email}

💌 Pesan:
${message}`;

  /* WHATSAPP NUMBER */
  const phone =
  "6285714725851";

  /* OPEN WHATSAPP */
  const url =
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  /* RESET FORM */
  waForm.reset();

});