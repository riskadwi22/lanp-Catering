import { Button, Typography } from "@material-tailwind/react";
import Product1 from "../../assets/product1-1.svg";
import Pencil from "../../assets/pencil.svg";

export default function ProductCheckout() {
  return (
    <>
      <div className="bg-transparent h-full">
        <div className="w-[744px]">
          <div className="bg-black px-8 rounded-xl">
            <div className="pb-8 flex items-center gap-8">
              <img
                src={Product1}
                alt="Product"
                className="w-[138px] h-[148.81px] mt-8"
              />
              <div className="mt-8">
                <Typography className="text-white text-[24px]">
                  Skull Edition
                </Typography>
                <Typography className="text-[#F62C85] text-[36px]">
                  Rp150.000
                </Typography>
                <div className="flex items-center gap-2 mt-4">
                  <img src={Pencil} alt="pencil" />
                  <Typography className="text-white/80">add note</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black mt-5 rounded-xl ">
            <div className="px-8 p-7">
              <div className="rounded-full bg-[#F62C85] w-[77px] flex justify-center">
                <Typography className="text-white text-[10px]">
                  Main Address
                </Typography>
              </div>
              <div className="flex justify-between mt-5">
                <div className="w-[465px]">
                  <div className="flex items-center gap-5">
                    <Typography className="text-white text-[20px]">
                      John Doe
                    </Typography>
                    <Typography className="text-[#F62C85] mt-1">
                      +628xxxxxxxxxx
                    </Typography>
                  </div>
                  <Typography className="text-white/70 text-[12px] mt-2">
                    Jalan lawang gintung, Jl. Sekip Paspampres Depan Puskesmas,
                    RT.01/RW.01, Lawanggintung, Kec. Bogor Sel., Kota Bogor,
                    Jawa Barat 16133
                  </Typography>
                </div>
                <Button
                  className="normal-case h-[43px] w-[144px] flex justify-center items-center rounded-full"
                  variant="outlined"
                  color="pink"
                >
                  <Typography className="text-white text-[12.6px]">
                    Change Address
                  </Typography>
                </Button>
              </div>
            </div>
            <div className="h-[1px] bg-white/40 mt-2" />
            <div className="mt-8 px-8">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <Typography className="text-white">
                    Select shipping
                  </Typography>
                  <Button
                    variant="outlined"
                    color="white"
                    className="w-full rounded-lg mt-3 normal-case"
                  >
                    Reguler
                  </Button>
                </div>
                <div>
                  <Typography className="text-white">Select Courier</Typography>
                  <Button
                    variant="outlined"
                    color="white"
                    className="w-full rounded-lg mt-3 normal-case"
                  >
                    Ninja Express
                  </Button>
                  <Typography className="text-white/80 text-[12px] mt-2">
                    Estimate 4 - 6 Jun
                  </Typography>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-white/40 mt-8" />
            <div className="px-8 mt-8 flex justify-between pb-6">
              <div className="flex items-center">
                <img src="" alt="BCA" />
                <Typography className="text-white text-[16px]">
                  BCA Virtual Account
                </Typography>
              </div>
              <Button variant="outlined" color="pink" className="rounded-full">
                <Typography className="text-white normal-case text-[15px]">
                  Change payment methode
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
