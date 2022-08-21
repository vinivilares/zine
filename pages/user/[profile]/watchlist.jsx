// Quero assistir

import { useRouter } from "next/router";

export default function Watchlist() {
  const router = useRouter();
  const { profile } = router.query;

  return <h1>Filmes que o usuario: {profile} quer assistir</h1>;
}
