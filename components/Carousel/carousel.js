import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = () => (
  <>
    <EmblaCarousel slides={slides} />
  </>
);

export default Carousel;