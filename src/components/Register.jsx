import {
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
import Image from "../assets/image-auth.png";
import Close from "../assets/close.svg";

export default function Register() {
  const [dialog, setDialog] = useState();
  const handleDialog = (value) => setDialog(value);
  return (
    <>
      <Button
        className="normal-case h-[35px] w-[113px] flex items-center justify-center rounded-full"
        color="pink"
        onClick={() => handleDialog("xs")}
      >
        <Typography className="text-[12px] text-white poppins font-medium">
          Sign In
        </Typography>
      </Button>
      <Dialog
        open={dialog === "xs"}
        handler={handleDialog}
        size={dialog || "xs"}
        className="bg-black"
      >
        <DialogHeader className="p-0 relative bg-transparent">
          <img src={Image} alt="image" />
          <img
            src={Close}
            alt="close"
            className="absolute top-3 right-2 h-6 w-6 cursor-pointer"
            onClick={() => handleDialog(null)}
          />
        </DialogHeader>
        <DialogBody className="mt-6 bg-black px-10 overflow-auto">
          <Input
            variant="standard"
            label="Name*"
            placeholder="Your Name.."
            color="white"
          />
          <div className="mt-5">
            <Input
              variant="standard"
              label="Email*"
              placeholder="Your Email.."
              color="white"
            />
          </div>
          <div className="mt-5">
            <Input
              variant="standard"
              label="Phone*"
              placeholder="Your Phone.."
              color="white"
            />
          </div>
          <div className="mt-5">
            <Input
              variant="standard"
              label="Password*"
              placeholder="Your Password.."
              color="white"
            />
          </div>
          <div className="mt-5">
            <Input
              variant="standard"
              label="Confirm Password*"
              placeholder="Confirm Password.."
              color="white"
            />
          </div>
          <div className="flex items-center mt-5">
            <Checkbox color="pink" />
            <Typography className="text-white text-[9px] poppins">
              I agree to receive information and commercial offersfrom Heylocal
              and World White Enterprice
            </Typography>
          </div>
          <Button className="w-full normal-case bg-[#F62C85] mt-4">
            <span>Register</span>
          </Button>
          <div className="text-[11px] flex justify-center items-center">
            <Typography className="text-white mt-4 gap-1 text-[11px] flex items-center poppins font-normal">
              Already have an account?
              <span className="text-[#F62C85] cursor-pointer">Login</span>
            </Typography>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
