import { useState } from 'react';
import { Button, Typography } from "@material-tailwind/react";
import Logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigateToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-[#ffffff] px-4 sm:px-12 h-[75px] sticky top-0 z-10">
            <div className="flex items-center justify-between h-full">
                <div className="h-[75px] w-[105px] flex items-center">
                    <img src={Logo} alt="logo-navbar" className="h-full w-full cursor-pointer" onClick={() => navigate("/")} />
                </div>

                {/* Burger Button for Mobile */}
                <div className="block sm:hidden">
                    <Button onClick={toggleMenu} className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
                        </svg>
                    </Button>
                </div>

                {/* Menu Links for Desktop */}
                <div className="hidden sm:flex gap-10 items-center">
                <Typography onClick={() => handleNavigateToSection('utama')} className="cursor-pointer font-bold text-black">Utama</Typography>
                    <Typography onClick={() => handleNavigateToSection('tentang')} className="cursor-pointer font-bold text-black">Tentang</Typography>
                    <Typography onClick={() => handleNavigateToSection('menu')} className="cursor-pointer font-bold text-black">Menu</Typography>
                    <Typography onClick={() => handleNavigateToSection('testimoni')} className="cursor-pointer font-bold text-black">Testimoni</Typography>
                    <Typography onClick={() => handleNavigateToSection('layanan')} className="cursor-pointer font-bold text-black">Layanan</Typography>
                </div>

                {/* Contact Button */}
                <div className="hidden sm:flex justify-end pr-4 items-center">
                    <Button
                        className="bg-[#468585] rounded-full w-26 flex items-center gap-2"
                        onClick={() => window.location.href = 'https://wa.me/+6282122393716'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <Typography className="text-sm">Contact</Typography>
                    </Button>
                </div>

            </div>

            {/* Mobile Menu */}
            <div className={`absolute top-[75px] left-0 w-full bg-white shadow-lg ${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="flex flex-col items-center py-4">
                    <Typography onClick={() => handleNavigateToSection('utama')} className="cursor-pointer py-2">Utama</Typography>
                    <Typography onClick={() => handleNavigateToSection('tentang')} className="cursor-pointer py-2">Tentang</Typography>
                    <Typography onClick={() => handleNavigateToSection('menu')} className="cursor-pointer py-2">Menu</Typography>
                    <Typography onClick={() => handleNavigateToSection('testimoni')} className="cursor-pointer py-2">Testimoni</Typography>
                    <Typography onClick={() => handleNavigateToSection('layanan')} className="cursor-pointer py-2">Layanan</Typography>
                </div>
            </div>
        </div>
    );
}
