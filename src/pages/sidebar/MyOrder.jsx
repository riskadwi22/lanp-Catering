import { Button, Typography } from "@material-tailwind/react";
import Product1 from "../../assets/product1-1.svg";
import Sidebar from "../../components/Sidebar";

export default function MyOrder() {
  return (
    <>
      <div className="w-[1174px] mx-auto mt-10">
        <Typography className="text-white text-[32px] montserrat font-bold">
          My Order
        </Typography>
        <div className="mt-10 flex flex-col-2 gap-8">
          <Sidebar />
          <div className="w-[744px] bg-black p-7 rounded-xl px-14">
            <div className="flex justify-between">
              <Typography className="text-white text-[32px]">
                My Order
              </Typography>
              <Button variant="outlined" className="rounded-full" color="white">
                Most Latest
              </Button>
            </div>
            <div className="flex flex-col-2 gap-5 mt-14">
              <img
                src={Product1}
                alt="product"
                className="h-[132px] w-[123px]"
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Typography className="text-white text-[10px] bg-[#219653] w-[82.08px] h-[20.22px] rounded-full flex items-center justify-center">
                      Complete
                    </Typography>
                    <Typography className="text-white/70 text-[12px]">
                      INV/20240301/MPL/3767737414
                    </Typography>
                  </div>
                  <Typography className="text-white/70">
                    30 April 2024
                  </Typography>
                </div>
                <Typography className="text-white text-[20px] mt-1">
                  Melanconny Edition
                </Typography>
                <Typography className="text-[24px] mt-1 text-[#F62C85]">
                  Rp165.000
                </Typography>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <Typography className="text-white/50 text-[12px]">
                      Payment Method
                    </Typography>
                    <Typography className="text-white/90 text-[12px]">
                      BCA Virtual Account
                    </Typography>
                  </div>
                  <Button
                    variant="outlined"
                    className="rounded-full"
                    color="pink"
                  >
                    <Typography className="text-white normal-case text-[15px]">
                      See details
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
            <div className="pb-6">
              <div className="border border-gray-700 mt-10" />
            </div>
            <div className="flex flex-col-2 gap-5 mt-7">
              <img
                src={Product1}
                alt="product"
                className="h-[132px] w-[123px]"
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Typography className="text-[#F62C85] text-[10px] bg-[#FFB3D4] w-[82.08px] h-[20.22px] rounded-full flex items-center justify-center">
                      On Progress
                    </Typography>
                    <Typography className="text-white/70 text-[12px]">
                      INV/20240301/MPL/3767737414
                    </Typography>
                  </div>
                  <Typography className="text-white/70">
                    30 April 2024
                  </Typography>
                </div>
                <Typography className="text-white text-[20px] mt-1">
                  Melanconny Edition
                </Typography>
                <Typography className="text-[24px] mt-1 text-[#F62C85]">
                  Rp165.000
                </Typography>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <Typography className="text-white/50 text-[12px]">
                      Payment Method
                    </Typography>
                    <Typography className="text-white/90 text-[12px]">
                      BCA Virtual Account
                    </Typography>
                  </div>
                  <Button
                    variant="outlined"
                    className="rounded-full"
                    color="pink"
                  >
                    <Typography className="text-white normal-case text-[15px]">
                      See details
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
            <div className="pb-6">
              <div className="border border-gray-700 mt-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
