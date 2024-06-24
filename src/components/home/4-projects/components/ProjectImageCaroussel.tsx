import * as React from 'react'
import { FC } from 'react'
import Slider from 'react-slick'

import BasicImage from '@/components/image/BasicImage'

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
          {images.map((image) => (
            <div key={image} className="outline-none">
              <BasicImage src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
