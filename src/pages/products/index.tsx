import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import ListProducts from "~/components/views/products/ListProducts";

export default function ProductsPage() {
  return (
    <LandingPageLayout title="Products">
      {/* gunakan component maintenance jika berada di mode maintenance */}
      {/* <MaintenancePage /> */}
      <section>
        <ListProducts />
      </section>
    </LandingPageLayout>
  );
}
