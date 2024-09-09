import LogoFooter from "../assets/logo-footer.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import WhatsApp from "../assets/whatsapp.svg";
import ImageFooter from "../assets/image-footer.svg";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <>
      <div className="mt-24">
        <figure className="relative">
          <img src={ImageFooter} alt="Footer" />
          <div className="absolute top-[64px] px-[106px]">
            <img src={LogoFooter} alt="logo footer" />
          </div>
          <div className="absolute top-[100px] right-[430px] flex items-center gap-8">
            <Typography className="text-white poppins font-medium">
              About Melanconny
            </Typography>
            <Typography className="text-white poppins font-medium">
              Contact
            </Typography>
            <Typography className="text-white poppins font-medium">
              Terms Of Service & Privacy policy
            </Typography>
          </div>
          <div className="absolute top-[90px] right-32 flex items-center gap-3">
            <img src={Instagram} alt="instagram" />
            <img src={Facebook} alt="facebook" />
            <img src={WhatsApp} alt="whatsapp" />
          </div>
        </figure>
        <div className="h-[29px] bg-[#AD1256] flex justify-center items-center">
          <Typography className="text-white/80 text-[12px]">
            Copyright 2024 Melanconny | All right reserved.
          </Typography>
        </div>
      </div>
    </>
  );
}
