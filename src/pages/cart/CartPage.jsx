import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import TotalPrice from "./TotalPrice";
import SelectProduct from "./SelectProduct";

export default function CartPage() {
  return (
    <>
      <div className="w-[1174px] mx-auto mt-10">
        <Typography className="text-white text-[32px] montserrat font-bold">
          My Cart
        </Typography>
        <div className="flex flex-col-2 mt-10 gap-6">
          <SelectProduct />
          <TotalPrice />
        </div>
      </div>
    </>
  );
}
