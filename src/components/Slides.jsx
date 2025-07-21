import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../assets/styles/components/SliderSection.module.css";

const SliderSection = ({ title, items, renderItem, slidesPerViewConfig }) => {
  return (
    <div className={styles.sliderContainer}>
      <h1>{title}</h1>
      <div className={styles.slides}>
        <Swiper
          spaceBetween={30}
          loop={true}
          className={styles.swipers}
          navigation
          modules={[Navigation]}
          breakpoints={slidesPerViewConfig}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              {renderItem(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSection;
