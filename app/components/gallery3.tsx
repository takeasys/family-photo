import "photoswipe/dist/photoswipe.css";

import { Gallery } from "react-photoswipe-gallery";
import images from "~/helpers/images";
import GalleryItem from "./GalleryItem";

const Gallery3 = () => {
  return (
    <>
      <Gallery withDownloadButton>
        <div
          style={{
            gridGap: 2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "#333",
            padding: 2,
          }}
        >
          {images.map((img, i) => (
            <GalleryItem key={i} img={img} />
          ))}
        </div>
      </Gallery>
    </>
  );
};

export default Gallery3;
