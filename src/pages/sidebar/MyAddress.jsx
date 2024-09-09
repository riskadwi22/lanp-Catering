import { Button, Typography } from "@material-tailwind/react";
import Pencil from "../../assets/pencil.svg";
import Trash from "../../assets/trash.svg";
import Sidebar from "../../components/Sidebar";

export default function MyAddress() {
  return (
    <>
      <div className="w-[1174px] mx-auto mt-10">
        <Typography className="text-white text-[32px] montserrat font-bold">
          My Address
        </Typography>{" "}
        <div className="flex flex-col-2 mt-10 gap-7">
          <Sidebar />
          <div className="w-[744px] bg-black p-7 rounded-xl px-14 pb-12">
            <div className="flex justify-between">
              <Typography className="text-[32px] text-white">
                My Address
              </Typography>
              <Button
                color="pink"
                className="rounded-full flex items-center gap-2"
              >
                <Typography className="text-white text-[20px]">+</Typography>
                <Typography className="text-white text-[15px] normal-case">
                  New Address
                </Typography>
              </Button>
            </div>
            <div className="mt-10 border border-[#F62C85] bg-[#f62c8442] rounded-xl p-4 ">
              <div className="px-5">
                <div className="flex items-center gap-4">
                  <Typography className="text-white text-[32px]">
                    John Doe
                  </Typography>
                  <div className="bg-[#F62C85] rounded-full w-[77px] h-[17px]">
                    <Typography className="text-white text-[10px] flex justify-center">
                      Main Address
                    </Typography>
                  </div>
                </div>
                <Typography className="text-[#F62C85] text-[14px]">
                  +628xxxxxxxxxx
                </Typography>
                <Typography className="text-[14px] text-white/60 mt-2 w-[458px]">
                  Jalan lawang gintung, Jl. Sekip Paspampres Depan Puskesmas,
                  RT.01/RW.01, Lawanggintung, Kec. Bogor Sel., Kota Bogor, Jawa
                  Barat 16133
                </Typography>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img src={Pencil} alt="pencil" />
                    <Typography className="text-[10px] text-white/60">
                      Change Address
                    </Typography>
                  </div>
                  <Typography className="text-white/60">|</Typography>
                  <div className="flex items-center gap-2">
                    <img
                      src={Trash}
                      alt="Trash"
                      className="h-[10px] w-[8.24px]"
                    />
                    <Typography className="text-[10px] text-white/60">
                      Change Address
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 border border-white rounded-xl p-4">
              <div className="px-5">
                <div className="flex items-center gap-4">
                  <Typography className="text-white text-[32px]">
                    John Doe
                  </Typography>
                  <div className="bg-[#F62C85] rounded-full w-[77px] h-[17px]">
                    <Typography className="text-white text-[10px] flex justify-center">
                      Main Address
                    </Typography>
                  </div>
                </div>
                <Typography className="text-[#F62C85] text-[14px]">
                  +628xxxxxxxxxx
                </Typography>
                <div className="flex justify-between">
                  <Typography className="text-[14px] text-white/60 mt-2 w-[406px]">
                    Jalan lawang gintung, Jl. Sekip Paspampres Depan Puskesmas,
                    RT.01/RW.01, Lawanggintung, Kec. Bogor Sel., Kota Bogor,
                    Jawa Barat 16133
                  </Typography>
                  <Button
                    variant="outlined"
                    className="w-[144px] h-[43px] flex justify-center items-center rounded-full"
                    color="pink"
                  >
                    <Typography className="text-white normal-case">
                      Choose
                    </Typography>
                  </Button>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img src={Pencil} alt="pencil" />
                    <Typography className="text-[10px] text-white/60">
                      Change Address
                    </Typography>
                  </div>
                  <Typography className="text-white/60">|</Typography>
                  <div className="flex items-center gap-2">
                    <img
                      src={Trash}
                      alt="Trash"
                      className="h-[10px] w-[8.24px]"
                    />
                    <Typography className="text-[10px] text-white/60">
                      Change Address
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
