import foto from '../assets/utama.jpeg'; // Ensure this path is correct

const AboutPage = () => {
  return (
    <section className="container mx-auto py-12 lg:mt-16 mt-12" id="tentang">
      {/* <p className="text-center font-bold text-[#FF6868]">
        TENTANG KAMI
      </p>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Tentang Kami
      </h2> */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 bg-white">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:mr-12 mb-6 lg:mb-0">
          <img 
            src={foto} 
            alt="Catering" 
            className="w-full lg:w-[490px] h-[250px] lg:h-[370px] rounded-lg object-cover" 
          />
        </div>
        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-2xl font-bold mb-3">Kenapa Dika Lestari?</h1>
          <p className="text-base leading-6">
            Dika Lestari Catering adalah solusi tepat untuk kebutuhan kuliner Anda. Kami menawarkan berbagai pilihan layanan seperti food stall, nasi tradisional, buffet, dan nasi box yang sesuai untuk segala acara, mulai dari pesta pernikahan, rapat kantor, hingga acara keluarga. Dengan bahan berkualitas dan cita rasa autentik, kami berkomitmen untuk memberikan pengalaman kuliner terbaik. Pilihan menu kami yang beragam akan memanjakan lidah Anda dan tamu-tamu Anda. Pilih Dika Lestari Catering untuk layanan profesional, porsi melimpah, dan kepuasan yang terjamin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
