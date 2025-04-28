import PlayStore from "../assets/PlayStore.png";
import AppStore from "../assets/AppStore.png";
import imgfdownload from "../assets/utama.jpeg";
import { Typography } from "@material-tailwind/react";

const DownloadApp = () => {
    return (
        <div className="h-full w-full lg:max-w-7xl lg:mx-auto bg-[#4D7E7E] lg:p-16 p-6 rounded-lg grid lg:grid-cols-2 lg:gap-24 flex-col gap-8">
            <div className="lg:mt-20 mt-5 w-full lg:max-w-xl">
                <Typography className="text-4xl lg:text-5xl font-semibold">
                    Order kami di aplikasi <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">DikaStore</span>
                </Typography>
                <Typography className="mt-4">Nikmati kemudahan pemesanan makanan yang lezat di DikaStore! Temukan berbagai pilihan menu catering yang bisa disesuaikan dengan selera dan kebutuhan Anda. Pesan lebih cepat dan nyaman hanya dalam beberapa langkah.Unduh sekarang dan nikmati kemudahan serta pengalaman terbaik Anda!</Typography>
                <Typography className="lg:mt-2 mt-8">Download aplikasi DikaStore di:</Typography>
                <div className="grid grid-cols-2 lg:gap-5 gap-1 lg:mt-16 mt-1">
                    <img
                        src={PlayStore}
                        alt="Google Play"
                        className="lg:object-contain w-full lg:h-24"
                    />
                    <img
                        src={AppStore}
                        alt="App Store"
                        className="lg:object-contain w-full lg:h-24"
                    />
                </div>
            </div>
            <div className="flex lg:justify-end justify-normal">
                <img
                    src={imgfdownload}
                    alt="Food"
                    className="rounded-lg w-[416px] lg:h-[528px] h-[200px] md:w-[416px] md:h-[528px] object-cover"
                />
            </div>

        </div>
    );
};

export default DownloadApp;
