/**
 * @page ProductsPage
 * @summary Products catalog page
 * @domain public
 * @type catalog-page
 * @category public
 */

import { Container } from '@/core/components/Container';

export const ProductsPage = () => {
  const categories = [
    {
      name: 'Pães',
      description: 'Pães artesanais frescos todos os dias',
      items: ['Pão Francês', 'Pão Integral', 'Pão de Forma', 'Pão de Queijo'],
    },
    {
      name: 'Doces',
      description: 'Doces e sobremesas irresistíveis',
      items: ['Bolo de Chocolate', 'Torta de Limão', 'Brigadeiro Gourmet', 'Brownie'],
    },
    {
      name: 'Salgados',
      description: 'Salgados assados e fritos',
      items: ['Coxinha', 'Empada', 'Esfiha', 'Pastel'],
    },
    {
      name: 'Bebidas',
      description: 'Cafés e bebidas especiais',
      items: ['Café Expresso', 'Cappuccino', 'Suco Natural', 'Chá Gelado'],
    },
  ];

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl font-display font-bold text-center mb-4">Nossos Produtos</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira nossa seleção de produtos artesanais, feitos com ingredientes de qualidade e muito
          carinho.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-display font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-semibold mb-4">Encomendas Especiais</h3>
          <p className="text-gray-700 mb-6">
            Fazemos encomendas personalizadas para festas, eventos e ocasiões especiais. Entre em
            contato para mais informações.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
