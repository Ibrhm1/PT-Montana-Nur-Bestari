import MaintenancePage from "~/components/common/MaintenancePage";
import LandingPageLayout from "~/components/layouts/LandingPageLayout";

export default function ContactPage() {
  return (
    <LandingPageLayout title="Contact Us">
      {/* gunakan component maintenance jika berada di mode maintenance */}
      <MaintenancePage />
      {/* <ContactInfo /> */}
    </LandingPageLayout>
  );
}
