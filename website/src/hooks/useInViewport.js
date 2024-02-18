import { useEffect, useRef, useState } from "react";

const useInViewport = (viewportElement, target) => {
  const [inViewport, setInViewport] = useState(false);

  const observer = useRef();
  const intersected = useRef(false);

  function startObserver() {
    if (target.current && observer.current) {
      observer.current.observe(target.current);
    }
  }

  function stopObserver() {
    if (target.current && observer.current) {
      observer.current.unobserve(target.current);
      observer.current.disconnect();
      observer.current = null;
    }
  }

  function handleIntersection(entries) {
    const isInViewport = entries.some(
      ({ isIntersecting, intersectionRatio }) => {
        return typeof isIntersecting !== "undefined"
          ? isIntersecting
          : intersectionRatio > 0;
      }
    );

    // enter
    if (!intersected.current && isInViewport) {
      intersected.current = true;
      if (target.current) {
        setInViewport(isInViewport);
      }
      return;
    }

    // leave
    if (intersected.current && !isInViewport) {
      intersected.current = false;
      if (target.current) {
        setInViewport(isInViewport);
      }
    }
  }

  function initIntersectionObserver() {
    if (!observer.current) {
      observer.current = new IntersectionObserver(handleIntersection, {
        root: viewportElement.current,
        rootMargin: "0px",
        threshold: 0.8
      });
    }
  }

  useEffect(() => {
    if (!viewportElement.current) {
      return;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    initIntersectionObserver();
    startObserver();

    return () => {
      stopObserver();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, viewportElement]);

  return {
    inViewport
  };
};

export default useInViewport;
