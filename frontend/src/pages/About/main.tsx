/**
 * @page AboutPage
 * @summary About page with company history and values
 * @domain public
 * @type content-page
 * @category public
 */

import { Container } from '@/core/components/Container';

export const AboutPage = () => {
  return (
    <div className="py-16">
      <Container size="small">
        <h1 className="text-4xl font-display font-bold text-center mb-8">Sobre Nós</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            A Pães do Ale nasceu em 2020 com o sonho de levar produtos artesanais de qualidade para
            a comunidade. Nossa padaria é resultado da paixão pela panificação e do compromisso com
            a excelência.
          </p>

          <h2 className="text-2xl font-display font-semibold mt-8 mb-4">Nossa História</h2>
          <p className="text-gray-700 mb-6">
            Fundada por Ale, um apaixonado por panificação artesanal, nossa padaria começou como um
            pequeno negócio familiar e cresceu graças ao apoio da comunidade e à qualidade dos
            nossos produtos.
          </p>

          <h2 className="text-2xl font-display font-semibold mt-8 mb-4">Nossos Valores</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Qualidade em primeiro lugar</li>
            <li>Ingredientes frescos e selecionados</li>
            <li>Atendimento personalizado</li>
            <li>Compromisso com a comunidade</li>
            <li>Sustentabilidade e responsabilidade social</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold mt-8 mb-4">Nossa Missão</h2>
          <p className="text-gray-700">
            Proporcionar momentos especiais através de produtos artesanais de qualidade, feitos com
            dedicação e carinho, mantendo viva a tradição da panificação artesanal.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
