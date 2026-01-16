gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* ===============================
   MOBILE CHECK
================================ */
const isMobile = window.matchMedia("(max-width: 768px)").matches;

/* ===============================
   SMOOTH SCROLL
================================ */
const smoother = ScrollSmoother.create({
  smooth: isMobile ? 0.8 : 1.6,
  effects: !isMobile,
  normalizeScroll: true,
  ignoreMobileResize: true
});

/* ===============================
   SECTION + TEXT ANIMATION
================================ */

gsap.utils.toArray(".panel").forEach(panel => {

  const title   = panel.querySelector(".title");
  const options = panel.querySelectorAll(".options > *");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: panel,
      start: "top 85%",
      end: "bottom 15%",
      scrub: true
    }
  });

  /* ---- Section fade ---- */
  tl.fromTo(panel,
    { opacity: 0 },
    { opacity: 1, ease: "none" }
  )

  /* ---- Title animation ---- */
  .from(title, {
    scale: 0.85,
    opacity: 0,
    ease: "back.out(0.4)",
    duration: 0.6
  }, "-=0.3")

  /* ---- Text stagger ---- */
  .from(options, {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    ease: "sine.out",
    duration: 0.6
  }, "-=0.4")

  /* ---- Section fade out ---- */
  .to(panel, {
    opacity: 0,
    ease: "none"
  });

});

/* ===============================
   PERFORMANCE
================================ */
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true
});