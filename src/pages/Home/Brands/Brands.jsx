import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import amazonVector from "../../../assets/brands/amazon_vector.png";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";

const Brands = () => {
  const brandsLogos = [
    amazonVector,
    amazon,
    casio,
    moonstar,
    randstad,
    star,
    starPeople,
  ];
  return (
    <Swiper
      slidesPerView={4}
      loop={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      centeredSlides={true}
      spaceBetween={30}
      modules={[Autoplay]}
      grabCursor={true}
    >
      {brandsLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="BrandsLogo" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
