import Slider from "react-slick";
import Landscape from "../assets/landscape.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: Landscape,
    text: "“I had the pleasure of dining at Dika Lestari last night, and I’m still raving about the experience! The attention to detail in presentation and service was impeccable”",
  },
  {
    image: Landscape,
    text: "“The food was absolutely amazing, and the service was top-notch. I can't wait to come back!”",
  },
  {
    image: Landscape,
    text: "“The food was absolutely amazing, and the service was top-notch. I can't wait to come back!”",
  },
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
    <div className="max-w-6xl mx-auto py-12 mt-14 h-full">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <div className="lg:flex lg:flex-col-2 lg:gap-10 gap-0 px-0">
              <div className='col-span-6 w-full h-full max-w-2xl mx-auto'>
                <img 
                  src={item.image} 
                  alt="Testimonial"     
                  className="rounded-lg shadow-lg mb-6 h-full" 
                />
              </div>
              <div>
              <h1 className="text-3xl font-bold">What Our Customers Say About Us</h1>
              <p className="text-lg text-center text-gray-700 lg:w-[400px] mt-24">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
