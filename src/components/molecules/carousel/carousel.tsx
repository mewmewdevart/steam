import React from 'react';
import Button from '@components/atoms/button/button';

interface CarouselProps {
  imagesCarousel: string;
  logoCarousel: string;
  labelCarousel: string;
}

const Carousel: React.FC<CarouselProps> = ({ imagesCarousel, logoCarousel, labelCarousel }) => {
  return (
    <div className="relative mx-auto">
      <div
        className="w-full h-[500px]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(14, 19, 30, 0.9) 10%, rgba(14, 19, 30, 0.1) 100%), url(${imagesCarousel})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-screen-2xl mx-auto pt-[100px]">
          <img src={logoCarousel} alt="Banner" />
          <p className="w-[500px] text-white text-large font-medium py-[30px]">{labelCarousel}</p>
          <Button label="Buy Now" extraClassNames="text-paragraph-large" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
