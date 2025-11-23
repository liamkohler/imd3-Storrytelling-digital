import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- Bouton scroll vers le bas ---
document.getElementById("scroll-down").addEventListener("click", () => {
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: document.body.scrollHeight },
    ease: "power2.inOut",
  });
});

// --- Bouton scroll vers le haut (pas clickable a cause du container) ---
// document.getElementById("scroll-up").addEventListener("click", () => {
//   gsap.to(window, {
//     duration: 2,
//     scrollTo: { y: 0 },
//     ease: "power2.inOut",
//   });
// });

// --- Set transform origins for clean zooms ---
gsap.set(".zoom", { transformOrigin: "center bottom" });

// --- Timeline ---
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".zoom-container",
    start: "top top",
    end: "+=9000",
    scrub: 1.5,
    pin: true,
    markers: false,
  },
  defaults: { ease: "power2.inOut" },
});

// --- Animation sequence ---
// --- SCENE 1 ---
tl.to(".zoom-1-5", { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 })
  .to(
    ".zoom-1-6",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.6"
  )
  .to(
    ".zoom-1-btn",
    { scale: 3, y: "5000%", filter: "blur(2px)", duration: 8 },
    "<-0.6"
  )
  .to(
    [".zoom-1-5", ".zoom-1-6", ".zoom-1-btn"],
    { opacity: 0, filter: "blur(5px)", duration: 3 },
    "-=5"
  )
  .to(".zoom-01", { y: "50%", scale: 1.5, opacity: 0, duration: 4 }, "-=7");

// --- SCENE 2 ---
tl.to(
  ".zoom-2-5",
  { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
  "-=3"
)
  .to(
    ".zoom-2-6",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.6"
  )
  .to(
    [".zoom-2-5", ".zoom-2-6"],
    { opacity: 0, filter: "blur(5px)", duration: 3 },
    "-=5"
  )
  .to(".zoom-02", { y: "50%", scale: 1.5, opacity: 0, duration: 4 }, "-=7");

// --- SCENE 3 ---
tl.to(
  ".zoom-3-5",
  { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
  "-=3"
)
  .to(
    ".zoom-3-6",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.4"
  )
  .to(
    ".zoom-3-7",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.4"
  )
  .to(
    ".zoom-3-8",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.4"
  )
  .to(
    ".zoom-3-9",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.4"
  )
  .to(
    ".zoom-3-10",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.4"
  )
  .to(
    [
      ".zoom-3-5",
      ".zoom-3-6",
      ".zoom-3-7",
      ".zoom-3-8",
      ".zoom-3-9",
      ".zoom-3-10",
    ],
    { opacity: 0, filter: "blur(5px)", duration: 3 },
    "-=5"
  )
  .to(".zoom-03", { y: "50%", scale: 1.5, opacity: 0, duration: 4 }, "-=7");

// --- SCENE 4 ---
tl.to(
  ".zoom-4-5",
  { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
  "-=2"
)
  .to(
    ".zoom-4-6",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.6"
  )
  .to(
    [".zoom-4-5", ".zoom-4-6"],
    { opacity: 0, filter: "blur(5px)", duration: 3 },
    "-=5"
  )
  .to(".zoom-04", { y: "50%", scale: 1.5, opacity: 0, duration: 4 }, "-=7");

// --- SCENE 5 ---
tl.to(
  ".zoom-5-5",
  { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
  "-=2"
)
  .to(
    ".zoom-5-6",
    { scale: 3, y: "200%", filter: "blur(2px)", duration: 8 },
    "<-0.6"
  )
  .to(
    [".zoom-5-5", ".zoom-5-6"],
    { opacity: 0, filter: "blur(5px)", duration: 3 },
    "-=5"
  )
  .to(".zoom-05", { y: "50%", scale: 1.5, opacity: 0, duration: 4 }, "-=7");

// --- SCENE 6 (vertical parallax descendante + transition) ---
tl.fromTo(
  ".zoom-6-5",
  { y: "-40%" },
  { y: "0%", duration: 6, ease: "power1.inOut" },
  "-=5"
)
  .fromTo(
    ".zoom-6-6",
    { y: "-30%" },
    { y: "0%", duration: 6, ease: "power1.inOut" },
    "<"
  )
  .fromTo(
    ".zoom-6-7",
    { y: "-20%" },
    { y: "0%", duration: 6, ease: "power1.inOut" },
    "<"
  )
  .fromTo(
    ".zoom-6-8",
    { x: "20%" },
    { x: "0%", duration: 6, ease: "power1.inOut" },
    "<"
  );

// translation globale de la scène + scroll horizontal final
tl.to(".zoom-06", { y: "-66%", duration: 6, ease: "power1.inOut" }, "<").to(
  ".scroll-h-container",
  { x: "-100%", duration: 40, ease: "none" },
  "<5"
);

// --- SEPARATOR PARALAX ---
tl.fromTo(
  ".scroll-h-seperator-01",
  { xPercent: 10 },
  { xPercent: 0, duration: 11, ease: "none" },
  "<"
)
  .fromTo(
    ".scroll-h-seperator-02",
    { xPercent: 40 },
    { xPercent: 0, duration: 11, ease: "none" },
    "<"
  )
  .fromTo(
    ".scroll-h-seperator-03",
    { xPercent: 100 },
    { xPercent: 0, duration: 11, ease: "none" },
    "<"
  );
