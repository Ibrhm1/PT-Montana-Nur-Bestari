import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import BannerHome from "~/components/views/home/BannerHome";

export default function HomePage() {
  return (
    <LandingPageLayout title="Home">
      <section>
        <BannerHome />
      </section>

      <h1>Hello World</h1>
    </LandingPageLayout>
  );
}
