# Blog Tech Challenge - Frontend

Frontend desenvolvido para o **Tech Challenge - Fase 3 da Pós-Tech FIAP**, responsável pela interface de uma plataforma de blogging educacional.

A aplicação foi desenvolvida em **React** e consome a API REST criada nas fases anteriores do projeto.

## Funcionalidades

- Listagem de posts
- Visualização individual de posts
- Busca de posts por título, conteúdo e autor
- Autocomplete com sugestões de títulos
- Criação de novos posts
- Edição de posts existentes
- Exclusão de posts
- Área administrativa
- Login de professor
- Proteção de rotas administrativas
- Persistência da autenticação no navegador
- Layout responsivo para desktop e dispositivos móveis
- Integração com API REST
- Execução utilizando Docker
- Pipeline de integração contínua com GitHub Actions

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- Axios
- CSS
- Docker
- Git
- GitHub Actions

## Arquitetura

O frontend foi organizado separando páginas, componentes reutilizáveis, serviços e gerenciamento de autenticação.

```text
src/
├── components/
│   ├── Header.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Post.jsx
│   ├── Login.jsx
│   ├── CriarPost.jsx
│   ├── EditarPost.jsx
│   └── Admin.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

O fluxo principal da aplicação ocorre da seguinte forma:

```text
Usuário
   ↓
Interface React
   ↓
Axios
   ↓
API REST Node.js / Express
   ↓
PostgreSQL
```

## Rotas

| Rota          | Descrição                        | Acesso    |
| ------------- | -------------------------------- | --------- |
| `/`           | Listagem e busca de posts        | Público   |
| `/post/:id`   | Visualização completa de um post | Público   |
| `/login`      | Login do professor               | Público   |
| `/admin`      | Administração dos posts          | Protegido |
| `/criar`      | Criação de post                  | Protegido |
| `/editar/:id` | Edição de post                   | Protegido |

## Autenticação

Para fins acadêmicos e de demonstração, foi implementada uma autenticação simplificada no frontend.

Credenciais de demonstração:

```text
Usuário: professor
Senha: 1234
```

O estado de autenticação é gerenciado utilizando **Context API** e armazenado no `localStorage`, permitindo manter a sessão após a atualização da página.

> Esta implementação tem finalidade acadêmica. Em um ambiente de produção, a autenticação e autorização devem ser realizadas no backend utilizando mecanismos seguros, como hash de senhas e tokens ou sessões.

## Integração com o backend

Por padrão, o frontend utiliza a API disponível em:

```text
http://localhost:3000
```

O backend deve estar em execução antes de utilizar as funcionalidades que dependem dos posts.

## Executando localmente

### Pré-requisitos

- Node.js 22
- npm
- Backend da aplicação em execução

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/brgcostadev/blog-tech-challenge-tres-frontend.git
cd blog-tech-challenge-tres-frontend
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação ficará disponível normalmente em:

```text
http://localhost:5173
```

## Executando com Docker

Construa a imagem:

```bash
docker build -t fiap-frontend .
```

Execute o container:

```bash
docker run --rm -p 5173:5173 fiap-frontend
```

Acesse:

```text
http://localhost:5173
```

O backend deverá continuar disponível na porta `3000`.

## Build de produção

Para gerar o build:

```bash
npm run build
```

Os arquivos gerados ficam no diretório:

```text
dist/
```

## CI - GitHub Actions

O projeto possui um workflow do **GitHub Actions** executado automaticamente em pushes e pull requests para a branch `main`.

O pipeline realiza:

```text
Checkout do código
        ↓
Configuração do Node.js 22
        ↓
Instalação das dependências
        ↓
Build da aplicação
```

O workflow está localizado em:

```text
.github/workflows/ci.yml
```

## Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela.

Foram utilizados media queries e layouts flexíveis para proporcionar uma boa experiência tanto em desktop quanto em dispositivos móveis.

## Decisões técnicas

O projeto utiliza componentes funcionais e Hooks do React, incluindo `useState` e `useEffect`.

O **React Router DOM** é responsável pela navegação entre páginas e pelas rotas da aplicação.

O **Axios** centraliza a comunicação com a API REST.

A **Context API** gerencia o estado global relacionado à autenticação.

O componente `ProtectedRoute` impede o acesso pela interface às páginas administrativas quando o usuário não está autenticado.

## Desafios encontrados

Durante o desenvolvimento, alguns dos principais desafios foram:

- Integração entre frontend e backend executados separadamente
- Configuração de CORS na API
- Gerenciamento de rotas públicas e protegidas
- Persistência do estado de autenticação
- Configuração do ambiente Docker
- Compatibilidade da versão do Node.js com o Vite
- Configuração do pipeline de integração contínua

## Melhorias futuras

Algumas evoluções possíveis para o projeto:

- Autenticação e autorização realizadas pelo backend
- Utilização de tokens JWT ou sessões
- Tratamento mais completo de erros
- Indicadores de carregamento
- Testes automatizados dos componentes React
- Paginação dos posts
- Deploy automatizado da aplicação

## Autor

**Bruno Costa**

Projeto desenvolvido para o Tech Challenge - Fase 3 da Pós-Tech FIAP.
