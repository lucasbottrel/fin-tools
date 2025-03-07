import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-4 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center">
              <Image
                src="/logo-light.png"
                alt="FinTools Logo"
                width={600}
                height={0}
                sizes="(max-width: 768px) 100vw, 500px"
                className="w-auto h-auto max-w-[600px] object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Ferramentas para Análise de Investimentos
          </h1>
          <p className="text-xl text-gray-600">
            Sua plataforma completa para análise e tomada de decisão em
            investimentos
          </p>
        </div>

        {/* Description Section */}
        <div className="bg-blue-600 rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Sobre a Plataforma
          </h2>
          <p className="text-white leading-relaxed mb-6">
            Bem-vindo à nossa plataforma de ferramentas financeiras! Aqui você
            encontrará um conjunto completo de instrumentos para auxiliar na sua
            jornada de investimentos. Nossa missão é simplificar a análise de
            investimentos, fornecendo ferramentas práticas e eficientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Calculadora de Graham
            </h3>
            <p className="text-gray-600">
              Calcule o valor intrínseco das ações usando a fórmula de Benjamin
              Graham, uma ferramenta essencial para investidores value.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Mais Ferramentas em Breve
            </h3>
            <p className="text-gray-600">
              Estamos constantemente desenvolvendo novas ferramentas para ajudar
              você a tomar melhores decisões de investimento.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
