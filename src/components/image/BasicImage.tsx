import React, { FC } from 'react'

type Props = {
  src: string
  alt?: string
  className?: string
}

const BasicImage: FC<Props> = ({ src, alt, className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  )
}

export default BasicImage
