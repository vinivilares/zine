// Vistos

import { useRouter } from "next/router";

export default function Watched() {
  const router = useRouter();
  const { profile } = router.query;

  return <h1>Filmes assistidos do usuario: {profile}</h1>;
}
