import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Evento() {
  const API_URL = "http://localhost:8080/api/v1/evento";

  const [mensagem, setMensagem] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: "onBlur" });

  // Função para converter datetime-local para "dd/MM/yyyy HH:mm"
  const formatarData = (valor) => {
    const data = new Date(valor);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        dataInicio: formatarData(data.dataInicio),
        dataFinal: formatarData(data.dataFinal),
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const texto = await response.text();

      if (response.ok) {
        setMensagem("Evento cadastrado com sucesso!");
        reset();
      } else {
        setMensagem("Erro ao cadastrar o evento: " + texto);
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("Erro ao conectar com servidor.");
    }
  };

  // Enum do backend
  const tiposEvento = [
    "CONGRESSO",
    "TREINAMENTO",
    "WORKSHOP",
    "IMERSÃO",
    "REUNIÃO",
    "HACKATON",
    "STARTUP"
  ];

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cadastro de Evento</h1>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

        {/* Nome */}
        <div>
          <label>Nome</label>
          <input placeholder='Digite o nome do evento'
            className="w-full border p-2 rounded"
            {...register("nome", { required: "O nome é obrigatório" })}
          />
          {errors.nome && (
            <p className="text-red-600">{errors.nome.message}</p>
          )}
        </div>

        {/* Descrição */}
        <div>
          <label>Descrição</label>
          <textarea placeholder='Digite seu email'
            className="w-full border p-2 rounded"
            {...register("descricao", { required: "A descrição é obrigatória" })}
          />
          {errors.descricao && (
            <p className="text-red-600">{errors.descricao.message}</p>
          )}
        </div>

        {/* Tipo */}
        <div>
          <label>Tipo do Evento</label>
          <select
            className="w-full border p-2 rounded"
            {...register("tipo", { required: "O tipo é obrigatório" })}
          >
            <option value="">Selecione...</option>
            {tiposEvento.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.tipo && (
            <p className="text-red-600">{errors.tipo.message}</p>
          )}
        </div>

        {/* Local */}
        <div>
          <label>Local</label>
          <input placeholder='Digite o local do evento'
            className="w-full border p-2 rounded"
            {...register("local", { required: "O local é obrigatório" })}
          />
          {errors.local && (
            <p className="text-red-600">{errors.local.message}</p>
          )}
        </div>

        {/* Data início */}
        <div>
          <label>Data de Início</label>
          <input
            type="datetime-local"
            className="w-full border p-2 rounded"
            {...register("dataInicio", { required: "A data de início é obrigatória" })}
          />
          {errors.dataInicio && (
            <p className="text-red-600">{errors.dataInicio.message}</p>
          )}
        </div>

        {/* Data final */}
        <div>
          <label>Data de Término</label>
          <input
            type="datetime-local"
            className="w-full border p-2 rounded"
            {...register("dataFinal", { required: "A data final é obrigatória" })}
          />
          {errors.dataFinal && (
            <p className="text-red-600">{errors.dataFinal.message}</p>
          )}
        </div>

        {/* Link do evento (opcional) */}
        <div>
          <label>Link do Evento (opcional)</label>
          <input placeholder='Digite o link do evento'
            className="w-full border p-2 rounded"
            {...register("linkEvento")}
          />
        </div>

        {/* Link da imagem (opcional) */}
        <div>
          <label>Link da Imagem (opcional)</label>
          <input placeholder='Insira o link da imagem do evento'
            className="w-full border p-2 rounded"
            {...register("linkImagem")}
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cadastrar
        </button>

      </form>

      {mensagem && (
        <p className="mt-4 text-lg font-medium text-green-700">
          {mensagem}
        </p>
      )}
    </div>
  );
}
