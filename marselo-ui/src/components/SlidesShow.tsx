import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    imageUrl: '/cloud-computing.png',
    title: 'Cases de Sucesso',
    description: 'Nossa empresa tem experiência em projetos, implentações, suporte, manutenção e gerenciamento nos três maiores datacenters do país, atuando com suporte e manutenção de diversas empresas.',
    link: '/cases-de-sucesso'
  },
  {
    id: 2,
    imageUrl: '/ai.png',
    title: 'IA - Inteligencia Artificial',
    description: 'Saiba como pode ajudar sua empresa.',
    link: '/inteligencia-artificial'
  },
  {
    id: 3,
    imageUrl: '/brasil-investimentos.png',
    title: 'Cases de sucesso Governo',
    description: 'Em 2018 a ARSIT Tecnologia começou a atender em todo o Brasil clientes governamentais, acompanhe aqui alguns casos de sucesso.',
    link: '/governo'
  },
];

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full mx-auto bg-white shadow-lg overflow-hidden">
      <div className="relative h-80 md:h-[28rem] bg-gray-100 flex justify-center items-center">
        <img
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay retangular */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-2xl font-bold text-white mb-3">{slides[currentSlide].title}</h3>
            <p className="text-base text-gray-200 mb-4">{slides[currentSlide].description}</p>
            <a
              href={slides[currentSlide].link} // Adicione a propriedade 'link' nos seus slides
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
            >
              Saiba Mais →
            </a>
          </div>
        </div>
      </div>

      {/* Botões quadrados */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-600 text-white p-3 hover:bg-sky-700 shadow-md"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-600 text-white p-3 hover:bg-sky-700 shadow-md"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicadores quadrados */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-8 ${currentSlide === index ? 'bg-sky-600' : 'bg-gray-300'} transition-colors`}
          />
        ))}
      </div>
    </div>
  );
}