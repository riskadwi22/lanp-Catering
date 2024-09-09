import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import Image from "../assets/image-auth.png";
import Close from "../assets/close.svg";
import { useState } from "react";

export default function Login() {
  const [size, setSize] = useState();
  const handleOpen = (value) => setSize(value);
  return (
    <>
      <Button
        className="normal-case h-[35px] w-[113px] flex items-center justify-center rounded-full"
        color="pink"
        onClick={() => handleOpen("xs")}
        variant="outlined"
      >
        <Typography className="text-[12px] text-white poppins font-medium">
          Login
        </Typography>
      </Button>
      <Dialog
        open={size === "xs"}
        handler={handleOpen}
        size={size || "xs"}
        className="bg-black rounded-xl"
      >
        <DialogHeader className="p-0 relative">
          <img src={Image} alt="image" />
          <img
            src={Close}
            alt="close"
            className="absolute top-3 right-2 h-6 w-6 cursor-pointer"
            onClick={() => handleOpen(null)}
          />
        </DialogHeader>
        <DialogBody className="mt-10 bg-black px-10">
          <Input
            variant="standard"
            label="Email*"
            placeholder="Email.."
            color="white"
          />
          <div className="mt-5">
            <Input
              variant="standard"
              label="Password*"
              placeholder="Password.."
              color="white"
            />
          </div>
          <Button className="w-full normal-case bg-[#F62C85] mt-4">
            <span>Login</span>
          </Button>
          <div className="text-[11px] flex justify-center items-center pb-5">
            <Typography className="text-white mt-4 gap-1 text-[11px] flex items-center poppins font-normal">
              Doesnt have an account?
              <span className="text-[#F62C85] cursor-pointer">
                Register Now
              </span>
            </Typography>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
