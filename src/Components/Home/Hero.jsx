const Hero = () => {
  return (
    <div>
      <div className="relative bg-white w-full h-[600px] ">
        <div className="hero-img  absolute top-0 xmd:left-[100px]   w-full h-[700px]  lg:h-[900px] ">
          <div className="hero-content flex flex-col gap-5 lg:gap-8 top-[50%] left-[45%]  xmd:left-[35%]">
            <h1 className="outfit-uniquifier  text-4xl lg:text-6xl lg:leading-[5rem] xl:leading-[7rem]  xl:text-8xl text-white tracking-wide leading-[3rem]">
              Discover true <br /> personalization.
            </h1>
            <h2 className="hero-h2 montecarlo-regular text-4xl text-primary">
              ______ Made to Measure Dress Shirts
            </h2>
            <button className="bg-white text-secondary text-md  py-3 shadow-lg font-medium w-40 hover:bg-gray-300 transition-all ease-in-out duration-300">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
