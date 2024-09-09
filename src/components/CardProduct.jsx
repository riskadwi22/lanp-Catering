import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Product1 from "../assets/product1-1.svg";
import { useNavigate } from "react-router-dom";

export function CardProduct() {
  const navigate = useNavigate();
  return (
    <>
      <Card className="mt-16 w-[248px] h-ful bg-transparent" shadow={false}>
        <CardHeader className="relative h-[267.43px] w-full mx-0">
          <img
            src={Product1}
            alt="product"
            className="w-[253px] h-[267.43px] cursor-pointer"
            onClick={() => navigate("/detail")}
          />
        </CardHeader>
        <CardBody className="px-0">
          <Typography className="text-[23.8px] text-white montserrat font-semibold">
            Melanconny Edition
          </Typography>
          <Typography className="text-[24px] text-[#F62C85] montserrat font-normal">
            Rp150.000
          </Typography>
        </CardBody>
        <CardFooter className="px-0 pb-0 -mt-3">
          <Typography className="text-[15px] text-[#766D6D] montserrat font-normal">
            23 Sold
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}
