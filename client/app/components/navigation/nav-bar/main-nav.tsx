import React from "react";
import { Link, NavLink, useMatch, useMatches } from "@remix-run/react";
import { Menu, UserCircle2, X } from "lucide-react";
import logo from "~/assets/logo.png";
import icon from "~/assets/icon.png";
import { cn } from "~/libs/shadcn";
import { RiMenuFoldLine } from "react-icons/ri";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { Button } from "~/components/ui/button";
import { SheetTrigger } from "~/components/ui/sheet";

type MainNavProps = {
  menuItems?: { label: string; href: string }[];
  isOpen: boolean;
  authApp: boolean;
  handleNavToggle: () => void;
};

type ItemProps = {
  label: string;
  href: string;
};

export function MainNav({
  isOpen,
  menuItems,
  authApp,
  handleNavToggle,
}: MainNavProps) {
  const matches = useMatches();
  const dashboard = matches.some((match) =>
    match.id.includes("dashboard") ? true : false,
  );
  return (
    <nav className={cn("bg-[#E1F4FF]", authApp ? "lg:hidden block" : "")}>
      <div
        className={cn(
          "flex items-center justify-between py-8 px-4 xl:px-0 max-w-6xl mx-auto",
          {
            "p-4": authApp,
          },
        )}
      >
        {/* if a user is authenticated, show the drowpdown menu for mobile nav before the logo */}
        <div className={cn("flex", authApp ? "gap-2" : "")}>
          {authApp ? (
            <Button
              onClick={handleNavToggle}
              size="icon"
              variant="ghost"
              aria-label="toggle navigation"
              className="lg:hidden"
              id="navbar"
              asChild
            >
              <Menu className="h-4 w-4 font-black" />
            </Button>
          ) : null}
          <Button variant="ghost" asChild>
            <Link to={authApp ? "/dashboard" : "/"}>
              <img
                src={authApp ? icon : logo}
                alt="CASBytes"
                width={authApp ? 40 : 200}
                height={authApp ? 40 : 200}
              />
            </Link>
          </Button>
        </div>

        <div className="hidden lg:flex gap-4">
          <div className="flex gap-4 items-center">
            <ul className="flex gap-4">
              {menuItems && menuItems?.length > 0
                ? menuItems?.map((item: ItemProps, index: number) => (
                    <li key={`${item}-${index}`}>
                      <NavLink
                        key={`${item.href}-${index}`}
                        to={item.href}
                        aria-label={item.label}
                        className={({ isActive }) =>
                          isActive ? "text-blue-600 rounded-md" : ""
                        }
                      >
                        <Button variant="link" className="text-lg capitalize">
                          {item.label}
                        </Button>
                      </NavLink>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        {/* if a user is authenticated, show the side content drawer icon else show the drowpdown menu for mobile nav */}
        <div>
          {authApp ? (
            <SheetTrigger
              className={cn("h-8 w-8", dashboard ? "hidden" : "")}
              asChild
            >
              <Button
                size="icon"
                variant="ghost"
                aria-label="toggle sidebar"
                className="lg:hidden"
                id="navbar"
                asChild
              >
                <RiMenuFoldLine className="h-4 w-4" />
              </Button>
            </SheetTrigger>
          ) : (
            <Button
              onClick={handleNavToggle}
              size="icon"
              variant="ghost"
              aria-label="toggle navigation"
              className="lg:hidden"
              id="navbar"
              asChild
            >
              <Menu className="h-4 w-4 font-black" />
            </Button>
          )}

          <div className="lg:flex gap-4 hidden items-center">
            <Link prefetch="intent" to="/sign-in">
              <Button
                className="capitalize"
                variant="outline"
                aria-label="sign in"
              >
                sign in
              </Button>
            </Link>
            <Link prefetch="intent" to="/sign-up">
              <Button aria-label="sign up" className="capitalize">
                sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
