import { ReactNode } from "react";
import Footer from "~/components/common/Footer";
import HeaderPage from "~/components/common/HeaderPage";
import Navbar from "~/components/common/Navbar";

type LandingPageLayoutProps = {
  children: ReactNode;
  title: string;
};

export default function LandingPageLayout(props: LandingPageLayoutProps) {
  return (
    <>
      <HeaderPage title={props.title} />
      <Navbar />
      <section className="px-2 md:px-5 lg:px-10">{props.children}</section>
      <Footer />
    </>
  );
}
