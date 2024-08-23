import Image from "next/image";
import bgImg from "@/public/halo.png";
import { BackgroundGradientAnimation } from "@/components/ui-libraries/aceternity/bg-gradient-animation";
import Header from "@/components/Header";
import { AppSidebar } from "@/components/Sidebar";
import { ShootingStars } from "@/components/ui-libraries/ui/shooting-stars";
import { StarsBackground } from "@/components/ui-libraries/ui/stars-background";
import Footer from "@/components/Footer";
import { BackgroundBeamsWithCollision } from "@/components/ui-libraries/aceternity/background-beams-with-collision";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <AppSidebar>
      <div className="isolate mx-auto w-full">
        <BackgroundBeamsWithCollision className="flex-col min-h-screen">
          {children}
        </BackgroundBeamsWithCollision>
      </div>
      </AppSidebar>
  );
}
