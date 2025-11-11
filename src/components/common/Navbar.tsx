import { CircleUser, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_MENU_LISTS } from "~/constants/NavbarConstant";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-sidebar flex h-16 w-full items-center justify-between border-b px-2 shadow-xl md:px-5 lg:px-10">
      <section className="flex items-center gap-2">
        <CircleUser size={32} />
        <div className="-space-y-1">
          <h1 className="text-base font-bold lg:text-xl">Daun</h1>
          <span className="text-muted-foreground text-xs font-normal md:text-sm">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
      </section>
      <section className="md:hidden">
        <Menu />
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
