import React from 'react'
import Image from 'next/image'

type PropType = {
  selected: boolean
  imgSrc: string
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide mx-auto'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <picture>
          <img
            width={800}
            height={800}
            className="embla-thumbs__slide__img"
            src={imgSrc}
            alt="Your alt text"
          />
        </picture>
      </button>
    </div>
  )
}
