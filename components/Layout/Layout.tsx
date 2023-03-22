import DesktopNav from "./DestopNav";
import { ReactNode } from "react";
import useMediaQuery from "@/hooks/useMediaQueryhooks";
import MobileNav from "./MobileNavs";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isDesktop = useMediaQuery("(min-width: 800px)");
  return (
    <div>
      {!isDesktop ? <MobileNav /> : <DesktopNav />}
      {children}
    </div>
  );
}

