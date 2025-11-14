import { Home } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import { Button } from "~/components/ui/button";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

export default function NotFound() {
  return (
    <LandingPageLayout title="Not Found">
      <motion.main className="flex h-[90vh] flex-col items-center justify-center space-y-6">
        <motion.div
          animate={{
            opacity: [0, 1],
            transition: { duration: 0.8 },
          }}
        >
          <Image
            src={LIST_IMAGE_CONSTANT.notFound.url}
            alt={LIST_IMAGE_CONSTANT.notFound.name}
            width={300}
            height={300}
            priority
          />
        </motion.div>

        <div className="space-y-2 text-center">
          <motion.h1
            className="text-4xl font-light capitalize"
            animate={{
              y: [20, 0],
              opacity: [0, 1],
              transition: { duration: 0.8, delay: 0.1 },
            }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            animate={{
              y: [20, 0],
              opacity: [0, 1],
              transition: { duration: 0.8, delay: 0.4 },
            }}
          >
            Sorry we couldn&apos;t find the page you&apos;re looking for
          </motion.p>
        </div>

        <Button asChild variant="default">
          <Link href="/">
            <Home />
            Back To Home
          </Link>
        </Button>
      </motion.main>
    </LandingPageLayout>
  );
}
