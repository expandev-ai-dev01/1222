# Pães do Ale - Frontend

Site institucional para padaria artesanal com catálogo de produtos e serviços.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/        # Componentes UI genéricos
│   └── lib/              # Configurações de bibliotecas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   ├── About/            # Página sobre
│   ├── Contact/          # Página de contato
│   ├── Products/         # Catálogo de produtos
│   ├── Services/         # Serviços oferecidos
│   └── NotFound/         # Página 404
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente no .env
```

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

## Variáveis de Ambiente

- `VITE_API_URL`: URL base da API backend
- `VITE_API_VERSION`: Versão da API (padrão: v1)
- `VITE_API_TIMEOUT`: Timeout das requisições em ms (padrão: 30000)

## Páginas

- `/` - Página inicial com hero section e destaques
- `/sobre` - História e valores da empresa
- `/produtos` - Catálogo de produtos por categoria
- `/servicos` - Serviços oferecidos (encomendas, coffee break, etc.)
- `/contato` - Formulário de contato e informações

## Componentes Core

- `Button` - Botão com variantes (primary, secondary, outline, ghost)
- `Container` - Container responsivo com tamanhos configuráveis
- `LoadingSpinner` - Indicador de carregamento

## Layouts

- `RootLayout` - Layout principal com header e footer
  - `Header` - Navegação principal responsiva
  - `Footer` - Rodapé com links e informações de contato

## Integração com Backend

O frontend está configurado para integrar com a API REST do backend:

- **Public endpoints**: `/api/v1/external/*` (sem autenticação)
- **Internal endpoints**: `/api/v1/internal/*` (com autenticação)

Clientes HTTP configurados em `src/core/lib/api.ts`:
- `publicClient` - Para endpoints públicos
- `authenticatedClient` - Para endpoints autenticados

## Próximos Passos

1. Implementar integração com backend para formulário de contato
2. Adicionar catálogo dinâmico de produtos
3. Implementar sistema de encomendas online
4. Adicionar galeria de imagens dos produtos
5. Implementar sistema de avaliações

## Licença

Proprietary - Todos os direitos reservados