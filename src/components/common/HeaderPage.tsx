import Head from "next/head";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

type HeaderPageProps = {
  title: string;
};

export default function HeaderPage(props: HeaderPageProps) {
  const logo = LIST_IMAGE_CONSTANT.logo;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{"PT Monata Nur Bestari" + " | " + props.title}</title>
      <link rel="icon" href={logo.url} sizes="any" />
    </Head>
  );
}
