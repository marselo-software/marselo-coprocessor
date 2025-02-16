export default function ContactForm() {
    return (
      <form id="contato" className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Conte para nós como podemos te ajudar</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Linha 1 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Nome*</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu nome completo"
            />
          </div>
  
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+55 (00) 00000-0000"
            />
          </div>
  
          {/* Linha 2 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email*</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="seuemail@exemplo.com"
            />
          </div>
  
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Empresa</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nome da empresa"
            />
          </div>
  
          {/* Linha 3 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Segmento*</label>
            <select
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecione um segmento</option>
              <option>Tecnologia</option>
              <option>Varejo</option>
              <option>Indústria</option>
            </select>
          </div>
  
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Porte da empresa*</label>
            <select
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecione o porte</option>
              <option>Pequena</option>
              <option>Média</option>
              <option>Grande</option>
            </select>
          </div>
  
          {/* Linha 4 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Departamento*</label>
            <select
              required
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecione um departamento</option>
              <option>TI</option>
              <option>RH</option>
              <option>Financeiro</option>
            </select>
          </div>
  
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Cargo</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu cargo"
            />
          </div>
        </div>
  
        {/* Área de ajuda */}
        <div className="mt-6 space-y-2">
          <label className="block text-sm font-medium text-gray-700">Como podemos ajudar?*</label>
          <textarea
            className="w-full p-2 border rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Descreva sua necessidade"
          />
        </div>
  
        {/* Checkbox de consentimento */}
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm text-gray-600">
            Concordo em permitir que a ARSIT armazene e processe meus dados pessoais conforme descrito na Política de Privacidade.
          </label>
        </div>
  
        {/* Botão de enviar */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar
        </button>
  
        {/* Texto de disclaimer */}
        <p className="mt-4 text-xs text-gray-500">
          Ao enviar este formulário, você concorda com a utilização dos dados informados para contato comercial via e-mail ou telefone. Você pode cancelar o recebimento dessas comunicações quando desejar, clicando no link “Cancelar assinatura” ou “Descadastrar”, disponíveis em todas as comunicações da ARSIT. Para mais informações, consulte nossa Política de Privacidade.
        </p>
      </form>
    );
  };