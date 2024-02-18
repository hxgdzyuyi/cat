import { useRef, useEffect } from "react";
import clsx from "clsx";

export default klass => {
  const prevClassNameRef = useRef(document.body.className);

  useEffect(() => {
    document.body.className = clsx(klass, prevClassNameRef.current);

    return () => {
      document.body.className = prevClassNameRef.current;
    };
  }, []);
};
