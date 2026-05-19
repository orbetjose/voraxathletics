import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="relative">
        <video className="absolute h-screen w-full object-cover" src={`${domain}wp-content/uploads/2026/05/Video_Vorax.mp4`} autoPlay loop muted></video>

        <div className="h-screen w-full font-greyhound-bold text-white">
          <h1 className="hidden">Voraxathletics</h1>
          <div className="flex flex-col md:items-start items-center gap-6 absolute md:bottom-15 md:right-40 bottom-10 right-1/2 translate-x-1/2 md:translate-x-0 3xl:bottom-40 3xl:right-60">
            <a
              href="#"
              className="uppercase text-primary-gray px-5 py-1 bg-white rounded-full w-fit transition-colors duration-300 hover:bg-primary-gray hover:text-white">
              Buy now
            </a>
            <div className="flex items-center gap-2 px-2 md:px-4 py-1 bg-white text-secondary-gray rounded-full min-w-55 hover:bg-primary-gray hover:text-white transition-colors duration-300">
              <img
                src={`${domain}wp-content/uploads/2026/05/ico-wsp.png`}
                alt="Icono de whatsapp"
                className="h-8"
              />
              <a
                href="https://api.whatsapp.com/send/?phone=%2B52312556595&text&type=phone_number&app_absent=0"
                className="">
                (+52) 312 556 595
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[60vh] md:h-[90vh] 3xl:h-[80vh]">
        <img
          className="absolute h-[60vh] md:h-[90vh] 3xl:h-[80vh] w-full object-cover object-top 3xl:object-center"
          src={`${domain}wp-content/uploads/2026/05/presentations.webp`}
          alt="Presentaciones de voraxathletics"
        />
        <h2 className="uppercase text-white font-greyhound-bold text-center z-1 relative pt-8 text-xl md:text-3xl">
          Pre- Order here - New Colors
        </h2>
      </section>
      <section className="relative h-full md:h-[90vh] 3xl:h-[75vh] overflow-hidden">
        <img
          className="absolute h-full md:h-[90vh] 3xl:h-[75vh] w-full object-cover object-top"
          src={`${domain}wp-content/uploads/2026/05/bg-green.webp`}
          alt="Fondo verde voraxathletics"
        />
        <div className="max-w-4xl 3xl:max-w-6xl mx-auto h-full flex flex-col md:gap-0 gap-12 md:flex-row md:justify-between relative z-1 items-center px-4 mx:px-0">
          <div className="md:w-2/5 3xl:w-1/2 md:pt-0 pt-8">
            <img
              src={`${domain}wp-content/uploads/2026/05/logo-small-white.webp`}
              alt="Voraxathletics logo"
              className="h-12 md:h-20 mb-4 mx-auto md:mx-0 "
              data-aos="fade"
            />
            <p
              className="uppercase md:text-2xl 2xl:text-3xl text-third-gray font-greyhound-bold text-lg"
              data-aos="fade">
              Your favorite drink, always at the perfect temperature.
            </p>
            <p
              className="text-white pb-4 font-inter-regular"
              data-aos="fade">
              32oz stainless steel water bottle designed to keep up with your
            </p>
            <a
              href="#"
              className="text-primary-green px-4 py-1 rounded-full bg-white font-greyhound-bold uppercase text-sm hover:bg-primary-green hover:text-white transition-colors duration-300"
              data-aos="fade">
              Get Yours Now
            </a>
          </div>
          <div className="md:w-2/5 flex justify-center items-end relative pb-8 md:pb-0">
            <img
              src={`${domain}wp-content/uploads/2026/05/botella-green.webp`}
              alt="Voraxathletics bottle verde"
              className="h-90 md:h-120 -mb-20 md:-mb-40"
            />
            <img
              src={`${domain}wp-content/uploads/2026/05/botella-black.webp`}
              alt="Voraxathletics bottle negra"
              className="h-60 md:h-80 md:-mb-13"
            />
          </div>
        </div>
      </section>
      <section className="relative md:h-160 py-14 md:py-0 overflow-hidden">
        <img
          className="absolute left-1/2  md:h-160 md:left-10 3xl:left-60 hidden md:block"
          src={`${domain}wp-content/uploads/2026/05/logo-vorax-vertical.webp`}
          alt="Logo vorax vertical"
        />
        <div className="max-w-4xl 3xl:max-w-6xl mx-auto px-4 md:px-0 flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center justify-between h-full">
          <div className="md:w-2/5 h-full flex justify-between">
            <img
              className="h-100 md:hidden"
              src={`${domain}wp-content/uploads/2026/05/logo-vorax-vertical.webp`}
              alt="Logo vorax vertical"
            />
            <img
              className="md:h-full h-100 object-cover"
              src={`${domain}wp-content/uploads/2026/05/women-tomando-botella-vorax.webp`}
              alt="Mujer tomando botella Voraxathletics"
            />
          </div>
          <div className="md:w-2/5 3xl:w-1/2 flex flex-col gap-10">
            <h3
              className="text-secondary-green uppercase font-greyhound-bold text-3xl md:text-3xl"
              data-aos="fade">
              Benefits
            </h3>
            <div
              className="text-secondary-black font-inter-regular"
              data-aos="fade-left">
              <p className="font-inter-bold ">Keeps drinks cold & hot for hours</p>
              <p className="text-sm 3xl:text-basecd">
                Built with double-wall vacuum insulation technology to maintain your beverage temperature all day long.
              </p>
            </div>
            <div
              className="text-secondary-black font-inter-regular"
              data-aos="fade-left">
              <p className="font-inter-bold ">Large 32oz capacity</p>
              <p className="text-sm 3xl:text-basecd">
                Perfect for the gym, office, travel, work or everyday hydration without constant refills.
              </p>
            </div>
            <div
              className="text-secondary-black font-inter-regular"
              data-aos="fade-left">
              <p className="font-inter-bold ">Premium 304 stainless steel</p>
              <p className="text-sm 3xl:text-basecd">
                Made with high-quality, durable and BPA-free materials for a safer drinking experience.
              </p>
            </div>
            <div
              className="text-secondary-black font-inter-regular"
              data-aos="fade-left">
              <p className="font-inter-bold ">Leak-proof lid</p>
              <p className="text-sm 3xl:text-basecd">
                Designed to move with you confidently thanks to its secure leak-proof cap.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[70vh] md:h-[95vh] 3xl:h-[80vh] overflow-hidden md:block hidden">
        <img
          src={`${domain}wp-content/uploads/2026/05/fondo-botellas-cruzadas.webp`}
          alt="Fondo voraxathletics botellas cruzadas"
          className="absolute h-[70vh] md:h-[95vh] 3xl:h-[80vh] w-full object-cover object-bottom"
        />
        <div className="relative h-full w-auto">
          <img
            src={`${domain}wp-content/uploads/2026/05/botellas-vorax-cruzadas-lineas.webp`}
            alt="Voraxathletics botellas cruzadas"
            className="absolute max-h-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:max-h-100 3xl:max-h-120 "
          />
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase left-[1%] top-[40%] md:left-[16%] md:top-[35%] 3xl:left-[24%] text-xs md:text-sm">
            Leak-proof lid
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase left-[1%] top-[46%] md:left-[19%] md:top-[44%] 3xl:left-[26%] text-xs md:text-sm">
            Capacity: <br /> 32oz
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase left-[1%] top-[52%] md:left-[21%] md:top-[56%] 3xl:left-[28%] text-xs md:text-sm">
            Keeps drinks <br /> cold & hot
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase md:left-[27%] md:top-[73%] 3xl:left-[32%] text-xs md:text-sm">
            Libre de BPA
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase md:right-[18%] md:top-[73%] 3xl:right-[26%] text-xs md:text-sm">
            Material: <br /> 304 Stainless Steel
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase md:right-[13%] md:top-[58%] 3xl:right-[22%] text-xs md:text-sm">
            Powder-coated <br /> finish
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase md:right-[15%] 3xl:right-[22%] 3xl:top-[42%] md:top-[41%] text-xs md:text-sm">
            BPA-Free
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase md:right-[15%] md:top-[18%] 3xl:right-[23%] 3xl:top-[19%] text-xs md:text-sm">
            It has a magnetic ring <br />
            that holds your phone.
          </span>
          <span className="absolute font-greyhound-bold text-sixth-gray uppercase md:right-[45.5%] md:top-[9%] 3xl:top-[11%] text-xs md:text-sm">
            Double-wall <br />
            vacuum insulation
          </span>
        </div>

        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-greyhound-bold text-secondary-gray uppercase text-xs md:text-sm w-full text-center">
          Not dishwasher safe / Not microwave safe
        </span>
      </section>
      <section className="relative h-[50vh] md:h-[95vh] 3xl:h-[80vh] overflow-hidden">
        <img
          src={`${domain}wp-content/uploads/2026/05/banner-cold-hot-2.webp`}
          alt="Voraxathletics Cold & Hot"
          className="absolute h-[50vh] md:h-[95vh] 3xl:h-[80vh] w-full object-cover object-center"
        />
        <div className="max-w-4xl 3xl:max-w-6xl mx-auto flex items-center justify-evenly gap-24 md:gap-0 md:justify-between relative h-full">
          <div
            className="flex flex-col text-center text-white font-inter-bold uppercase"
            data-aos="fade">
            <img
              src={`${domain}wp-content/uploads/2026/05/cold-ico.png`}
              alt="Voraxathletics Cold icon"
              className="h-20 mx-auto"
            />
            <span className="text-3xl md:text-6xl">Cold</span>
            <span className="md:text-2xl">by yours</span>
          </div>
          <div
            className="flex flex-col text-center text-white font-inter-bold uppercase"
            data-aos="fade">
            <img
              src={`${domain}wp-content/uploads/2026/05/hot-ico.png`}
              alt="Voraxathletics Hot icon"
              className="h-20 mx-auto"
            />
            <span className="text-3xl md:text-6xl">Hot</span>
            <span className="md:text-2xl">for longer</span>
          </div>
        </div>
      </section>
      <section className="relative h-90 md:h-160 overflow-hidden">
        <img
          className="absolute h-90 md:h-160 object-cover 3xl:left-0 -left-14 md:left-auto"
          src={`${domain}wp-content/uploads/2026/05/vorax-bottle-black-style.webp`}
          alt="Botella Voraxathletics negra estilo"
        />
        <div className="max-w-4xl 3xl:max-w-4xl mx-auto flex items-center justify-end relative h-full px-4 md:px-0">
          <div className="w-3/5 text-secondary-green space-y-6">
            <h3
              className="text-right font-greyhound-bold uppercase md:text-3xl"
              data-aos="fade-left">
              Quality, style and functionality in one bottle
            </h3>
            <p
              className="text-fourth-gray font-inter-regular text-right"
              data-aos="fade-left">
              This is more than just a water bottle — it’s the perfect everyday companion for keeping your drinks
              exactly how you like them.
            </p>
            <p
              className="italic text-right font-inter-semibold"
              data-aos="fade">
              Durable on the outside, perfect on the inside.
            </p>
          </div>
        </div>
      </section>
      <section className="relative h-120 md:h-160 overflow-hidden">
        <img
          className="absolute h-100 md:h-160 object-cover md:right-0 z-1 3xl:right-0 -right-20 hidden md:block"
          src={`${domain}wp-content/uploads/2026/05/vorax-bottle-black-moment.webp`}
          alt="Botella Voraxathletics negra momento"
        />
        <img
          className="absolute h-120 md:h-160 md:w-[calc(100%-320px)] 3xl:w-full object-cover left-0 "
          src={`${domain}wp-content/uploads/2026/05/vorax-bg-green-style.webp`}
          alt="Fondo verde"
        />
        <div className="max-w-4xl 3xl:max-w-6xl mx-auto flex items-center justify-start relative h-full px-4 md:px-0">
          <div className="w-4/5 space-y-6">
            <h3
              className="text-left font-greyhound-bold uppercase md:text-2xl text-primary-cream"
              data-aos="fade-right">
              Perfect for every <br />
              <span className="md:text-6xl">moment</span>
            </h3>
            <p
              className="text-third-gray font-inter-regular text-left md:w-4/5"
              data-aos="fade-right">
              Whether you're at the gym, office, school, traveling or outdoors, this bottle is designed to match your
              everyday lifestyle. it’s the perfect everyday companion for keeping your drinks exactly how you like them.
            </p>
            <p
              className="italic text-left font-inter-semibold text-primary-cream"
              data-aos="fade">
              Upgrade your hydration game.
            </p>
            <p
              className="font-inter-regular text-left text-primary-cream"
              data-aos="fade">
              Take your favorite drink everywhere in style and comfort.
            </p>
            <a
              href="#"
              className="text-primary-gray px-4 py-1 rounded-full bg-white font-greyhound-bold uppercase text-sm hover:bg-primary-gray hover:text-white transition-colors duration-300"
              data-aos="fade">
              Shop now
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto ">
          <h3 className="text-center uppercase font-greyhound-bold text-third-gray md:text-2xl">
            It connects to <span className="text-third-green">your style</span>
          </h3>
          <p className="font-inter-regular text-fifth-gray text-center">Designed to go with you everywhere.</p>
          <div className="pt-12 flex flex-col md:flex-row items-center md:justify-evenly gap-8">
            <div>
              <img
                src={`${domain}wp-content/uploads/2026/05/imagen-trainning.webp`}
                alt="Hombre entrenando con botella Voraxathletics"
                className="h-90 md:h-80 object-cover shadow-image"
                data-aos="fade"
              />
              <p className="text-center text-fourth-green mt-2 font-greyhound-bold uppercase pt-3">Trainning</p>
            </div>
            <div>
              <img
                src={`${domain}wp-content/uploads/2026/05/imagen-yoga.webp`}
                alt="Mujer practicando yoga con botella Voraxathletics"
                className="h-90 md:h-80 object-cover shadow-image"
                data-aos="fade"
                data-aos-delay="300"
              />
              <p className="text-center text-fourth-green mt-2 font-greyhound-bold uppercase pt-3">Yoga</p>
            </div>
            <div>
              <img
                src={`${domain}wp-content/uploads/2026/05/imagen-pilates.webp`}
                alt="Mujer practicando pilates con botella Voraxathletics"
                className="h-90 md:h-80 object-cover shadow-image"
                data-aos="fade"
                data-aos-delay="600"
              />
              <p className="text-center text-fourth-green mt-2 font-greyhound-bold uppercase pt-3">Pilates</p>
            </div>
            <div>
              <img
                src={`${domain}wp-content/uploads/2026/05/imagen-sports.webp`}
                alt="Mujer practicando deportes con botella Voraxathletics"
                className="h-90 md:h-80 object-cover shadow-image"
                data-aos="fade"
                data-aos-delay="900"
              />
              <p className="text-center text-fourth-green mt-2 font-greyhound-bold uppercase pt-3">Sports</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
