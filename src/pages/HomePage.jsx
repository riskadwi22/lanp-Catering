import { Typography, Button } from "@material-tailwind/react";
import Categories from "./Categories";
import Services from "./Services";
import Testimonials from "./Testinomials";
import Footer from "./Footer";
import DownloadApp from "./DownloadApp";
import Banner from "../assets/Banner1.svg";
import AboutPage from "./About";

export default function HomePage() {
  return (
    <section className="container mx-auto py-12 mt-[-16px]" id="utama">
      <div className="relative">
        <img
          src={Banner}
          alt="banner"
          className="h-[300px] sm:h-[450px] lg:h-[615px] w-full object-cover"
        />
        <div className="absolute top-10 sm:top-16 lg:top-24 lg:px-[67px] px-4">
          <div className="flex flex-col items-start">
            <div className="lg:w-[650px]">
              <Typography
                className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[50px] font-bold text-white leading-tight"
              >
                Rasakan Sensasi <br />
                Kelezatan Makanan yang <br />
                <span className="text-[#468585]">Istimewa</span>
              </Typography>
              <Typography
                className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] mt-4 lg:mt-6 lg:w-[400px] text-white"
              >
                Dimana setiap piring menceritakan kisah lezat <br />
                penguasaan dan kenikmatan sebuah makanan
              </Typography>
              <Button
                className="mt-6 sm:mt-8 bg-[#468585] hover:bg-[#3a7171] text-white px-4 py-2 sm:px-6 sm:py-3"
                onClick={() => window.location.href = "https://linkdownload.com"}
              >
                Order Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[67px]">
        <AboutPage />
        <Categories />
        <Testimonials />
        <Services />
        <DownloadApp />
        <Footer />
      </div>
    </section>
  );
}
