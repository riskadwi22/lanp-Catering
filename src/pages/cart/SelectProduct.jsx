import { Checkbox, Typography } from "@material-tailwind/react";
import Product1 from "../../assets/product1-1.svg";

export default function SelectProduct() {
  return (
    <>
      <div className="w-[744px] bg-black rounded-xl pb-7">
        <div className="flex items-center gap-4 p-5">
          <Checkbox color="pink" className=" border-2" />
          <Typography className="text-[20px] text-white inria-sans font-bold">
            Select all
          </Typography>
        </div>
        <div className="h-[1px] bg-white/40 mt-2" />
        <div className="flex items-center mt-6 gap-4 pb-3 px-5">
          <Checkbox color="pink" className=" border-2" />
          <div className="flex items-center gap-5">
            <img src={Product1} alt="product" className="w-[94.55px]" />
            <div className="">
              <Typography className="text-[20px] text-white montserrat font-semibold">
                Melanconny Edition
              </Typography>
              <Typography className="text-[24px] text-[#F62C85]">
                Rp150.000
              </Typography>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white/40 mt-2" />
        <div className="flex items-center mt-5 gap-4 pb-3 px-5">
          <Checkbox color="pink" className=" border-2" />
          <div className="flex items-center gap-5">
            <img src={Product1} alt="product" className="w-[94.55px]" />
            <div className="">
              <Typography className="text-[20px] text-white montserrat font-semibold">
                Melanconny Edition
              </Typography>
              <Typography className="text-[24px] text-[#F62C85]">
                Rp150.000
              </Typography>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white/40 mt-2" />
      </div>
    </>
  );
}
