import Image from "next/image";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

const AboutHome = () => {
  return (
    <main className="bg-accent-foreground flex flex-col items-center gap-10 px-2 py-10 md:flex-row md:px-5 lg:px-10">
      <section className="space-y-4">
        <h1 className="text-2xl lg:text-4xl">About Montana Nur Bestari</h1>
        <p className="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem
          cupiditate eligendi obcaecati, repellat nihil porro nobis molestias,
          asperiores culpa quisquam corporis itaque doloremque alias excepturi
          fuga iure in ut.
        </p>
      </section>
      <section>
        <Image
          src={LIST_IMAGE_CONSTANT.daunKelor.url}
          alt={LIST_IMAGE_CONSTANT.daunKelor.name}
          width={720}
          height={200}
          className="rounded-2xl object-cover lg:w-[1080px]"
        />
      </section>
    </main>
  );
};

export default AboutHome;
