import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function TotalPrice() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-transparent">
        <div className="bg-black w-[400px]  p-4 px-8 rounded-xl pb-8">
          <Typography className="text-white text-[32px] inria-sans font-bold">
            Total Price
          </Typography>
          <div className="flex justify-between mt-8">
            <Typography className="text-white text-[20px] inria-sans font-bold">
              0 Selected
            </Typography>
            <Typography className="text-[32px] text-[#F62C85] montserrat font-normal">
              Rp0
            </Typography>
          </div>
          <div className="h-[1px] bg-white/40 mt-2" />
          <Button
            variant="outlined"
            className="normal-case rounded-full w-full mt-7"
            color="pink"
            onClick={() => navigate("/checkout")}
          >
            <Typography className="text-white inria-sans font-bold text-[20px]">
              Checkout
            </Typography>
          </Button>
        </div>
      </div>
    </>
  );
}
