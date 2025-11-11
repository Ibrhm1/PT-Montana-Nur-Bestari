import Head from "next/head";

type HeaderPageProps = {
  title: string;
  iconUrl?: string;
};

export default function HeaderPage(props: HeaderPageProps) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title || "Title"}</title>
      <link rel="icon" href={props.iconUrl} />
    </Head>
  );
}
