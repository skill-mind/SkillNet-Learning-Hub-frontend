"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
    console.log("Current Path:", pathname); // Debugging purposes
  }, [pathname]);

  return <div>{children}</div>;
}
