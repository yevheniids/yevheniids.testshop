import "./polyfills";

import * as sections from "@shopify/theme-sections";

import { HeroSlider } from "./sections/hero-slider-section";

let heroSlider = HeroSlider();

sections.register(heroSlider.getSectionType(), {
  onLoad: () => heroSlider.onLoad(),
  onUnload: () => heroSlider.onUnload()
});

sections.load("*");
