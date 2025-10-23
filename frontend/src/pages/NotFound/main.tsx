/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain public
 * @type error-page
 * @category public
 */

import { Link } from 'react-router-dom';
import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';

export const NotFoundPage = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-9xl font-display font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-display font-semibold mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button size="lg">Voltar para o Início</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
