import { motion } from "motion/react";
import Image from "next/image";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

const AboutHome = () => {
  return (
    <main className="bg-accent-foreground flex flex-col items-center gap-10 px-2 py-10 md:flex-row md:px-5 lg:px-10">
      <section className="space-y-4">
        <motion.h1
          className="text-2xl lg:text-4xl"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ margin: "-50px" }}
        >
          About Montana Nur Bestari
        </motion.h1>
        <motion.p
          className="lg:text-lg"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem
          cupiditate eligendi obcaecati, repellat nihil porro nobis molestias,
          asperiores culpa quisquam corporis itaque doloremque alias excepturi
          fuga iure in ut.
        </motion.p>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
        viewport={{ margin: "-100px" }}
      >
        <Image
          src={LIST_IMAGE_CONSTANT.daunKelor.url}
          alt={LIST_IMAGE_CONSTANT.daunKelor.name}
          width={720}
          height={200}
          className="rounded-2xl object-cover lg:w-[1080px]"
        />
      </motion.section>
    </main>
  );
};

export default AboutHome;
