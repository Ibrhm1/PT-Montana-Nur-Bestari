import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";
import { NAVBAR_MENU_LISTS } from "~/constants/NavbarConstant";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sidebar fixed z-10 flex h-16 w-full items-center justify-between border-b px-2 shadow-xl md:px-5 lg:px-10">
      <section className="flex items-center gap-2">
        <Image
          src={LIST_IMAGE_CONSTANT.logo.url}
          alt={LIST_IMAGE_CONSTANT.logo.name.split("-")[1]}
          width={40}
          height={40}
        />
        <div className="-space-y-1">
          <h1 className="text-base font-bold lg:text-xl">
            PT Montana Nur Bestari
          </h1>
          <span className="text-muted-foreground text-xs font-normal md:text-sm">
            A company engaged in the field of leaf suppliers
          </span>
        </div>
      </section>

      <section className="md:hidden">
        <Sheet open={isOpen} onOpenChange={() => setIsOpen((value) => !value)}>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-sm">
                PT Montana Nur Bestari
              </SheetTitle>
              <SheetDescription className="text-xs">
                A company engaged in the field of leaf suppliers
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-3 px-4">
              {NAVBAR_MENU_LISTS.map((menu, menuIndex) => (
                <Link
                  key={menuIndex}
                  href={menu.href}
                  className="font-semibold"
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </section>

      <section className="hidden gap-2 md:flex">
        {NAVBAR_MENU_LISTS.map((menu, menuIndex) => (
          <Button
            key={menuIndex + 1}
            asChild
            className={cn(
              "font-bold",
              pathname === menu.href
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "text-foreground hover:bg-primary hover:text-accent-foreground bg-transparent",
            )}
          >
            <Link href={menu.href}>{menu.name}</Link>
          </Button>
        ))}
      </section>
    </nav>
  );
}
