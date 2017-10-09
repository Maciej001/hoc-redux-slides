const Images = ({ data }) => {

  // edge cases

  const imageUrls = data.photos.map(
    image => image.img_src
  );
  return (
    <div className="images">
      {imageUrls.map(imgUrl => (
        <img key={imgUrl} src={imgUrl} className="image"/>
      ))}
    </div>
  );
};
