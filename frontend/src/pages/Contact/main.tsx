/**
 * @page ContactPage
 * @summary Contact page with form and location info
 * @domain public
 * @type form-page
 * @category public
 */

import { Container } from '@/core/components/Container';
import { Button } from '@/core/components/Button';

export const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be implemented with backend integration
    alert('Formulário será implementado com integração ao backend');
  };

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl font-display font-bold text-center mb-12">Entre em Contato</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <Button type="submit" fullWidth>
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Endereço</h3>
                <p className="text-gray-700">
                  Rua das Padarias, 123
                  <br />
                  Bairro Centro
                  <br />
                  São Paulo - SP
                  <br />
                  CEP: 01234-567
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-700">(11) 1234-5678</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">contato@paesdoale.com.br</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-700">
                  Segunda a Sexta: 6h às 20h
                  <br />
                  Sábado: 6h às 18h
                  <br />
                  Domingo: 7h às 13h
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
