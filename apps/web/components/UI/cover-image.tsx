import Image from 'next/image';
import { BLURDATA } from '../../lib/blurdata';
import { imageBuilder } from '../../lib/sanity';
import { CoverImageProps } from '../../types/interfaces';

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
        placeholder='blur'
        blurDataURL={BLURDATA}
      />
    </div>
  );
}
