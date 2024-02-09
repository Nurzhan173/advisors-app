import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = ({
  root = null,
  rootMargin = "0px",
  threshold = 1.0,
}: UseIntersectionObserverProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0]?.isIntersecting ?? false);
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [root, rootMargin, threshold]);

  return { targetRef, isIntersecting };
};

export default useIntersectionObserver;
