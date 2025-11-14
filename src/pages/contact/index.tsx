import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import ContactInfo from "~/components/views/contact/ContactInfo";

export default function ContactPage() {
  return (
    <LandingPageLayout title="Contact Us">
      {/* gunakan component maintenance jika berada di mode maintenance */}
      {/* <MaintenancePage /> */}
      <ContactInfo />
    </LandingPageLayout>
  );
}
