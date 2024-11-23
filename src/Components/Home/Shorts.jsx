import Img1 from "../assets/Product-images/img-1.png";
import Img2 from "../assets/Product-images/img-2.png";
import Img3 from "../assets/Product-images/img-3.png";
import Img4 from "../assets/Product-images/img-4.png";
import Img5 from "../assets/Product-images/img-5.png";
import Img6 from "../assets/Product-images/img-6.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; //
const products = [
  {
    id: 1,
    image: Img1,
    title: "TS-01",
    description: "Navy Blue  good  Hoodie Tracksuit Unisex For Women & for men",
    fade_delay: "100",
  },
  {
    id: 2,
    image: Img2,
    description: "Navy Blue good  Hoodie Tracksuit Unisex For Women & for men",
    title: "TS-02",
    fade_delay: "200",
  },
  {
    id: 3,
    image: Img3,
    title: "TS-03",
    description: "Navy Blue good  Hoodie Tracksuit Unisex For Women & for men",
    fade_delay: "200",
  },
  {
    id: 4,
    image: Img4,
    title: "TS-04",
    description: "Navy Blue good  Hoodie Tracksuit Unisex For Women & for men",
    fade_delay: "200",
  },
  {
    id: 5,
    image: Img5,
    title: "TS-05",
    description: "Navy Blue good  Hoodie Tracksuit Unisex For Women & for men",
    fade_delay: "200",
  },
  {
    id: 6,
    image: Img6,
    title: "TS-06",
    description: "Navy Blue good  Hoodie Tracksuit Unisex For Women & for men",
    fade_delay: "300",
  },
];
const Shorts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Change to false if you want animations to repeat on scroll
    });
  }, []);

  return (
    <div id="shorts" className="relative">
      <section
        id="hoodies"
        className="bg-transparent   sm:mt-2  text-center   px-16  pb-72"
      >
        <div className="absolute w-72 h-72 -top-24 p-12 -left-72 md:-left-56 lg:-left-40 border-[10px] border-primary rotate-45 bg-transparent"></div>
        <div className="absolute w-[230px] h-[230px] -top-24 -left-72 md:-left-56 lg:-left-40 border-[10px] border-primary rotate-45 bg-transparent m-8"></div>
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-yellow-500 text-4xl  sm:pt-0 pb-32 sm:pb-48  uppercase tracking-wide leading-[3rem] font-semibold"
        >
          unisex <br /> Shorts
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {products.map((product) => (
            <div
              data-aos="fade-up"
              data-aos-delay={product.fade_delay}
              key={product.id}
              className={`bg-transparent group  p-4 
            }`}
            >
              <div className="overflow-hidden  border-yellow-500 border-[6px] rounded">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full bg-transparent   group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h2 className="text-primary mt-4 text-4xl text-center">
                {product.title}
              </h2>

              <p className="mt-2 text-primary text-center text-lg sm:text-2xl uppercase">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="absolute w-72 h-72 -top-24 p-12 -right-72 md:-right-56 lg:-right-40 border-[10px] border-primary rotate-45 bg-transparent"></div>
      <div className="absolute w-[230px] h-[230px] -top-24 -right-72 md:-right-56 lg:-right-40 border-[10px] border-primary rotate-45 bg-transparent m-8"></div>
    </div>
  );
};

export default Shorts;
