import Slider from "react-slick";
import Landscape from "../assets/landscape.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: Landscape,
    text: "“Saya senang bersantap di Dika Lestari tadi malam, dan saya masih memuji pengalamannya! Perhatian terhadap detail dalam presentasi dan layanan sangat sempurna.”",
  },
  {
    image: Landscape,
    text: "“Makanannya benar-benar menakjubkan, dan layanannya terkemuka. Saya tidak sabar untuk kembali lagi!”",
  },
  // {
  //   image: Landscape,
  //   text: "“The food was absolutely amazing, and the service was top-notch. I can't wait to come back!”",
  // },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-6xl mx-auto py-12 mt-14 h-full" id="testimoni">
      <p className="text-center font-bold text-[#FF6868]"> TESTIMONI DAN REVIEW</p>
      <h2 className="text-3xl font-bold text-center mb-8">Testimonial Dan Review</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <div className="lg:flex lg:flex-col-2 items-center justify-center lg:gap-10 gap-0 px-0">
              <div className='col-span-6 w-full h-full max-w-2xl mx-auto'>
                <img 
                  src={item.image} 
                  alt="Testimonial"     
                  className="rounded-lg shadow-lg mb-6 h-full" 
                />
              </div>
              <div className='col-span-6 flex flex-col justify-center items-center'>
                <h1 className="text-3xl font-bold">Apa Kata Pelanggan Tentang Kami?</h1>
                <p className="text-lg text-center text-gray-700 lg:w-[400px] mt-4">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
