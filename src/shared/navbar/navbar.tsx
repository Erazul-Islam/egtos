"use client";

import Link from "next/link";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Request a Demo", href: "/request-a-demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky max-w-[1440px] mx-auto md:mt-4 px-3 md:px-5 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo - always visible */}
        <div className="flex items-center md:flex-1 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={"/logo.svg"} width={150} height={44} alt="logo" />
          </Link>
        </div>

        {/* Navigation menu - hidden on mobile */}
        <div className="hidden md:block flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-[#3D3D3D] text-sm font-normal ${
                        pathname === route.href ? "text-[#00A099]" : ""
                      }`}
                    >
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Buttons - hidden on mobile, visible on desktop */}
        <div className="hidden md:flex items-center justify-end space-x-2 md:flex-1">
          <button className="bg-[#00A099] text-white cursor-pointer rounded-full px-5 shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-4 font-medium text-[16px]">
              <Link href="/get-started">Get Started</Link>
          </button>
          <button className="text-[#00A099] font-medium   cursor-pointer rounded-full px-5 shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-4 bg-[#F7F7F7]">
              <Link href="/sign-in">Sign In</Link>
          </button>
        </div>

        {/* Mobile menu button - only visible on small screens */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <AlignJustify className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-1/2 px-3 ">
              <nav className="flex flex-col gap-6 pt-10">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-muted-foreground hover:text-foreground text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 pt-4">
                  <button className="text-[#00A099]">
                    <Link
                      href="/sign-in"
                      
                    >
                      Sign In
                    </Link>
                  </button>
                  <Button asChild className="w-full">
                    <Link href="#getstarted" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
