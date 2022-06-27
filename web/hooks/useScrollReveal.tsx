/**
 * useScrollReveal hook by Denny Hong
 * https://dennyh.me/snippets/useScrollReveal
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useScrollReveal = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({
    nullTargetWarn: false,
  });
  const router = useRouter();

  // Batch stagger animate any element with data-gsap="reveal-bottom"
  useEffect(() => {
    gsap.set('[data-gsap="reveal-bottom"]', { y: 75, opacity: 0 });

    ScrollTrigger.batch('[data-gsap="reveal-bottom"]', {
      onEnter(batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.5,
          ease: 'power3.out',
        });
      },
      onEnterBack(batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.5,
          ease: 'power3.out',
        });
      },
      /*  onLeaveBack(batch) {
        gsap.to(batch, {
          opacity: 0,
          y: 75,
          stagger: 0.15,
          duration: 1.5,
          ease: 'power3.out',
        });
      }, */
    });

    // Slide in from left or right - but only on large screens
    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function () {
        gsap.set('[data-gsap="reveal-right"]', { x: 150, opacity: 0 });
        gsap.set('[data-gsap="reveal-left"]', { x: -150, opacity: 0 });

        ScrollTrigger.batch('[data-gsap="reveal-left"]', {
          start: '-20px bottom',

          onEnter(batch) {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 1.5,
              ease: 'power3.out',
            });
          },
          onEnterBack(batch) {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 1.5,
              ease: 'power3.out',
            });
          },
          /*  onLeaveBack(batch) {
            gsap.to(batch, {
              opacity: 0,
              x: -150,
              stagger: 0.15,
              duration: 0.5,
              ease: 'power3.out',
            });
          }, */
        });

        ScrollTrigger.batch('[data-gsap="reveal-right"]', {
          start: '-20px bottom',
          onEnter(batch) {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 0.5,
              ease: 'power3.out',
            });
          },
          onEnterBack(batch) {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 0.5,
              ease: 'power3.out',
            });
          },
          /*  onLeaveBack(batch) {
            gsap.to(batch, {
              opacity: 0,
              x: 150,
              stagger: 0.15,
              duration: 0.5,
              ease: 'power3.out',
            });
          }, */
        });
      },
    });
  }, [router.asPath]);

  return null;
};

export default useScrollReveal;
