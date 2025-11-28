import { motion } from "motion/react";
import Image from "next/image";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";

const AboutHome = () => {
  return (
    <main className="bg-accent-foreground flex flex-col items-center justify-between gap-10 px-2 py-10 md:flex-row md:px-5 lg:px-10">
      <section className="space-y-4">
        <motion.h1
          className="text-2xl lg:text-4xl"
          whileInView={{
            opacity: [0, 1],
            x: [-100, 0],
            transition: { duration: 0.5 },
          }}
          viewport={{ margin: "-50px" }}
        >
          About Montana Nur Bestari
        </motion.h1>

        <motion.p
          className="lg:text-lg"
          whileInView={{
            opacity: [0, 1],
            x: [-100, 0],
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          We are specializes in the sustainable sourcing and supply of premium
          quality banana leaves, offering natural and eco friendly solution for
          the food and packaging industries. We also supplying cassava & moringa
          leaves which good for healthy, and stem banana which has many
          benefits.
        </motion.p>
      </section>

      <motion.section
        whileInView={{
          opacity: [0, 1],
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <Image
          src={LIST_IMAGE_CONSTANT.daunPisang.url}
          alt={LIST_IMAGE_CONSTANT.daunPisang.name}
          width={720}
          height={200}
          className="rounded-2xl object-cover lg:w-[1080px]"
          loading="lazy"
        />
      </motion.section>
    </main>
  );
};

export default AboutHome;
