import { Home } from "lucide-react";
import Link from "next/link";
import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <LandingPageLayout title="Not Found">
      <main className="flex h-[90vh] flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-bold">Not Found</h1>
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
