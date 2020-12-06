import React, { useEffect, useRef, useState } from 'react'

const ImageCard = (props) => {
  const [span, setSpan] = useState(10);
  const { urls, description } = props.image;
  const iRef = useRef();

  useEffect(() => {

    const spanner = () => {
      setSpan(Math.ceil(iRef.current.clientHeight / 10));
      console.log('useEffect->spanner: loaded, current =', iRef, Date.now());
    }

    console.log('useEffect: set eventListener for', iRef, Date.now())
    iRef.current.addEventListener('load', spanner);
    // () => {
    //   const curSpan = Math.ceil(iRef.current.clientHeight / 10);
    //   console.log("iRef.current.addEventListener ~ span", curSpan)
    //   setSpan( curSpan );
    //   console.log('useEffect->spanner: image loaded.', iRef, 'height=', iRef.current.clientHeight, 'span=', span, Date.now());
    // })
  }, [span])

  return (
  <div className="">
    {span}
    <img
      className="image"
      style={{ gridRowEnd: `span ${span}` }}
      ref={iRef}
      src={urls.regular}
      alt={description}
      />
      </div>
  )
}

export default ImageCard;