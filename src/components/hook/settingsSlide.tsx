import { useState, useEffect } from "react";

export const useSlidesToShow = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth > 1440) setSlidesToShow(5);
      else if (window.innerWidth > 1024) setSlidesToShow(4);
      else if (window.innerWidth > 680) setSlidesToShow(3);
      else if (window.innerWidth > 368) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return slidesToShow;
};
