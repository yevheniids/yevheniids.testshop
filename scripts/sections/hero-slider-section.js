import $ from "jquery";
import "slick-carousel";
import lozad from "lozad";

let HeroSlider = () => {
  const sectionType = "hero-slider";

  const selectors = {
    container: ".heroSlider"
  };

  const observer = lozad();

  let slickSettings = {
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  let load = () => {
    $(selectors.container).slick(slickSettings);

    observer.observe();
  };

  let unload = () => {
    $(selectors.container).slick("unslick");
  };

  return {
    getSectionType: () => {
      return sectionType;
    },
    onLoad: load,
    onUnload: unload
  };
};

export { HeroSlider };
