# 📦 Estoque Master — Sistema de Gestão de Estoque

Bem-vindo ao **Estoque Master** (StockManager), uma plataforma moderna para monitoramento, organização e controle de estoque desenvolvida em **.NET** e **Angular**.

Este documento fornece o guia completo de configuração, execução e arquitetura do projeto.

---

## 🚀 Como Começar

### Pré-requisitos

Certifique-se de ter instalado:
*   **[.NET SDK (versão 9 ou 10)](https://dotnet.microsoft.com/download)** (Backend)
*   **[Node.js 18+](https://nodejs.org/)** (Frontend)
*   **Angular CLI** (Opcional, pode ser executado via `npx`)

---

## 🛠️ Instalação e Execução

### 1. Clonar o Repositório
```bash
git clone <url-do-repositorio>
cd newrepositorygithub
```

### 2. Configurar e Executar o Backend
O backend utiliza **ASP.NET Core** com **SQLite** e Entity Framework Core.
```bash
cd backend
dotnet restore
dotnet build
dotnet run
```
> [!IMPORTANT]
> O backend está configurado para rodar na porta **http://localhost:8080**.
> Na primeira execução, o sistema cria automaticamente o banco `Data/stock.db` e o inicializa com dados de demonstração (seeding automático).

### 3. Configurar e Executar o Frontend
O frontend utiliza **Angular 21** com **Angular Material** e modo **Zoneless**.
```bash
cd ../frontend
npm install
npm start
```
> [!NOTE]
> A aplicação web estará disponível em **http://localhost:4200**.
> As requisições para `/api` são automaticamente redirecionadas para `http://localhost:8080` através do `proxy.conf.json`.

---

## 📖 Funcionalidades da Aplicação

### 1. Painel de Controle (Dashboard)
Ao abrir a aplicação, a tela inicial exibe indicadores em tempo real:
*   **Cards de Estatísticas:** Total de produtos cadastrados, quantidade total de itens em estoque e valor monetário total do patrimônio (em R$).
*   **Alertas de Risco:** Monitoramento visual de itens em **Estoque Baixo** (abaixo do nível mínimo) e **Itens Esgotados** (estoque zerado).
*   **Ações Rápidas:** Acesso direto para cadastrar novo produto ou visualizar a listagem completa.

### 2. Gestão de Produtos (Listagem)
No menu lateral, acesse **"Produtos"**:
*   **Busca:** Pesquise produtos pelo nome ou descrição em tempo real.
*   **Filtro por Categoria:** Visualize itens específicos (ex.: Eletrônicos, Móveis, Acessórios, Escritório).
*   **Ordenação e Paginação:** Ordene colunas clicando no cabeçalho e navegue por páginas.
*   **Indicadores de Status:**
    *   🟢 **Em Estoque:** Quantidade adequada.
    *   🟡 **Estoque Baixo:** Quantidade menor ou igual ao estoque mínimo definido.
    *   🔴 **Esgotado:** Quantidade zerada.

### 3. Cadastro e Edição
*   **Adicionar:** Clique em **"Novo Produto"** ou no ícone **"+"**.
*   **Editar:** Clique no ícone de lápis em qualquer linha da tabela.
*   **Preview Dinâmico:** Visualização prévia do card com imagem e preço em tempo real durante a digitação.
*   **Campos de Validação:** Nome obrigatório, categoria, preço, quantidade e nível mínimo de estoque.

### 4. Exclusão com Confirmação
*   Ao clicar no ícone de lixeira, um modal de confirmação previne exclusões acidentais.

---

## 🏗️ Estrutura do Projeto

```txt
newrepositorygithub/
├── backend/                  # ASP.NET Core Web API
│   ├── Controllers/          # Endpoints REST (ProductsController)
│   ├── Data/                 # AppDbContext e DbInitializer (Seed inicial)
│   ├── DTOs/                 # Objetos de transferência de dados (Create/Update)
│   ├── Models/               # Entidades de domínio (Product)
│   ├── appsettings.json      # Configuração da aplicação (Porta 8080)
│   └── backend.http          # Arquivo para testes de API via IDE
├── frontend/                 # Aplicação Angular (SPA)
│   ├── src/app/pages/        # Dashboard, Lista de Produtos e Formulário
│   ├── src/app/components/   # Componentes compartilhados (Modal de confirmação)
│   ├── src/app/services/     # Integração HTTP com a API
│   └── proxy.conf.json       # Proxy reverso local para localhost:8080
└── .github/workflows/        # Pipeline de CI/CD para deploy no Azure
```

---

## 🧪 Resolução de Problemas

*   **Conflito de Porta:** Se a porta 8080 ou 4200 estiver em uso, encerre o processo anterior antes de reiniciar o serviço.
*   **CORS / Comunicação:** O frontend está configurado para consumir `/api` via proxy reverso no desenvolvimento (`npm start`) e relativo em produção quando hospedado junto ao backend.
*   **Banco de Dados:** O arquivo SQLite fica localizado em `backend/Data/stock.db`. Caso deseje resetar os dados, basta deletar o arquivo e iniciar o backend novamente.

---
*Estoque Master — Gestão inteligente e simplificada de inventário.*
