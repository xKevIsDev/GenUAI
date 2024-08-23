"use client";
import React, { useState, ReactNode } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui-libraries/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BookOpen, BugIcon, History, User } from "lucide-react";
import AppLogo from "./logo";
import { useAuth } from "@/context/AuthProvider";

interface SidebarDemoProps {
  children: ReactNode;
}

export function AppSidebar({ children }: SidebarDemoProps) {
  const { user } = useAuth()
  const links = [
    {
      label: "New Prompt",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "History",
      href: "#",
      icon: (
        <History className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Report a Bug",
      href: "#",
      icon: (
        <BugIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Documentation",
      href: "#",
      icon: (
        <BookOpen className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-zinc-800 w-screen flex-1 mx-auto overflow-hidden",
        "h-screen" // Adjusted to h-screen for full height
      )}
    >
      {user ? (
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: user?.email || "Username",
                href: "/profile",
                icon: (
                  <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      ) : null}
        {children}
    </div>
  );
}

export const Logo = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <AppLogo/>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          GenUAI
        </motion.span>
      </Link>
    );
  };
  export const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <AppLogo/>
      </Link>
    );
  };