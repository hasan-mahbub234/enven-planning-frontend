"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import {
  Menu,
  HelpCircle,
  FileText,
  Info,
  ChevronDown,
  CalendarHeart,
  Flower2,
  Users,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { ContactModal } from "./contact-modal";

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const services = [
    {
      href: "/full-wedding-planning",
      label: "Full Wedding Planning",
      icon: CalendarHeart,
      description: "End-to-end planning from concept to celebration",
    },
    {
      href: "/wedding-design-decor",
      label: "Design & Décor",
      icon: Flower2,
      description: "Elegant styling tailored to your love story",
    },
    {
      href: "/event-coordination",
      label: "Event Coordination",
      icon: Users,
      description: "Seamless execution on your special day",
    },
  ];

  const links = [
    { href: "#pricing", label: "Packages", icon: FileText },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "#gallery", label: "Gallery", icon: FileText },
    { href: "/about", label: "About Us", icon: Info },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/white.png"
                alt="Wedding Planner logo"
                width={20}
                height={20}
                className="h-10 w-40"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="bg-transparent text-white/90 hover:text-lime-300 data-[state=open]:text-lime-300
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent"
                    >
                      Services
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-2 p-3 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-lg">
                        {services.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-white/5 hover:ring-1 hover:ring-lime-300/60
                                         hover:shadow-[0_0_20px_rgba(132,204,22,0.15)]"
                              >
                                <service.icon className="h-5 w-5 text-lime-300 mt-0.5 shrink-0" />
                                <div>
                                  <div className="text-sm font-medium text-white group-hover:text-lime-300">
                                    {service.label}
                                  </div>
                                  <p className="text-xs text-gray-400 mt-0.5">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-lime-300 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Button
                variant="uiverseGold"
                onClick={() => setIsContactOpen(true)}
              >
                Contact Now
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
                >
                  {/* Brand Header */}
                  <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                    <Image
                      src="/icons/skitbit-white.svg"
                      alt="Wedding Planner logo"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span className="font-semibold tracking-wide text-white text-lg">
                      Wedding Planner
                    </span>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                    <Collapsible
                      open={servicesOpen}
                      onOpenChange={setServicesOpen}
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <CalendarHeart className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">Services</span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 text-gray-400 transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="flex flex-col bg-gray-900/50 border-l-2 border-lime-300/30 ml-4">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                            >
                              <service.icon className="h-4 w-4 text-lime-300/70" />
                              <span className="text-sm">{service.label}</span>
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                      >
                        <l.icon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{l.label}</span>
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto border-t border-gray-800 p-4">
                    <Button
                      variant="uiverseGold"
                      onClick={() => setIsContactOpen(true)}
                    >
                      Contact Now
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* ContactModal component */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
