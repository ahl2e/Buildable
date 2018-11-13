import React from 'react';

class Carousel extends react.Component {
  render(){
    return(
      <div className="carousel">
        <imageSlide url = { imageUrl} />
      </div>
    );
  }

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: 'url(${url})',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  )
}

}
