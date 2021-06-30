import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselHome() {
  return (
    <>
      <Carousel showArrows={false} autoPlay>
        <div>
          <img
            src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049984/bg-hero-1-1792-x2.png'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049977/bg-hero-5-1792-x2.png'
            alt=''
          />
        </div>
      </Carousel>
    </>
  );
}
