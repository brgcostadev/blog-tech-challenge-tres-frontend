# Blog Tech Challenge - Frontend

Esse programa Frontend foi desenvolvido para o **Tech Challenge - Fase 3 da Pós-Tech FIAP**, sendo responsável pela interface de uma plataforma de blogging educacional.

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
- Backend da aplicação em execução (Link: https://github.com/brgcostadev/blog-tech-challenge-dois-backend)

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

Durante o desenvolvimento, alguns dos principais desafios foram problemas relacionados ao setup básico, devido a falta de clareza do que estava causando eles. Nos levou um tempo para descobrir que precisávamos alterar nossa configuração do Docker, também como seria necessário usar o CORS na API para compartilhar os recursos internos. Antes disso, porém, tivemos dificuldades em até ativar o programa e nos levou vários dias para descobrir que ter feito updates para uma versão mais nova de Node.js estava impossibilitando o uso do Vite. Um de nossos membros, Johannes, nem conseguiu usar o Vite até agora, então ele criou partes individuais como o styled components e a configuração CI/CD para o Bruno testar no programa inteiro.

Mesmo assim, devido a esses problemas de uso não conseguimos criar uma versão com o frontend e backend juntos, tendo que separá-los em dois programas ativados separadamente. Depois da entrega deste projeto, um de nossos objetivos é juntar ambos caso for necessário para a quarta fase. Outro seria obter um computador novo para nosso membro que não conseguiu rodar o projeto, caso os requerimentos mínimos de hardware realmente sejam a causa de tantos de nossos problemas.

Fora isso, vários erros que tivemos que resolver envolveram a persistência da autenticação, que até certo ponto não registrava o login corretamente, e em outro, não fazia o logout depois de usar o botão 'Sair' em nossos testes. Conseguimos corrigir tal, mas não sem remover nosso botão de 'Voltar' depois de criar um post. Parte disso foi devido ao gerenciamento inicialmente mal entendido das rotas públicas e protegidas, mas depois de ler a documentação de rotas e routers, conseguimos entender o que estávamos fazendo de errado no setup.

Em resumo, os maiores desafios que encontramos foram:

- Integração entre frontend e backend executados separadamente
- Configuração de CORS na API
- Gerenciamento de rotas públicas e protegidas
- Persistência do estado de autenticação
- Configuração do ambiente Docker
- Compatibilidade da versão do Node.js com o Vite
- Configuração do pipeline de integração contínua
- Hardware antigo que não consegue utilizar o Docker e Vite completamente


## Melhorias futuras

Algumas evoluções possíveis para o projeto:

- Backend e Frontend juntos em um único programa/repositório
- Autenticação e autorização realizadas pelo backend
- Utilização de tokens JWT ou sessões
- Tratamento mais completo de erros
- Indicadores de carregamento
- Testes automatizados dos componentes React
- Paginação dos posts
- Deploy automatizado da aplicação


## Autores

**Bruno Costa - RM 370510**
**Johannes Mattheus Krouwel - RM 372727**

Projeto desenvolvido para o Tech Challenge - Fase 3 da Pós-Tech FIAP.
