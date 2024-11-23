import Img5 from "../assets/Product-images/bag.png";
import Img from "../assets/Product-images/branding-img.png";
import Img1 from "../assets/Product-images/branding-img1.png";
import Img2 from "../assets/Product-images/branding-img2.png";
import Img3 from "../assets/Product-images/branding-img3.png";
import Img4 from "../assets/Product-images/branding-img4.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; //
const images = [
  { img: Img },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img4 },
  { img: Img5 },
];
const Branding = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Change to false if you want animations to repeat on scroll
    });
  }, []);

  return (
    <div>
      <section className="bg-white py-6 pb-40  relative">
        <div className="absolute w-72 h-72 -top-36 p-12 -left-72 md:-left-56 lg:-left-40  border-[10px] border-primary rotate-45 "></div>
        <div className="absolute w-[230px] h-[230px] -top-36 -left-72 md:-left-56 lg:-left-40 border-[10px] border-primary rotate-45  m-8"></div>
        <div className="container mx-auto px-12">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center text-black text-4xl py-6 font-medium leading-[3.5rem] relative -top-28 tracking-widest"
          >
            <span className="text-white"> Corporative</span>
            <br /> Branding
          </h1>

          <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-6 space-y-4 gap-5">
            {images.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                key={index}
                className="flex items-center  justify-center"
              >
                <img className="w-32" src={item.img} alt="Bag" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute w-72 h-72 -top-36 p-12 -right-72 md:-right-56 lg:-right-40 border-[10px] border-primary rotate-45  "></div>
        <div className="absolute w-[230px] h-[230px] -top-36 -right-72 md:-right-56 lg:-right-40 border-[10px] border-primary rotate-45   m-8"></div>
      </section>
    </div>
  );
};

export default Branding;
