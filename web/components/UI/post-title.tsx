interface PostTitleProps {
  children: React.ReactNode;
}

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <div className='mt-4 mb-4 px-2 text-3xl sm:mt-24 md:mb-12 md:text-left md:text-5xl lg:text-6xl'>
      {children}
    </div>
  );
}
