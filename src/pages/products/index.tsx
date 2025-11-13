import LandingPageLayout from "~/components/layouts/LandingPageLayout";
import ListProducts from "~/components/views/products/ListProducts";

export default function ProductsPage() {
  return (
    <LandingPageLayout title="Products">
      {/* <MaintenancePage /> */}
      <section>
        <ListProducts />
      </section>
    </LandingPageLayout>
  );
}
