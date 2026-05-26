# Hotel Costa

Sistema de gerenciamento hoteleiro desenvolvido para a disciplina de Programação Web.

O projeto está sendo desenvolvido em etapas, evoluindo de uma aplicação SPA simples para uma arquitetura fullstack completa.

---

# Objetivo do Projeto

O Hotel Costa é um sistema de gerenciamento de hotel que permite:

* Cadastro de clientes
* Gerenciamento de quartos
* Controle de reservas
* Regras de disponibilidade de quartos
* Consumo de API REST
* Arquitetura backend em camadas

---

# Tecnologias Utilizadas

## Backend

* Node.js
* Express
* JavaScript ES Modules

## Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap

## Ferramentas

* Git
* GitHub
* Thunder Client
* VSCode

---

# Estrutura do Projeto

```txt
HotelCosta/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── pages/
│   └── index.html
│
├── .gitignore
└── README.md
```

---

# Arquitetura Utilizada

O backend segue arquitetura em camadas:

```txt
Routes
→ Controllers
→ Services
→ Models
```

## Responsabilidades

### Routes

Responsáveis pelas rotas da API.

### Controllers

Responsáveis por receber requisições e retornar respostas.

### Services

Responsáveis pelas regras de negócio.

### Models

Responsáveis pelo gerenciamento dos dados.

### Middleware

Responsáveis por logs e tratamento de erros.

---

# Entidades do Sistema

## Cliente

```txt
- id
- nome
- email
- telefone
- cpf
```

## Quarto

```txt
- id
- numero
- tipo
- preco
- disponivel
```

## Reserva

```txt
- id
- clienteId
- quartoId
- dataEntrada
- dataSaida
```

# Relações entre Entidades

## Cliente → Reserva
Relação 1:N onde um cliente pode possuir várias reservas.

## Quarto → Reserva
Relação 1:N onde um quarto pode participar de várias reservas ao longo do tempo.

---

# Funcionalidades Implementadas

## Clientes

* Criar cliente
* Listar clientes
* Buscar cliente por ID
* Atualizar cliente
* Remover cliente

## Quartos

* Criar quarto
* Listar quartos
* Buscar quarto por ID
* Atualizar quarto
* Remover quarto

## Reservas

* Criar reserva
* Listar reservas
* Verificação de disponibilidade do quarto

---

# Regras de Negócio

* Um quarto não pode ser reservado se estiver indisponível
* Cliente precisa existir para realizar reserva
* Quarto precisa existir para realizar reserva
* CPF é obrigatório no cadastro do cliente

---

# Instalação do Projeto

## Clonar repositório

```bash
git clone https://github.com/Taeliscosta/Hotel-Prime.git
```

---

# Instalar dependências do backend

Acesse a pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

---

# Dependências utilizadas

## Express

Instalação:

```bash
npm install express
```

---

# Executar o Backend

Dentro da pasta backend:

```bash
npm run dev
```

Servidor:

```txt
http://localhost:3000
```

---

# Rotas da API

## Clientes

| Método | Rota          | Descrição         |
| ------ | ------------- | ----------------- |
| GET    | /clientes     | Listar clientes   |
| GET    | /clientes/:id | Buscar cliente    |
| POST   | /clientes     | Criar cliente     |
| PUT    | /clientes/:id | Atualizar cliente |
| DELETE | /clientes/:id | Remover cliente   |

---

## Quartos

| Método | Rota         | Descrição        |
| ------ | ------------ | ---------------- |
| GET    | /quartos     | Listar quartos   |
| GET    | /quartos/:id | Buscar quarto    |
| POST   | /quartos     | Criar quarto     |
| PUT    | /quartos/:id | Atualizar quarto |
| DELETE | /quartos/:id | Remover quarto   |

---

## Reservas

| Método | Rota      | Descrição       |
| ------ | --------- | --------------- |
| GET    | /reservas | Listar reservas |
| POST   | /reservas | Criar reserva   |

---

# Exemplo de JSON

## Cliente

```json
{
  "nome": "Taelis Costa",
  "email": "taelis@email.com",
  "telefone": "83999999999",
  "cpf": "12345678900"
}
```

---

## Quarto

```json
{
  "numero": 101,
  "tipo": "Luxo",
  "preco": 450
}
```

---

## Reserva

```json
{
  "clienteId": 1,
  "quartoId": 1,
  "dataEntrada": "2026-06-01",
  "dataSaida": "2026-06-05"
}
```

---

# Melhorias Futuras

* Integração completa do frontend SPA
* Banco de dados
* Docker
* Autenticação
* Login de usuários
* Validação de CPF
* Check-in e check-out
* Dashboard administrativo

---

# Autor

Projeto desenvolvido por Taelis Costa para a disciplina de Programação Web.
