import { Button, Typography } from "@material-tailwind/react";
import Product1 from "../../assets/product1-1.svg";
import { CardProduct } from "../../components/CardProduct";
import { useNavigate } from "react-router-dom";
import Close from "../../assets/close.svg";

export default function () {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[1174px] bg-black h-full mx-auto mt-16  rounded-xl">
        <div className="flex items-center gap-20 relative px-14">
          <div>
            <div className="w-[454px] mt-12">
              <img src={Product1} alt="product" className="w-full" />
            </div>
            <div className="flex flex-col-3 gap-[15.5px] mt-6 pb-12">
              <img
                src={Product1}
                alt="product"
                className="w-[141.02px] h-[152.06px]"
              />
              <img
                src={Product1}
                alt="product"
                className="w-[141.02px] h-[152.06px]"
              />
              <img
                src={Product1}
                alt="product"
                className="w-[141.02px] h-[152.06px]"
              />
            </div>
          </div>
          <div className="w-[450px]">
            <Typography className="text-white flex items-start text-[32px] poppins font-bold">
              Melanconny Edition T-Shirt
            </Typography>
            <Typography className="flex items-start text-[48px] text-[#F62C85] mt-1 montserrat font-normal">
              Rp150.000
            </Typography>
            <Typography className="text-white/70 flex items-start text-[12px] mt-5 montserrat font-normal">
              Ukuran oversized yang adalah kebesaran di badanmu untuk tampil
              funky n supakuul. Tersedia dalam warna olive, brown, black, beige,
              dan blue. Material : Cotton Combed 16S Print : Flocking Model
              Appearance Wanita : TB 176cm, BB 60kg, Wearing Size L Pria : TB
              183cm, BB 70kg, Wearing Size L
            </Typography>
            <div className="border border-white/60 mt-10" />
            <div className="flex items-center gap-[78px] mt-10">
              <Typography className="text-white/70 montserrat font-normal">
                Size:
              </Typography>
              <div className="flex items-center gap-3">
                <Button
                  variant="outlined"
                  color="pink"
                  size="sm"
                  className=" rounded-xl"
                >
                  <Typography className="poppins font-bold text-white">
                    S
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  color="pink"
                  size="sm"
                  className=" rounded-xl"
                >
                  <Typography className="poppins font-bold text-white">
                    M
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  color="pink"
                  size="sm"
                  className=" rounded-xl"
                >
                  <Typography className="poppins font-bold text-white">
                    L
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  color="pink"
                  size="sm"
                  className=" rounded-xl"
                >
                  <Typography className="poppins font-bold text-white">
                    XL
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  color="pink"
                  size="sm"
                  className=" rounded-xl"
                >
                  <Typography className="poppins font-bold text-white">
                    XXL
                  </Typography>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-10 mt-10">
              <Typography className="text-white/70 montserrat font-normal">
                Quantity:
              </Typography>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-5">
                  <Button
                    variant="outlined"
                    color="pink"
                    size="sm"
                    className=" rounded-xl"
                  >
                    <Typography className="poppins font-bold text-white">
                      S{" "}
                    </Typography>
                  </Button>
                  <Typography className="text-white text-[24px]">1</Typography>
                  <Button
                    variant="outlined"
                    color="pink"
                    size="sm"
                    className=" rounded-xl"
                  >
                    <Typography className="poppins font-bold text-white">
                      S
                    </Typography>
                  </Button>
                </div>
                <Typography className="text-white text-[12px] mt-6 montserrat">
                  45 pieces available
                </Typography>
              </div>
            </div>
            <div className="flex items-center mt-24 gap-5">
              <Button
                variant="outlined"
                className="rounded-full h-[50px] w-[208.47px]"
                color="pink"
                onClick={() => navigate("/cart")}
              >
                <Typography className="normal-case text-white poppins font-medium">
                  Add to Cart
                </Typography>
              </Button>
              <Button
                className="rounded-full h-[50px] w-[208.47px]"
                color="pink"
                onClick={() => navigate("/checkout")}
              >
                <Typography className="normal-case poppins font-medium">
                  Checkout
                </Typography>
              </Button>
            </div>
          </div>
          <div
            className="absolute top-7 right-7 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Close} alt="close" />
          </div>
        </div>
      </div>
      <div className="w-[849px] mx-auto mt-28">
        <div className="h-[110px] bg-[#D9D9D9] w-full flex items-center rounded-xl px-10">
          <Typography className="text-[40px] poppins font-extrabold text-[#C3C0C0]">
            T-SHIRT
          </Typography>
        </div>
        <div className="flex items-center gap-14">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      <div className="w-[849px] mx-auto mt-28">
        <div className="h-[110px] bg-[#D9D9D9] w-full flex items-center rounded-xl px-10">
          <Typography className="text-[40px] poppins font-extrabold text-[#C3C0C0]">
            MERCHANDISE
          </Typography>
        </div>
        <div className="flex items-center gap-14">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </>
  );
}
