import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-transparent">
        <div className="w-[400px] bg-black p-7 rounded-xl">
          <div className="flex justify-center">
            <div className="h-[121px] w-[121px] bg-gray-400 rounded-full flex justify-center"></div>
          </div>
          <Typography className="text-white flex justify-center mt-4 text-[19px] montserrat font-bold">
            JOHN DOE
          </Typography>
          <div className="mt-5 px-5">
            <Button
              color="pink"
              className="w-full rounded-full h-[60px] normal-case"
              onClick={() => navigate("/account-info")}
            >
              <Typography className="inria-sans font-bold text-[19px]">
                Account Info
              </Typography>
            </Button>
            <Button
              color="pink"
              variant="outlined"
              className="w-full rounded-full h-[60px] normal-case mt-4"
              onClick={() => navigate("/my-order")}
            >
              <Typography className="inria-sans font-bold text-white text-[19px]">
                My Order
              </Typography>
            </Button>
            <Button
              color="pink"
              variant="outlined"
              className="w-full rounded-full h-[60px] normal-case mt-4"
              onClick={() => navigate("/my-address")}
            >
              <Typography className="inria-sans font-bold text-white text-[19px]">
                My Address
              </Typography>
            </Button>
            <Button
              color="pink"
              variant="outlined"
              className="w-full rounded-full h-[60px] normal-case mt-4"
              onClick={() => navigate("/language")}
            >
              <Typography className="inria-sans font-bold text-white text-[19px]">
                Language
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
