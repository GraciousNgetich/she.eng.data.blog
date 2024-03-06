"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { defaultAuthor } from "@/lib/metadata";
import { debounce } from "@/lib/utils";
import { CommandDialogComponent } from "@/components/command-dialog";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";
import { WorkAvailabilityBadge } from "@/components/work-availability-badge";

const SCROLL_OFFSET = 200;

export function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(
    () =>
      debounce(() => {
        const currentScrollPos = window.scrollY;

        if ((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10) {
          setVisible(true);
        } else {
          setVisible(false);
        }

        setPrevScrollPos(currentScrollPos);
      }, 100),
    [prevScrollPos, setPrevScrollPos, setVisible]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <header className="fixed bottom-0 left-0 z-20 mx-auto mb-4 w-full px-4 delay-500 animate-in animate-out sm:static sm:z-auto sm:mb-0 sm:mt-4 sm:h-16 sm:max-w-6xl sm:transition-none sm:delay-0 lg:px-0 ">
        {defaultAuthor.availableForWork && (
          <div className="mx-auto mb-2 text-center sm:hidden">
            <Link href="/about" aria-label="Go to About page">
              <WorkAvailabilityBadge />
            </Link>
          </div>
        )}
        <div className="flex items-center gap-2 rounded-full border-b border-primary/40 bg-white/30 bg-clip-padding px-3 py-2 shadow-md backdrop-blur-md sm:container dark:bg-black/30 dark:text-white sm:justify-between sm:rounded-lg sm:px-3">
          <div className="container mx-auto flex max-w-6xl">
            <div className="flex items-center justify-start">
              <div className="group aspect-square h-auto w-10 overflow-hidden rounded-full border border-black">
                <Link href="/" aria-label="Go to Home">
                  <Image
                    className="duration-300 group-hover:scale-110"
                    width={40}
                    height={40}
                    src="/avatar.png"
                    alt={defaultAuthor.name}
                  />
                </Link>
              </div>
              {defaultAuthor.availableForWork && (
                <Link href="/about" aria-label="Go to About page" className="ml-2 hidden sm:block">
                  <WorkAvailabilityBadge />
                </Link>
              )}
            </div>
            <div className="order-3 sm:order-2 sm:ml-auto">
              <nav className="ml-auto hidden space-x-6 text-sm font-medium sm:block sm:w-full">
                <Navbar />
              </nav>
              <nav className="sm:hidden">
                <MobileNav />
              </nav>
            </div>
            <div className="order-2 flex w-full items-center gap-2 sm:order-3 sm:w-fit">
              <CommandDialogComponent />
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
