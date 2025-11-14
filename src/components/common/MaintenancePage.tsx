import { House } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

export default function MaintenancePage() {
  return (
    <motion.main
      className="flex h-screen flex-col items-center justify-center gap-5 lg:h-[80vh]"
      animate={{ opacity: [0, 1] }}
    >
      <motion.div
        animate={{
          y: [20, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
      >
        <Image
          src={LIST_IMAGE_CONSTANT.maintenance.url}
          alt={LIST_IMAGE_CONSTANT.maintenance.name}
          width={300}
          height={300}
          priority
        />
      </motion.div>

      <div className="space-y-1 text-center md:space-y-2">
        <motion.h1
          className="text-2xl font-semibold capitalize"
          animate={{
            y: [20, 0],
            opacity: [0, 1],
            transition: { duration: 0.5 },
          }}
        >
          This page is under maintenance
        </motion.h1>
        <motion.p
          className="text-lg capitalize"
          animate={{
            y: [20, 0],
            opacity: [0, 1],
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          We&apos;ll be back soon
        </motion.p>
      </div>

      <Button asChild variant="default">
        <Link href="/">
          <House />
          Go to Home
        </Link>
      </Button>
    </motion.main>
  );
}
