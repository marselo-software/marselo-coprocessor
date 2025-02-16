// Componente ProfissionalFields.jsx
export default function ProfissionalFields () {
    return (
      <section className="py-16 bg-gray-50 w-full" id="servicos">
        <div className="container mx-auto px-4">
          
          {/* Título da Seção */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Soluções Profissionais em TI e Telecom
          </h2>
  
          {/* Seção Redes */}
          <div id="redes" className="bg-white rounded-xl p-8 mb-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">Redes e Infraestrutura</h3>
            <p className="text-gray-600 mb-4">
              Implementamos redes cabeadas de alta performance com equipamentos certificados, garantindo:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-5">
              <li>Topologia otimizada para sua necessidade</li>
              <li>Switchs gerenciáveis de última geração</li>
              <li>Wi-Fi empresarial com cobertura total</li>
              <li>Monitoramento 24/7 da infraestrutura</li>
            </ul>
          </div>
  
          {/* Seção CFTV */}
          <div id="cftv" className="bg-white rounded-xl p-8 mb-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">Sistemas de Segurança CFTV</h3>
            <p className="text-gray-600 mb-4">
              Soluções completas de vigilância com tecnologia HD e análise inteligente:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Nossa Proposta</h4>
                <ul className="space-y-2">
                  <li>✅ Câmeras com visão noturna</li>
                  <li>✅ Gravação em nuvem ou local</li>
                  <li>✅ Integração com alarmes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Diferenciais Técnicos</h4>
                <ul className="space-y-2">
                  <li>🔧 Instalação certificada</li>
                  <li>📱 Acesso remoto multiplataforma</li>
                  <li>🛡️ Proteção contra invasões</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Seção VoIP */}
          <div id="voip" className="bg-white rounded-xl p-8 mb-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">Telefonia IP Profissional</h3>
            <p className="text-gray-600 mb-4">
              Migração segura para VoIP com redução de custos de até 60%:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[250px]">
                <h4 className="font-semibold mb-2">Vantagens</h4>
                <ul className="space-y-2">
                  <li>📞 Chamadas ilimitadas</li>
                  <li>🌎 Atendimento multicanal</li>
                  <li>📊 Relatórios gerenciais</li>
                </ul>
              </div>
              <div className="flex-1 min-w-[250px]">
                <h4 className="font-semibold mb-2">Nossa Expertise</h4>
                <ul className="space-y-2">
                  <li>✅ Integração com CRM</li>
                  <li>✅ Suporte técnico especializado</li>
                  <li>✅ Conformidade Anatel</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Seção Profissionalismo */}
          <div className="mt-12 bg-sky-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Por que escolher a Arsit?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-4">
                <div className="text-sky-600 text-3xl mb-2">+15</div>
                <div className="font-semibold">Anos no mercado</div>
              </div>
              <div className="p-4">
                <div className="text-sky-600 text-3xl mb-2">100%</div>
                <div className="font-semibold">Equipe certificada</div>
              </div>
              <div className="p-4">
                <div className="text-sky-600 text-3xl mb-2">24/7</div>
                <div className="font-semibold">Suporte prioritário</div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  };