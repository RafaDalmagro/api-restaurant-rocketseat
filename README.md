# 🍽️ API Restaurante

API desenvolvida para controle de pedidos de restaurante. Este projeto backend permite o gerenciamento de pedidos, clientes, produtos e outras operações essenciais em um sistema de restaurante.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Knex.js** (Query Builder)
- **SQLite3** (banco de dados local)
- **Zod** (validação de dados)
- **TSX** (para execução e watch de arquivos `.ts`)
- **Type Definitions** para Node e Express

## 📁 Estrutura do Projeto

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-restaurant.git
cd api-restaurant
```

2. Instale as dependências:
```bash
npm install
```

## Scripts Disponíveis

- Iniciar o servidor em modo desenvolvimento com TSX:
```bash
npm run dev
```

### Exemplos com Knex:

- Criar uma nova migration:
```bash
npm run knex migrate:make create_products
```

- Executar comandos do **Knex CLI**:
```bash
npm run knex migrate:latest
```

## 🧾 Funcionalidades da API (em desenvolvimento)

- 📦 CRUD de produtos  
- 👤 CRUD de clientes  
- 🧾 Registro e gerenciamento de pedidos  
- 🔍 Filtros e buscas por pedidos ou clientes  
- ✅ Validações com **Zod**  
- 🗃️ Banco de dados persistente com **SQLite3**

## 🗂️ Banco de Dados

O projeto utiliza **Knex.js** com **SQLite3**.  
As configurações estão em `knexfile.ts` e as migrations são armazenadas em `src/database/migrations`.

## ✅ Requisitos

- Node.js v18 ou superior  
- SQLite instalado (ou usar o banco local do projeto)  
- `npm` ou `yarn` para gerenciamento de pacotes

## ✍️ Autor e créditos

- 💻 Desenvolvido por: **Rafael Lima Dalmagro**  
- 📘 Projeto inspirado pela trilha da [Rocketseat](https://www.rocketseat.com.br/)

