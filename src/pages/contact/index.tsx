import { useRouter } from "next/router";

export default function ContactPage() {
  const router = useRouter();
  return router.replace("/");
}
