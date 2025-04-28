import Catering from "../assets/catering.png";
import FastDel from "../assets/fast-delivery.png";
import HappyCust from "../assets/happy-client.png";
import Order from "../assets/order.png"

const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between p-10" id="layanan">
            {/* Bagian Teks */}
            <div className="flex-1 mb-10 lg:mb-0">
                <div className="mt-28">
                <h2 className="text-3xl font-bold mb-4">Layanan Kuliner Kami</h2>
                <p className="mb-6 leading-relaxed">
                Kami menyediakan pengalaman bersantap yang tak terlupakan dan menawarkan layanan yang luar biasa, memadukan seni kuliner dengan keramahtamahan yang hangat.
                </p>
                {/* <button className="bg-[#468585] text-white py-2 px-6 rounded-full hover:bg-[#356767] transition duration-300">
                    Explore
                </button> */}
                </div>
            </div>

            {/* Bagian Kartu */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full max-h-min ">
                    <img src= {Catering} alt="Catering" className="mx-auto mb-4 lg:w-[100px]" />
                    <h3 className="font-bold text-lg">CATERING</h3>
                    <p className="text-gray-600">Memanjakan tamu Anda dengan cita rasa dan keramahtamahan</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full max-h-min">
                    <img src= {FastDel} alt="Fast Delivery" className="mx-auto mb-4 lg:w-[100px]" />
                    <h3 className="font-bold text-lg">PENGIRIMAN CEPAT</h3>
                    <p className="text-gray-600">Kami segera mengirimkan pesanan Anda ke tampat tujuan Anda</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full max-h-min">
                    <img src= {Order} alt="Online Ordering" className="mx-auto mb-4 lg:w-[100px]" />
                    <h3 className="font-bold text-lg">PEMESANAN ONLINE</h3>
                    <p className="text-gray-600">Jelajahi menu & pesan dengan mudah menggunakan Pemesanan Online kami</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full max-h-min">
                    <img src= {HappyCust} alt="Testimoni" className="mx-auto mb-4 lg:w-[100px]" />
                    <h3 className="font-bold text-lg">TESTIMONI</h3>
                    <p className="text-gray-600">Testimoni masakan sesuai sesuai dengan selera dan keinginan.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
