import { Checkbox, Typography } from "@material-tailwind/react";
import Sidebar from "../../components/Sidebar";

export default function Language() {
  return (
    <>
      <div className="w-[1174px] mx-auto mt-10">
        <Typography className="text-white text-[32px] montserrat font-bold">
          My Order
        </Typography>
        <div className="mt-10 flex flex-col-2 gap-8">
          <Sidebar />
          <div className="bg-transparent">
            <div className="w-[744px] bg-black p-7 rounded-xl px-14 pb-12">
              <Typography className="text-white text-[32px]">
                Language
              </Typography>
              <div className="flex items-center gap-2 mt-10 border border-[#F62C85] bg-[#f62c8442] rounded-xl p-2">
                <Checkbox className="rounded-full" color="pink" />
                <Typography className="text-white text-[20px]">
                  English
                </Typography>
              </div>
              <div className="flex items-center gap-2 mt-5 border border-white rounded-xl p-2">
                <Checkbox className="rounded-full" color="pink" />
                <Typography className="text-white text-[20px]">
                  Indonesia
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
