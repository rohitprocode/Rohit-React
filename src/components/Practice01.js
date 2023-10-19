import React from 'react'

export default function Practice01({Browser,size,bgColor}) {
  return (
    <div>

      <img src="https://image.similarpng.com/very-thumbnail/2020/11/Black-google-icon-design-on-transparent-background-PNG.png" alt="Google.com" />

      <p style={{backgroundColor:bgColor}} >Search Anything on {Browser} DataSize = {size}</p>

    </div>
  )
}
