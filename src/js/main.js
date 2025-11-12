import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    "<-0.4"
  )
  .to(
    [".zoom-1-5", ".zoom-1-6"],
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
    "<-0.4"
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
    "<-0.4"
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
    "<-0.4"
  )
  .to(
    [".zoom-5-5", ".zoom-5-6"],
    { opacity: 0, filter: "blur(5px)", duration: 3 },
    "-=5"
  )
  .to(".zoom-05", { y: "50%", scale: 1.5, opacity: 0, duration: 4 }, "-=7");

// --- horizontal scroll ---
tl.to(".zoom-06", { y: "-66%", duration: 6, ease: "power3.inOut" }, "-=1").to(
  ".scroll-h",
  { x: "-100%", duration: 10, ease: "power2.inOut" }
);
