import { useEffect, useRef } from 'react';

function useBottomDetection(callback) {
  const divRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (divRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = divRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          callback();
        }
      }
    }

    const currentDiv = divRef.current;
    if (currentDiv) {
      currentDiv.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentDiv) {
        currentDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, [callback]);

  return divRef;
}

export default useBottomDetection;
