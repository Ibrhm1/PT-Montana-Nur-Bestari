import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import AboutHome from "~/components/views/home/AboutHome";
import BannerHome from "~/components/views/home/BannerHome";

export default function HomePage() {
  return (
    <LandingPageLayout title="Home">
      <section>
        <BannerHome />
      </section>

      <section>
        <AboutHome />
      </section>
    </LandingPageLayout>
  );
}
