"use client";
import { LoginHeader } from "../components/LoginHeader";
import { CartInput } from "@/app/cart/components/CartInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function formatPhone(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/^([0-9]{2})([0-9]{0,5})([0-9]{0,4}).*/, (match, p1, p2, p3) => {
      let result = "";
      if (p1) result += `(${p1}`;
      if (p2) result += `)${p2}`;
      if (p3) result += `-${p3}`;
      return result;
    })
    .slice(0, 15);
}

const PHONE_REGEX = /^(\(\d{2}\)[2-9]\d{3,4}-\d{4})$/;
const PHONE_ERROR_MSG = "Informe um telefone completo e válido. Formato: (XX)XXXXX-XXXX";

function validatePhone(value: string): string {
  if (!value || value.trim().length === 0) {
    return PHONE_ERROR_MSG;
  }
  return PHONE_REGEX.test(value) ? "" : PHONE_ERROR_MSG;
}

export default function CreateNewAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const ASSET_BASE_URL = process.env.NEXT_PUBLIC_ASSET_BASE_URL || "";
  const router = useRouter();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleAccessLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccessLevel(event.target.value);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const form = e.target as HTMLFormElement;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (!/^(\(\d{2}\)\d{5}-\d{4})$/.test(telephone)) {
        setError("Telefone inválido. Formato esperado: (11)99898-2828");
        return;
      }
      const fotoPath = selectedFile
        ? `${ASSET_BASE_URL}/usuarios/${encodeURIComponent(selectedFile.name)}`
        : undefined;

      const payload = {
        NOME: name.trim(),
        EMAIL: email.trim(),
        SENHA: senha.trim(),
        TELEFONE: telephone,
        TIPOS: accessLevel ? [accessLevel] : ["cliente"],
        DESCRICAO: accessLevel === "cliente" ? "Usuário cliente" : undefined,
        FOTO: fotoPath,
      };

      const res = await fetch("/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        router.replace("/login");
      } else {
        setError(data.message || data.error || "Erro ao criar conta");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao criar conta. Tente novamente.");
    }
  }

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else if (file) {
      setError("Por favor, selecione um arquivo de imagem válido.");
      setSelectedFile(null);
    }
  }

  return (
    <section className="min-h-screen bg-[#1A112E] text-black">
      <div className="flex flex-row gap-2 p-8 absolute">
        <LoginHeader label="Criar Conta" text="Puppy Care" />
      </div>
      <div className="flex flex-col justify-center items-center px-5 min-h-screen">
        <div className="bg-white w-[90%] p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Criar uma nova conta
          </h2>
          <form suppressHydrationWarning onSubmit={handleSubmit}>
            {/* Primeira linha: Nome, Telefone, E-mail */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col col-span-1">
                <label className="font-semibold mb-2 text-sm text-gray-700">
                  Nome do dono
                </label>
                <CartInput
                  type="text"
                  label=""
                  placeholder="Nome do dono"
                  className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={(e) =>
                    setName(e.currentTarget.value.trim().replace(/\s+/g, " "))
                  }
                  pattern="^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)+$"
                  title="Informe nome e sobrenome (apenas letras)"
                  onInvalid={(e) =>
                    e.currentTarget.setCustomValidity(
                      "Informe nome e sobrenome (apenas letras, ex.: João Silva)"
                    )
                  }
                  onInput={(e) => e.currentTarget.setCustomValidity("")}
                  required
                />
              </div>

              <div className="flex flex-col col-span-1">
                <label className="font-semibold mb-2 text-sm text-gray-700">
                  Telefone
                </label>
                <CartInput
                  type="tel"
                  label=""
                  placeholder="Telefone"
                  className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                  value={telephone}
                  onChange={(e) => setTelephone(formatPhone(e.target.value))}
                  pattern="^(\(\d{2}\)[2-9]\d{3,4}-\d{4})$"
                  title={PHONE_ERROR_MSG}
                  onInvalid={(e) => {
                    e.currentTarget.setCustomValidity(validatePhone(e.currentTarget.value));
                  }}
                  onInput={(e) => e.currentTarget.setCustomValidity("")}
                  onBlur={(e) => {
                    e.currentTarget.setCustomValidity(validatePhone(e.currentTarget.value));
                  }}
                  required
                />
              </div>

              <div className="flex flex-col col-span-1">
                <label className="font-semibold mb-2 text-sm text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Segunda linha: Senha, Nível de Acesso */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col col-span-1">
                <label className="font-semibold mb-2 text-sm text-gray-700">
                  Senha
                </label>
                <div className="relative group">
                  <CartInput
                    type={showPassword ? "text" : "password"}
                    label=""
                    placeholder="Senha"
                    className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                    value={senha}
                    onChange={(e) => {
                      e.currentTarget.setCustomValidity("");
                      setSenha(e.target.value.replace(/\s+/g, ""));
                    }}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,14}$"
                    minLength={6}
                    maxLength={14}
                    title="Senha deve ter 6 a 14 caracteres, com letras e números"
                    onInvalid={(e) => {
                      const input = e.currentTarget;
                      if (!input.value || input.value.trim().length === 0) {
                        input.setCustomValidity(
                          "Campo obrigatório: informe uma senha com letras e números (6 a 14 caracteres)"
                        );
                      } else {
                        input.setCustomValidity(
                          "Senha deve ter 6 a 14 caracteres, contendo letras e números"
                        );
                      }
                    }}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    onBlur={(e) => {
                      const input = e.currentTarget;
                      input.value = input.value.replace(/\s+/g, ""); // remove espaços que quebram o pattern
                      if (!input.value || input.value.trim().length === 0) {
                        input.setCustomValidity(
                          "Campo obrigatório: informe uma senha com letras e números (6 a 14 caracteres)"
                        );
                      } else if (
                        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,14}$/.test(
                          input.value
                        )
                      ) {
                        input.setCustomValidity(
                          "Senha deve ter 6 a 14 caracteres, contendo letras e números"
                        );
                      } else {
                        input.setCustomValidity("");
                      }
                    }}
                    required
                  />
                  <div className="container">
                    <button
                      type="button"
                      className="text-black absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer ease-in-out duration-300"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col col-span-1">
                <label className="font-semibold mb-2 text-sm text-gray-700">
                  Nível de Acesso
                </label>
                <select
                  className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                  defaultValue=""
                  onChange={handleAccessLevelChange}
                  required
                >
                  <option value="" disabled>
                    Nível de Acesso
                  </option>
                  <option value="cliente">Cliente</option>
                  <option value="colaborador">Colaborador</option>
                </select>
              </div>
              <div className="flex flex-col col-span-1">
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
            </div>

            {/* Terceira linha: Serviços Prestados (apenas para Colaborador) */}
            {accessLevel === "colaborador" && (
              <div className="mb-6">
                <label className="font-semibold mb-2 text-sm text-gray-700 block">
                  Serviços Prestados
                </label>
                <div className="flex flex-row gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ServiosPrestados"
                      value="Banho"
                      checked={selectedValue === "Banho"}
                      onChange={handleOptionChange}
                      className="accent-[#E72989]"
                    />
                    Banho
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ServiosPrestados"
                      value="Tosa"
                      checked={selectedValue === "Tosa"}
                      onChange={handleOptionChange}
                      className="accent-[#E72989]"
                    />
                    Tosa
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ServiosPrestados"
                      value="LevaeTraz"
                      checked={selectedValue === "LevaeTraz"}
                      onChange={handleOptionChange}
                      className="accent-[#E72989]"
                    />
                    Leva e Traz
                  </label>
                </div>
              </div>
            )}

            {/* Botão de envio e mensagem de erro */}
            <button
              type="submit"
              className="w-full bg-[#E72989] text-white rounded-lg p-3 hover:bg-[#dc197b] font-bold tracking-[2] transition-transform hover:scale-105 will-change-auto transition-colors duration-300 cursor-pointer text-lg mt-2"
            >
              Criar Nova Conta
            </button>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
                {error}
              </div>
            )}

            {/* Links de rodapé */}
            <div className="flex justify-between items-center mt-4">
              <a href="/login" className="text-sm text-black relative group">
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                Acessar minha conta
              </a>
              <a
                href="/login/esqueci-a-senha"
                className="text-sm text-black relative group"
              >
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                Esqueceu a senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
