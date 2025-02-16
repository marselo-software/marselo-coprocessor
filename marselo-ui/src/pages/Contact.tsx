import { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../components/Navbar';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  position: string;
}

const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    position: ''
  });

  const positions: string[] = [
    'Desenvolvedor Front-end',
    'Desenvolvedor Back-end',
    'Designer UI/UX',
    'Gerente de Projetos',
    'Analista de QA'
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const subject = `Candidatura para vaga de ${formData.position}`;
    const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:vagas@arsit.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Trabalhe Conosco
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Selecione a Vaga
                </label>
                <select
                id="position"
                name="position"
                required
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={formData.position}
                >
                <option value="">Selecione uma posição</option>
                {positions.map((position) => (
                    <option key={position} value={position}>
                    {position}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo
                </label>
                <input
                type="text"
                name="name"
                id="name"
                required
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.name}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
                </label>
                <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.email}
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
                </label>
                <input
                type="tel"
                name="phone"
                id="phone"
                required
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.phone}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem/Carta de Apresentação
                </label>
                <textarea
                id="message"
                name="message"
                rows={4}
                required
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.message}
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Enviar Candidatura
            </button>
            </form>

            <div className="mt-8 text-center text-gray-600">
            <p>Ou envie diretamente para: vagas@arsit.com.br</p>
            </div>
        </div>
        </div>

    </div>
  );
};

export default CareersPage;