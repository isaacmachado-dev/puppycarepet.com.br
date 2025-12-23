"use client";

import { useState, useEffect } from "react";
import { createAtendimento, createAtendimentoWithFile } from "./services/cartService";
import { CartButton } from "./components/CartButton";
import { CartAge } from "./components/CartAge";
import { CartBreedSelect } from "./components/CartBreedSelect";
import { CartInput } from "./components/CartInput";
import { CartSizeSelect } from "./components/CartSizeSelect";
import { CartSpeciesSelect } from "./components/CartSpeciesSelect";
import { CartLinkInfo } from "./components/CartLinkInfo";

export default function CartWelcome() {
  const [error, setError] = useState("");
  const [activeOption, setActiveOption] = useState("Cão");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [ownerName, setOwnerName] = useState("");
  const [ownerTelephone, setOwnerTelephone] = useState("");

  // Helper para decodificar o payload do JWT
  function decodeJwtPayload(token: string | null) {
    if (!token) return null;
    try {
      const base64 = token.split(".")[1];
      return JSON.parse(atob(base64));
    } catch {
      return null;
    }
  }

  // Carrega dados do CLIENTE vinculado ao usuário logado ao montar o componente
  useEffect(() => {
    async function loadClientData() {
      try {
        // Usa as possíveis chaves já existentes na aplicação
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("admin_token") ||
              localStorage.getItem("token") ||
              localStorage.getItem("auth_token")
            : null;

        const payload = decodeJwtPayload(token);

        // Garante user_id no localStorage se vier no token
        const payloadUserId = payload?.id || payload?.userId || payload?.sub;
        if (payloadUserId && typeof window !== "undefined" && !localStorage.getItem("user_id")) {
          localStorage.setItem("user_id", String(payloadUserId));
        }

        // Prefill via payload (fallback)
        if (payload?.nome) {
          setOwnerName(payload.nome);
        }
        if (payload?.telefone) {
          setOwnerTelephone(payload.telefone);
        }

        const userId = typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
        if (!userId) return;

        // Busca CLIENTE vinculado ao usuário para obter NOME e TELEFONE
        const res = await fetch(`/api/clientes/by-usuario/${userId}`);
        if (res.ok) {
          const cliente = await res.json();
          setOwnerName(cliente.NOME || cliente.nome || payload?.nome || "");
          setOwnerTelephone(
            cliente.TELEFONE || cliente.telefone || payload?.telefone || ""
          );

          // Garante que cliente_id esteja presente para o serviço do cart
          if (cliente?.ID_CLIENTE && typeof window !== "undefined") {
            localStorage.setItem("cliente_id", String(cliente.ID_CLIENTE));
          }
        }
      } catch (err) {
        console.error("Erro ao carregar dados do cliente:", err);
      }
    }

    loadClientData();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setUploadProgress(0);
    try {
      const form = e.target as HTMLFormElement;
      // Aciona validação nativa do formulário (pattern/minLength/required) antes de prosseguir
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name =
        (form.elements.namedItem("name") as HTMLInputElement)?.value || ownerName || "";
      const telephone =
        (form.elements.namedItem("telephone") as HTMLInputElement)?.value || ownerTelephone || "";
      const petName =
        (form.elements.namedItem("petName") as HTMLInputElement)?.value || "";
      const petBreed =
        (form.elements.namedItem("petBreed") as HTMLSelectElement)?.value || "";

      const payload = {
        // ID_CLIENTE será preenchido automaticamente pelo serviço usando localStorage (cliente_id)
        ID_PET: 1,
        ID_SERVICO: 1,
        VALOR_COBRADO: 79.9,
        TIPO: "banho",
        NOTAS: `Nome: ${name}, Telefone: ${telephone}, Pet: ${petName}, Raça: ${petBreed}`,
        TELEFONE_DONO: telephone,
      };

      let created;
      if (selectedFile) {
        // Envia com arquivo
        setUploadProgress(50);
        created = await createAtendimentoWithFile(payload, selectedFile);
        setUploadProgress(100);
      } else {
        // Envia sem arquivo (JSON puro)
        created = await createAtendimento(payload);
      }

      alert(`Atendimento salvo com sucesso! Código: ${created.PUBLIC_ID ?? created.ID_ATENDIMENTO ?? ""}`);
      setSelectedFile(null);
      setUploadProgress(0);
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
      setUploadProgress(0);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  }

  return (
    <section className="bg-white w-[90%] p-10 rounded-xl shadow-lg">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
          {error}
        </div>
      )}

      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mb-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#E72989] h-2 rounded-full transition-all"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      <form suppressHydrationWarning onSubmit={handleSubmit}>
        <h2 className="font-bold text-black text-2xl mb-4 text-left w-full">
          Diga-me sobre vocês
        </h2>

        {/* Linha 1: dono + telefone + pet */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col col-span-1">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartInput
                type="text"
                label="Nome do dono"
                name="name"
                placeholder="Seu nome"
                value={ownerName}
                onChange={(e) => setOwnerName(e.currentTarget.value)}
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </span>
          </div>

          <div className="flex flex-col col-span-1">
            <span className="w-full font-semibold mb-2 text-sm text-gray-700">
              <CartInput
                type="tel"
                name="telephone"
                label="Telefone"
                placeholder="Telefone para contato"
                value={ownerTelephone}
                onChange={(e) => setOwnerTelephone(e.currentTarget.value)}
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </span>
          </div>

          <div className="flex flex-col col-span-1">
            <span className="w-full font-semibold mb-2 text-sm text-gray-700">
              <CartInput
                type="text"
                name="petName"
                label="Nome do pet"
                placeholder="Nome do seu pet"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </span>
          </div>
        </div>

        {/* Linha 2: espécie, raça, idade, porte */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <div className="flex flex-col">
            <span className="w-full font-semibold mb-2 text-sm text-gray-700">
              <CartSpeciesSelect
                label="Espécie"
                value={activeOption}
                setValue={setActiveOption}
              />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartBreedSelect label="Raça do pet" species={activeOption} />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartAge label="Idade do pet" />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartSizeSelect label="Porte" />
            </span>
          </div>
        </div>

        {/* Linha 3: upload de foto (opcional) */}
        <div className="mt-6">
          <label className="font-semibold mb-2 text-sm text-gray-700 block">
            Foto do Pet (opcional)
          </label>
          <div className="relative">
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
            />
            {selectedFile && (
              <p className="text-sm text-green-600 mt-2">
                ✓ {selectedFile.name} selecionado
              </p>
            )}
          </div>
        </div>

        {/* Linha 4: info + botão */}
        <div className="flex flex-row md:grid md:grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
          <div>
            <CartLinkInfo />
          </div>

          <div className="flex justify-end">
            <CartButton nextHref="/cart/servicos-disponiveis" />
          </div>
        </div>
      </form>
    </section>
  );
}
