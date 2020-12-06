import React from "react";
import ImageCard from "./ImageCard";
import './imagelist.css'

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div className="image">
        <ImageCard key={image.id} image={image} />
      </div>
    );
  });
  return <div className='images'>{images}</div>;
};

export default ImageList;
