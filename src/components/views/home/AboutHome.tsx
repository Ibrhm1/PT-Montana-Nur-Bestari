import Image from "next/image";

const AboutHome = () => {
  return (
    <main className="bg-accent-foreground flex flex-col items-center gap-10 px-2 py-10 md:flex-row md:px-5 lg:px-10">
      <section className="space-y-4">
        <h1 className="text-2xl lg:text-4xl">About Motana Nur Bestari</h1>
        <p className="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem
          cupiditate eligendi obcaecati, repellat nihil porro nobis molestias,
          asperiores culpa quisquam corporis itaque doloremque alias excepturi
          fuga iure in ut.
        </p>
      </section>
      <section>
        <Image
          src="/banner.jpg"
          alt="banner"
          width={720}
          height={200}
          className="rounded-2xl"
        />
      </section>
    </main>
  );
};

export default AboutHome;
