import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./github-icon";
import AnimatedGradientText from "./ui-libraries/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <header className="relative mx-auto mt-5 flex w-full items-center justify-center px-2 pb-7 sm:px-4">
      <Link href="/" className="absolute flex items-center gap-2 h-full pointer-events-none">
        <Image src="/images/logoUI.png" alt="logo" width={250} height={32} className="" />
      </Link>
    </header>
  );
}
