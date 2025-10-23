/**
 * @page ServicesPage
 * @summary Services offered page
 * @domain public
 * @type content-page
 * @category public
 */

import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  const services = [
    {
      title: 'Encomendas Especiais',
      description: 'Bolos, tortas e doces personalizados para suas festas e eventos especiais.',
      features: [
        'Bolos de aniversário personalizados',
        'Tortas para eventos',
        'Doces finos para festas',
        'Decoração temática',
      ],
    },
    {
      title: 'Coffee Break',
      description:
        'Serviço completo de coffee break para reuniões, eventos corporativos e workshops.',
      features: ['Salgados variados', 'Doces e bolos', 'Café e bebidas', 'Montagem e desmontagem'],
    },
    {
      title: 'Cestas de Café da Manhã',
      description: 'Cestas personalizadas com produtos frescos para presentear pessoas especiais.',
      features: ['Pães artesanais', 'Geleias e manteigas', 'Sucos naturais', 'Embalagem especial'],
    },
    {
      title: 'Delivery',
      description: 'Entregamos nossos produtos frescos no conforto da sua casa ou empresa.',
      features: [
        'Entrega rápida',
        'Produtos frescos',
        'Pedidos pelo WhatsApp',
        'Pagamento facilitado',
      ],
    },
  ];

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl font-display font-bold text-center mb-4">Nossos Serviços</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos diversos serviços para tornar seus momentos ainda mais especiais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-display font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-semibold mb-4">
            Interessado em nossos serviços?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento personalizado ou tirar suas
            dúvidas.
          </p>
          <Link to="/contato">
            <Button size="lg">Solicitar Orçamento</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
