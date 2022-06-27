/* eslint-disable @next/next/no-img-element */
/** Returns a <picture> element with responsive images
 *
 * Used when we have images with variable aspect ratio
 * where we can not use Next's Image component which requires
 * us to set both width and height.
 *
 * We use the default breakpoint from TailwindCSS
 * and create Sanity image URLs for each breakpoint.
 */
import { imageBuilder } from './sanity';

// Breakpoints from TailwindCSS - use the same for responsive images
const IMG_SIZE_SM = 640;
const IMG_SIZE_MD = 768;
const IMG_SIZE_LG = 1024;
const IMG_SIZE_XL = 1280;
const IMG_SIZE_2XL = 1536;

interface ResponsiveImageProps {
  imageData: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  className?: string;
}

const ResponsiveImage = ({ imageData, alt, ...rest }: ResponsiveImageProps) => {
  // Make URLs for the different image sizes we need in the picture tag
  // The images are fetched from Sanity
  const imageUrlSM =
    imageBuilder(imageData).width(IMG_SIZE_SM).format('webp').url() || '#';
  const imageUrlMD =
    imageBuilder(imageData).width(IMG_SIZE_MD).format('webp').url() || '#';
  const imageUrlLG =
    imageBuilder(imageData).width(IMG_SIZE_LG).format('webp').url() || '#';
  const imageUrlXL =
    imageBuilder(imageData).width(IMG_SIZE_XL).format('webp').url() || '#';
  const imageUrl2XL =
    imageBuilder(imageData).width(IMG_SIZE_2XL).format('webp').url() || '#';
  const fallBackImage =
    imageBuilder(imageData).width(IMG_SIZE_MD).format('jpg').url() || '#';

  return (
    <div>
      <picture>
        <source
          media='(min-width: 1536px)'
          type='image/webp'
          srcSet={imageUrl2XL}
        />
        <source
          media='(min-width: 1280px)'
          type='image/webp'
          srcSet={imageUrlXL}
        />
        <source
          media='(min-width: 1024px)'
          type='image/webp'
          srcSet={imageUrlLG}
        />
        <source
          media='(min-width: 768px)'
          type='image/webp'
          srcSet={imageUrlMD}
        />
        <source type='image/webp' srcSet={imageUrlSM} />
        <img
          {...rest} // make sure we get passed in things like f.ex. Tailwind classes etc.
          src={fallBackImage}
          alt={alt}
        />
      </picture>
    </div>
  );
};

export default ResponsiveImage;
