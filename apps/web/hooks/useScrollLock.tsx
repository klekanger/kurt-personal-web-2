import { useLayoutEffect } from 'react';

const useScrollLock = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;

    document.body.setAttribute(
      'style',
      `overflow: hidden; position:fixed; padding-right:${scrollBarWidth}px; right:0; left:0;`
    );

    return () => {
      document.body.setAttribute(
        'style',
        `overflow: ${originalStyle}; position: static`
      );
    };
  }, []);
};

export default useScrollLock;
