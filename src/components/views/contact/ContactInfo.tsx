import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { LIST_CONTACT_CONSTANT } from "~/constants/ListContactConstant";

export default function ContactInfo() {
  return (
    <main className="px-2 py-20 md:px-5 lg:px-10">
      <header className="mb-10">
        <h1 className="text-3xl font-normal">Contact Us</h1>
      </header>

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Card className="h-fit">
          <CardContent className="space-y-5">
            <motion.h2
              className="text-xl lg:text-2xl"
              animate={{ opacity: [0, 1], y: 0 }}
            >
              PT Montana Nur Bestari
            </motion.h2>

            {LIST_CONTACT_CONSTANT.map((contact, contactIndex) => (
              <motion.div
                key={contactIndex}
                className="flex items-start gap-3"
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.3, delay: contactIndex * 0.4 }}
              >
                <contact.icon className="text-primary" />

                {contact.detailInfo && (
                  <div>
                    {contact.detailInfo.map((detail, detailIndex) => (
                      <p key={detailIndex}>{detail}</p>
                    ))}
                  </div>
                )}

                <Link
                  target="_blank"
                  href={contact.href || ""}
                  className="hover:underline hover:underline-offset-4"
                >
                  {contact.info && !contact.detailInfo && contact.info}
                </Link>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <motion.div animate={{ opacity: [0, 1], y: 0 }}>
          <Card className="gap-0 py-4">
            <CardHeader>
              <CardTitle className="text-xl font-normal lg:text-2xl">
                Our Location
              </CardTitle>
            </CardHeader>

            <CardContent>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.9158419191197!2d107.0149331476417!3d-6.177121771070232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69897bb119781b%3A0x6b568f72415d2ed6!2sJl.%20Raya%20Pd.%20Ungu%20Permai%20Sektor%205%20No.5%2C%20Bahagia%2C%20Kec.%20Babelan%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017610!5e0!3m2!1sen!2sid!4v1763106355961!5m2!1sen!2sid"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
                className="w-full"
              />
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
