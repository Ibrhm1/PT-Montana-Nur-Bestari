<<<<<<< HEAD
import MaintenancePage from "~/components/common/MaintenancePage";
import LandingPageLayout from "~/components/layouts/LandingPageLayout";
=======
import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import ContactInfo from "~/components/views/contact/ContactInfo";
>>>>>>> 388f317ad9400cb7eb786188c4f19dd1ea27164c

export default function ContactPage() {
  return (
    <LandingPageLayout title="Contact Us">
      {/* gunakan component maintenance jika berada di mode maintenance */}
<<<<<<< HEAD
      <MaintenancePage />
      {/* <ContactInfo /> */}
=======
      {/* <MaintenancePage /> */}
      <ContactInfo />
>>>>>>> 388f317ad9400cb7eb786188c4f19dd1ea27164c
    </LandingPageLayout>
  );
}
