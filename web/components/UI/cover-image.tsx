import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity';

interface CoverImageProps {
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
    caption: string;
    _type: string;
  };
}

export default function CoverImage({ mainImage }: CoverImageProps) {
  const imageToDisplay =
    imageBuilder(mainImage?.asset).width(3200).height(1800).url() || '#';

  return (
    <div className='relative aspect-video rounded-md shadow-lg md:mb-8 lg:mb-12'>
      <Image
        priority
        className='rounded-md  '
        layout='fill'
        src={imageToDisplay}
        alt={mainImage?.alt}
      />
    </div>
  );
}
