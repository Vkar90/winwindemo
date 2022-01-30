import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
// import { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

// const PARTNER_LOGOS = [
//   'logosite.png',
//   'venturegarden-logo-green.png'
// ];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>Part of</Title>
      <ImageContainer>
      <NextImage src={'/partners/logosite.png'} alt="orange grove logo" width={300} height={60} />
      <NextImage src={'/partners/venturegarden-logo-green.png'} alt="venture garden logo" width={200} height={100} />
      </ImageContainer>
       {/* <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={false}
        // autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        // speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={900} height={350} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </PartnersWrapper>
  );
}

// function normalizePartnerLogoName(logo: string) {
//   return logo.replace('.svg', '');
// }

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  width: 40rem;
  padding-top: 3rem;
  margin: auto;
  display: flex;
  gap: 3rem;
`;
