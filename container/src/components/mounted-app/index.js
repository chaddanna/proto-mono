import React, { useRef, useEffect } from "react";

export function MountedApp({ mountFn }) {
  const ref = useRef(null);

  useEffect(() => {
    mountFn(ref.current);
  });

  return <div ref={ref} />;
}
