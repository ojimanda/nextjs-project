import { AboutData } from "./AboutData";
import Image from "next/image";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function About({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="about" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p4">About</h1>
      <div className="relative flex justify-center">
        {AboutData.map((slide, index) => {
          return (
            <div key={index} className={index === current ? "opacity-[1] ease-in duration-500" : "opacity-0"}>
              <FaArrowAltCircleLeft onClick={prevSlide} className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]" size={50} />
              {index === current && <Image src={slide.image} alt="/" width="1440" height="600" objectFit="cover" />}
              <FaArrowAltCircleRight onClick={nextSlide} className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]" size={50} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
