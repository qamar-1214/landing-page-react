import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; //
import { FaPhone } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Change to false if you want animations to repeat on scroll
    });
  }, []);
  return (
    <div id="about" className="about-bg">
      <section className="mt-56 lg:mt-96 container mx-auto pb-32 py-12 lg:py-28 relative">
        <div className="text-primary text-center py-4 text-4xl font-medium">
          <h2 data-aos="fade-up" data-aos-delay="200">
            LOGO
          </h2>
        </div>
        <div className="py-12 text-primary uppercase text-4xl leading-[4rem] tracking-wider text-center">
          <h1 data-aos="fade-up" data-aos-delay="200">
            introducing your merch ltd <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </h1>
        </div>
        <div className="text-primary text-xl leading-[2.5rem] tracking-wider px-12 flex flex-col space-y-12 text-center">
          <div data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repudiandae. Officia tenetur delectus architecto nesciunt
            necessitatibus reiciendis, aliquam distinctio atque blanditiis
            dignissimos mollitia ad, assumenda ratione eos minima, esse numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque repellendus doloribus vel labore neque qui eaque sit maiores
            sunt ipsum nesciunt nostrum quis expedita voluptates, accusamus
            saepe. Placeat, cumque.
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repudiandae. Officia tenetur delectus architecto nesciunt
            necessitatibus reiciendis, aliquam distinctio atque blanditiis
            dignissimos mollitia ad, assumenda ratione eos minima, esse numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque repellendus doloribus vel labore neque qui eaque sit maiores
            sunt ipsum nesciunt nostrum quis expedita voluptates, accusamus
            saepe. Placeat, cumque.
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repudiandae. Officia tenetur delectus architecto nesciunt
            necessitatibus reiciendis, aliquam distinctio atque blanditiis
            dignissimos mollitia ad, assumenda ratione eos minima, esse numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            itaque repellendus doloribus vel labore neque qui eaque sit maiores
            sunt ipsum nesciunt nostrum quis expedita voluptates, accusamus
            saepe. Placeat, cumque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus, sit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Earum, impedit.
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repudiandae. Officia tenetur delectus architecto nesciunt
            necessitatibus reiciendis, aliquam distinctio atque blanditiis
          </div>
          <div className="flex flex-col gap-8 md:flex-row items-center justify-between text-primary text-xl py-20 lg:py-32">
            <h3
              className="flex items-center gap-2 text-lg lg:text-4xl"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <CiGlobe className="text-primary " />
              <span> +92-3476896-234</span>
            </h3>
            <h3
              className="flex items-center gap-2 text-lg lg:text-4xl"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <FaPhone className="text-primary " />
              <span> +92-3476896-234</span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
