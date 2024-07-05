import React, { FC } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

type Props = {
  images: string[]
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const ProjectImageCaroussel: FC<Props> = ({ images }) => {
  return (
    <div className="[&_.slick-arrow]:z-10 [&_.slick-track]:flex [&_.slick-track]:items-center">
      <div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={image} className="outline-none">
              <Image
                src={image}
                alt={`Image number ${index}`}
                width={670}
                height={420}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
