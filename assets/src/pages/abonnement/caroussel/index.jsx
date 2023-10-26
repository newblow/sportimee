import React from "react";
import Carousel from "better-react-carousel";

const Caroussel = () => {
  return (
    <>
      <div className="h-full w-full">
        <Carousel cols={4} rows={1} gap={10}  loop={true} autoplay={3000}>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=2" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=4" />
          </Carousel.Item>
          <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=5" />
          </Carousel.Item>
          <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
          </Carousel.Item>
          <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
          </Carousel.Item>
          <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
          </Carousel.Item>
          
          {/* ... */}
        </Carousel>
      </div>
    </>
  );
};
export default Caroussel;
