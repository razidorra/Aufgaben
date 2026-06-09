import { useEffect, useRef } from "react";

export default function usePrevious(value) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  // This hook intentionally exposes the previous ref value for the next render.
  // eslint-disable-next-line react-hooks/refs
  return previousValueRef.current;
}
