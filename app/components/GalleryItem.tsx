import { useImageSize } from "react-image-size";
import { Item } from "react-photoswipe-gallery";
import { useMediaQuery } from "react-responsive";

interface ImageProps {
  src: string;
  width: number;
  height: number;
}

const GalleryItem = (props: { img: ImageProps }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const thumbnailDimensions = isDesktopOrLaptop
    ? "calc(100vw / 6 - 3px)"
    : "calc(100vw / 3 - 3px)";
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "cover",
    width: thumbnailDimensions,
    height: thumbnailDimensions,
  };

  const [dimensions, { loading, error }] = useImageSize(
    props.img
      ? props.img.src!
      : "https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
  );

  if (loading) {
    return <div style={smallItemStyles}>Loading...</div>;
  }

  if (error) {
    return <div style={smallItemStyles}>Error: {error}</div>;
  }

  const { img } = props;
  return (
    <>
      {props.img && (
        <Item
          original={props.img.src}
          thumbnail={props.img.src}
          width={dimensions?.width}
          height={dimensions?.height}
          caption={img.src}
        >
          {({ ref, open }) => (
            <input
              type="image"
              alt=""
              ref={ref}
              src={img.src}
              onClick={open}
              style={smallItemStyles}
            />
          )}
        </Item>
      )}
    </>
  );
};

export default GalleryItem;
