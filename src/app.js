/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import "./styles.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pixeldo from "./assets/images/pixeldo.png";
import wakandine from "./assets/images/wakandine.png";
import weatherio from "./assets/images/weatherio.png";

// Lenis smooth scroll
const lenis = new Lenis();
lenis.on("scroll", () => ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
