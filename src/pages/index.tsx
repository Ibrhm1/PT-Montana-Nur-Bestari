import { motion } from "motion/react";
import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import AboutHome from "~/components/views/home/AboutHome";
import BannerHome from "~/components/views/home/BannerHome";
import FeaturedProduct from "~/components/views/home/FeaturedProduct";

export default function HomePage() {
  return (
    <LandingPageLayout title="Home">
      {/* gunakan component maintenance jika berada di mode maintenance */}
      {/* <MaintenancePage /> */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <BannerHome />
      </motion.section>

      <AboutHome />

      <FeaturedProduct />
    </LandingPageLayout>
  );
}
