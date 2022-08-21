// Title [filme, serie, anime....]

import { useRouter } from "next/router";

export default function Title() {
  const router = useRouter();
  const { index } = router.query;

  return <h1>Usuario: {index}</h1>;
}
