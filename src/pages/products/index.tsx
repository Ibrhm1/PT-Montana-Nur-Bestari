import { useRouter } from "next/router";

export default function ProductsPage() {
  const router = useRouter();
  return router.replace("/");
}
