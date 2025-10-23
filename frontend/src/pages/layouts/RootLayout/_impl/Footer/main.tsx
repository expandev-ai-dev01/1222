/**
 * @component Footer
 * @summary Site footer with contact info and links
 * @domain core
 * @type layout-component
 * @category navigation
 */

import { Link } from 'react-router-dom';
import { Container } from '@/core/components/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">Pães do Ale</h3>
            <p className="text-sm">
              Padaria artesanal com produtos frescos e de qualidade desde 2020.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-primary-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-primary-400 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: contato@paesdoale.com.br</li>
              <li>Endereço: Rua das Padarias, 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm">
          <p>&copy; {currentYear} Pães do Ale. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
