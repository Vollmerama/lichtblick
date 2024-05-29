"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname;
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          className=""
          src="/images/logo-text.svg"
          width={180}
          height={28}
          alt="logo"
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                alt="menu"
                src="/icons/menu.svg"
                width={28}
                height={28}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/images/logo-text.svg"
                  width={152}
                  height={23}
                  alt="logo"
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        key={link.route}
                        className={`sidebar-nav_element group ${
                          isActive
                            ? "bg-purple-500 text-white"
                            : "text-grey-700"
                        }`}
                      >
                        <Link className="sidebar-link" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            className={`${isActive && "brightness-200"}`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <ul className="sidebar-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        key={link.route}
                        className={`sidebar-nav_element group ${
                          isActive
                            ? "bg-purple-500 text-white"
                            : "text-grey-700"
                        }`}
                      >
                        <Link className="sidebar-link" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            className={`${isActive && "brightness-200"}`}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="flex-center cursor-pointer gap-2 p-4">
                    <UserButton afterSignOutUrl="/" showName />
                  </li>
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
