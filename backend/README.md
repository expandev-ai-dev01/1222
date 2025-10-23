# Pães do Ale - Backend API

Backend REST API for Pães do Ale bakery website.

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Validation**: Zod
- **Architecture**: REST API

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── types/                  # TypeScript type definitions
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Building for Production

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Linting

Run ESLint:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check

```
GET /health
```

Returns server health status.

### API Versioning

The API uses URL path versioning:
- `/api/v1/external/*` - Public endpoints
- `/api/v1/internal/*` - Authenticated endpoints

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| CORS_ORIGINS | Allowed CORS origins | localhost:3000,localhost:3001,localhost:5173 |
| CACHE_TTL | Cache time-to-live (seconds) | 3600 |
| CACHE_CHECK_PERIOD | Cache check period (seconds) | 600 |

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Follow ESLint configuration
- Use 2 spaces for indentation
- Maximum line length: 120 characters
- Use single quotes for strings

### Naming Conventions

- Files: camelCase (e.g., `userService.ts`)
- API routes: kebab-case (e.g., `/api/v1/internal/product-category`)
- Functions: camelCase with action verbs
- Types/Interfaces: PascalCase
- Constants: UPPER_SNAKE_CASE

### Testing

- Write unit tests for all services
- Write integration tests for API endpoints
- Maintain test coverage above 80%
- Place test files alongside source files

## License

ISC