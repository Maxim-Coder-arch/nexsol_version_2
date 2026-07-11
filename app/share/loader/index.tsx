"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import IncludesLoaderComponent from "./ui/includes";

const LoaderComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, [isLoading, pathname]);

  return <IncludesLoaderComponent isLoading={isLoading} />
};

export default LoaderComponent;