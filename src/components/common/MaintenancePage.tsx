import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

export default function MaintenancePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5 lg:h-[80vh]">
      <Image
        src={LIST_IMAGE_CONSTANT.maintenance.url}
        alt={LIST_IMAGE_CONSTANT.maintenance.name}
        width={300}
        height={300}
        priority
      />

      <div className="space-y-1 text-center md:space-y-2">
        <h1 className="text-2xl font-semibold capitalize">
          This page is under maintenance
        </h1>
        <p className="text-lg capitalize">We&apos;ll be back soon</p>
      </div>

      <Button asChild variant="default">
        <Link href="/">
          <House />
          Go to Home
        </Link>
      </Button>
    </main>
  );
}
