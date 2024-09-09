import { Typography } from "@material-tailwind/react";
import { CardProduct } from "../../components/CardProduct";

export default function HomePage() {
  return (
    <>
      <div className="h-[433px] bg-[#D9D9D9] flex justify-center items-center">
        <Typography className="text-[134px] text-[#C3C0C0] poppins font-bold">
          BANNER
        </Typography>
      </div>
      <div className="w-[849px] mx-auto mt-28">
        <div className="h-[110px] bg-[#D9D9D9] w-full flex items-center rounded-xl px-10">
          <Typography className="text-[40px] poppins font-extrabold text-[#C3C0C0]">
            T-SHIRT
          </Typography>
        </div>
        <div className="flex items-center gap-14">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      <div className="w-[849px] mx-auto mt-28">
        <div className="h-[110px] bg-[#D9D9D9] w-full flex items-center rounded-xl px-10">
          <Typography className="text-[40px] poppins font-extrabold text-[#C3C0C0]">
            MERCHANDISE
          </Typography>
        </div>
        <div className="flex items-center gap-14">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </>
  );
}
