import ResponsiveImage from '../../lib/responsive-custom-image';

interface FigureProps {
  value: {
    alt?: string;
    asset: {
      _ref: string;
      _type: string;
    };
    _key: string;
    _type: string;
  };
}

const Figure = (props: FigureProps) => {
  return (
    <div className='my-4 sm:my-8'>
      <ResponsiveImage
        imageData={props?.value?.asset}
        alt={props?.value?.alt}
        className='rounded-md shadow-lg'
      />
    </div>
  );
};

export default Figure;
