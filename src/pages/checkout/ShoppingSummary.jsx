import { Button, Typography } from "@material-tailwind/react";

export default function ShoppingSummary() {
  return (
    <>
      <div className="bg-transparent">
        <div className="px-8 p-1 bg-black rounded-xl w-[400px] ">
          <Typography className="text-white mt-8 text-[24px]">
            Shopping Summary
          </Typography>
          <div className="mt-10">
            <div className="flex justify-between">
              <Typography className="text-white text-[20px]">
                Total Price (1)
              </Typography>
              <Typography className="text-[20px] text-[#F62C85]">
                Rp150.000
              </Typography>
            </div>
            <div className="flex justify-between mt-4">
              <Typography className="text-white text-[20px]">
                Total shipping costs
              </Typography>
              <Typography className="text-[20px] text-[#F62C85]">
                Rp15.000
              </Typography>
            </div>
            <div className="border border-white/80 mt-5" />
            <div className="flex justify-between mt-4 pb-7">
              <Typography className="text-white text-[24px]">Total</Typography>
              <Typography className="text-[32px] text-[#F62C85]">
                Rp165.000
              </Typography>
            </div>
            <div className="pb-10">
              <Button
                variant="outlined"
                className="w-full rounded-full"
                color="pink"
              >
                <Typography className="text-white normal-case">
                  Checkout
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
