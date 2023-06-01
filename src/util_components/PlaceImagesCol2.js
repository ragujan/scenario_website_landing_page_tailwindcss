import React from 'react'

function PlaceImagesCol2(props) {
  let array = Array.from(Array(6).keys());
  return (
    array.map((index) => (
      <div key={index} className="flex flex-row justify-center ">
        <img
          src={require(`../resources/col_${props.column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-3xl object-cover object-center object "
        />
      </div>
    ))
  )
}

export default PlaceImagesCol2;
