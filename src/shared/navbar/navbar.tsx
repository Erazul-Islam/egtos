// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Mobile menu button - only visible on small screens */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <AlignJustify className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <Image src={'/logo.svg'} width={150} height={40} alt="egtos" />
                </Link>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - centered on mobile */}
        <div className="flex items-center md:flex-1 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>YourLogo</span>
          </Link>
        </div>

        {/* Navigation menu - hidden on mobile */}
        <div className="hidden md:block flex-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Buttons - right side */}
        <div className="flex items-center justify-end space-x-2 md:flex-1">
          <Button variant="ghost" asChild>
            <Link href="#signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="#getstarted">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}