import { use } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Autoplay]}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Reviews;
