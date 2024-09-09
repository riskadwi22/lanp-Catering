import { Typography } from "@material-tailwind/react";
import ProductCheckout from "./ProductCheckout";
import ShoppingSummary from "./ShoppingSummary";

export default function CheckoutPage() {
  return (
    <>
      <div className="w-[1174px] mx-auto mt-10">
        <Typography className="text-white text-[32px] montserrat font-bold">
          Checkout
        </Typography>
        <div className="h-full mt-10">
          <div className="flex flex-col-2 gap-[30.5px]">
            <ProductCheckout />
            <ShoppingSummary />
          </div>
        </div>
      </div>
    </>
  );
}
