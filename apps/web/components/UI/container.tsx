import { ContainerProps } from '../../types/interfaces';

export default function Container({
  children,
  noPadding = false,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`mx-auto overflow-hidden lg:container ${
        noPadding ? '' : 'px-2 md:px-5'
      }`}
      {...rest}
    >
      {children}
    </div>
  );
}
