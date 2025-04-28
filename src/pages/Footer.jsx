import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from "../assets/logo.png";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    };




  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Slogan */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="h-[75px] w-[105px] flex items-center">
              <img
                src={Logo}
                alt="logo-navbar"
                className="h-24 w-32 cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
          <p>Nikmati seni di mana setiap hidangan merupakan mahakarya kuliner</p>
        </div>


        {/* Main Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Main Menu</h3>
          <ul className="space-y-2">
            <li> <Typography onClick={() => handleNavigateToSection('tentang')} className="cursor-pointer hover:text-[#468585] text-black">Tentang</Typography></li>
            <li><Typography onClick={() => handleNavigateToSection('menu')} className="cursor-pointer hover:text-[#468585] text-black">Menu</Typography></li>
            <li><Typography onClick={() => handleNavigateToSection('testimoni')} className="cursor-pointer hover:text-[#468585] text-black">Testimoni</Typography></li>
           <li> <Typography onClick={() => handleNavigateToSection('layanan')} className="cursor-pointer hover:text-[#468585] text-black">Layanan</Typography></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
          <ul className="space-y-2">
            <li><a href="mailto:example@email.com" className="hover:text-[#468585]">example@email.com</a></li>
            <li><a href="tel:+6282122393716" className="hover:text-[#468585]">+6282122393716</a></li>
            <li><a href="https://www.instagram.com/dikalestaricatering/" className="hover:text-[#468585]">Social media</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10 flex flex-col items-center justify-between md:flex-row text-sm text-gray-500">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <FaFacebookF className="hover:text-[#468585] cursor-pointer" />
          <FaInstagram className="hover:text-[#468585] cursor-pointer" />
          <FaTwitter className="hover:text-[#468585] cursor-pointer" />
          <FaYoutube className="hover:text-[#468585] cursor-pointer" />
        </div>
        <p>&copy; 2024 projek work | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
