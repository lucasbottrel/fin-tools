import Layout from "@/components/layout/Layout";
import {useState} from "react";

interface GrahamCalculatorInputs {
  eps: string;
  vpa: string;
  stockName: string;
}

interface FormErrors {
  eps: boolean;
  vpa: boolean;
  stockName: boolean;
}

export default function GrahamCalculator() {
  const [inputs, setInputs] = useState<GrahamCalculatorInputs>({
    eps: "",
    vpa: "",
    stockName: "",
  });
  const [fairPrice, setFairPrice] = useState<number | null>(null);
  const [errors, setErrors] = useState<FormErrors>({
    eps: false,
    vpa: false,
    stockName: false,
  });

  const calculateFairPrice = () => {
    const newErrors = {
      eps: inputs.eps.trim() === "",
      vpa: inputs.vpa.trim() === "",
      stockName: inputs.stockName.trim() === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    const eps = parseFloat(inputs.eps);
    const vpa = parseFloat(inputs.vpa);

    // VI = √(22.5 x LPA x VPA)
    const price = Math.sqrt(22.5 * eps * vpa);
    setFairPrice(Number(price.toFixed(2)));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputs((prev) => ({...prev, [name]: value}));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({...prev, [name]: false}));
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Calculadora de Preço Justo de Ações de Graham
          </h1>
          <p className="text-xl text-gray-600">
            Calcule o valor intrínseco das ações usando a metodologia de
            Benjamin Graham, uma ferramenta essencial para investidores value
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="stockName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome da Ação
            </label>
            <input
              type="text"
              id="stockName"
              name="stockName"
              value={inputs.stockName}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.stockName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ex: PETR4"
            />
            {errors.stockName && (
              <p className="mt-1 text-sm text-red-600">
                Por favor, insira o nome da ação
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="eps"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Lucro por Ação (LPA)
            </label>
            <input
              type="number"
              id="eps"
              name="eps"
              value={inputs.eps}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.eps ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ex: 2.5"
              step="0.01"
            />
            {errors.eps && (
              <p className="mt-1 text-sm text-red-600">
                Por favor, insira o LPA
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="vpa"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Valor Patrimonial por Ação (VPA)
            </label>
            <input
              type="number"
              id="vpa"
              name="vpa"
              value={inputs.vpa}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.vpa ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ex: 15.0"
              step="0.01"
            />
            {errors.vpa && (
              <p className="mt-1 text-sm text-red-600">
                Por favor, insira o VPA
              </p>
            )}
          </div>

          <button
            onClick={calculateFairPrice}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Calcular Preço Justo
          </button>

          {fairPrice !== null && (
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                Resultado:
              </h2>
              <p className="text-3xl font-semibold text-blue-600">
                {inputs.stockName && `${inputs.stockName}: `}R${" "}
                {fairPrice.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {inputs.stockName
                  ? `Este é o preço justo estimado para a ação ${inputs.stockName} segundo a fórmula VI = √(22.5 x LPA x VPA).`
                  : "Este é o preço justo estimado segundo a fórmula VI = √(22.5 x LPA x VPA)."}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
