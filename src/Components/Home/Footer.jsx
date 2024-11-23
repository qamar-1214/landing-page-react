import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/footer-logo.png";
const Footer = () => {
  return (
    <section className="relative">
      <footer className="bg-primary text-black py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Company Logo" className="h-8 mr-4" />
            <p className="font-semibold">Your Company Name</p>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <a href="#home" className="mr-4">
              Home
            </a>
            <a href="#about" className="mr-4">
              About
            </a>
            <a href="#hoodies" className="mr-4">
              Hoodies
            </a>
            <a href="#shorts" className="mr-4">
              Shorts
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="mr-4">
              <FaFacebook />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter />
            </a>
            <a href="#" className="mr-4">
              <FaInstagram />
            </a>
            <a href="#" className="mr-4">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
