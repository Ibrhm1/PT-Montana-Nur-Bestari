import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import { Button } from "~/components/ui/button";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

export default function NotFound() {
  return (
    <LandingPageLayout title="Not Found">
      <main className="flex h-[90vh] flex-col items-center justify-center space-y-6">
        <Image
          src={LIST_IMAGE_CONSTANT.notFound.url}
          alt={LIST_IMAGE_CONSTANT.notFound.name}
          width={300}
          height={300}
          priority
        />

        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-light capitalize">Page Not Found</h1>
          <p>Sorry we couldn&apos;t find the page you&apos;re looking for</p>
        </div>

        <Button variant="default" asChild>
          <Link href="/">
            <Home />
            Back To Home
          </Link>
        </Button>
      </main>
    </LandingPageLayout>
  );
}
