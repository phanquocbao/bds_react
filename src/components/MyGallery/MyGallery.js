import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


function MyGallery() {
  const images = [
    {
      original: '../Assets/Images/nha-dat.jpg',
      thumbnail: '../Assets/Images/nha-dat.jpg',
      description: 'Description of image 1'
    },
    {
      original: '../Assets/Images/nha-dat.jpg',
      thumbnail: '../Assets/Images/nha-dat.jpg',
      description: 'Description of image 2'
    },
    // add more images here
  ];

  return (
    <ImageGallery items={images} />
  );
}

export default MyGallery;
