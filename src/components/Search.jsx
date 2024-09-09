import { Button, Typography } from "@material-tailwind/react";

export default function Search() {
  return (
    <>
      <div>
        <Button
          variant="outlined"
          className="rounded-full h-[45px] w-full normal-case flex items-center"
          color="white"
        >
          <Typography className="text-[14px]">Search Product</Typography>
        </Button>
      </div>
    </>
  );
}
