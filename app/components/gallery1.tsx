import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import images from "~/helpers/images";

const Gallery1 = () => {
  return (
    <>
      <ImageGallery items={images} />
    </>
  );
};

export default Gallery1;
