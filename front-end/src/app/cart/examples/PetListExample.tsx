import { useEffect, useState } from "react";
import { Pet } from "../types/pet";

export function PetListExample() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/pets")
      .then((res) => res.json())
      .then(setPets)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando pets...</div>;
  if (error) return <div style={{color:'red'}}>Erro: {error}</div>;

  return (
    <ul>
      {pets.map((p) => (
        <li key={p.ID_PET}>
          {p.NOME} - {p.RACA} - Cliente: {p.ID_CLIENTE}
        </li>
      ))}
    </ul>
  );
}
