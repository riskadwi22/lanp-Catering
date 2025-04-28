import Stall from "../assets/stall.png";
import Nasi from "../assets/biryani.png";
import Buffet from "../assets/buffet.png";
import Box from "../assets/bento-box.png";
import { useNavigate } from "react-router-dom";



const Categories = () => {
    const navigate = useNavigate()
    return (
        <section className="container mx-auto py-12 lg:mt-16 mt-12" id="menu">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 cursor-pointer">
                <div className="bg-white rounded-lg shadow-md p-6 text-center"  onClick={() => navigate("/food-stall")} >
                <img src={Stall} alt="Indonesian Food" className="w-24 h-24 mx-auto mb-4 " />
                    <h3 className="text-xl font-bold mb-2 ">Food Stall</h3>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center"  onClick={() => navigate("/nasi-tradisional")}>
                <img src={Nasi} alt="Indonesian Food" className="w-24 h-24 mx-auto mb-4 " />
                    <h3 className="text-xl font-bold mb-2">Nasi Tradisional</h3>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center"  onClick={() => navigate("/buffet")}>
                <img src={Buffet} alt="Indonesian Food" className="w-24 h-24 mx-auto mb-4 " />
                    <h3 className="text-xl font-bold mb-2">Buffet</h3>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center"  onClick={() => navigate("/nasi-box")}>
                <img src={Box} alt="Indonesian Food" className="w-24 h-25 mx-auto mb-4  " />
                    <h3 className="text-xl font-bold mb-2">Nasi Box</h3>
                </div>

            </div>
        </section>
    );
};

export default Categories;
