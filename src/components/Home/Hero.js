import React, { useRef } from "react";
import styled from "styled-components";

import cad from '../../assest/cad.jpg'
import poster from '../../assest/poster.jpg'
import druck from '../../assest/druck.jpg'
import photocopy from '../../assest/photocopy.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const HeroContainer = styled(Swiper)`
  width: 95%;
  height: 300px;
  background-color: aliceblue;
  margin: 10px auto;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;


const Hero = () => {
  return (
    <HeroContainer
      modules={[Navigation, EffectFade, Pagination, Autoplay]}
      // navigation
      effect={'fade'}
      speed={800}
      slidesPerView={1}
      loop
      autoplay={{ delay: 2000 }}
      // autoplay
      pagination={{'clickable': true}}
    >
      <SwiperSlide>
        <HeroImage src={cad} alt="heroTwo" loading="lazy" />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage src={poster} alt="heroTwo" loading="lazy"  />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage src={druck} alt="heroTwo" loading="lazy"  />
      </SwiperSlide>
      <SwiperSlide>
        <HeroImage src={photocopy} alt="heroTwo" loading="lazy"  />
      </SwiperSlide>
    </HeroContainer>
  );
};

export default Hero;
