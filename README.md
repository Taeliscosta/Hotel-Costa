# Hotel Costa

Sistema de reservas para uma rede fictícia de hotéis.

## Objetivo

O projeto permitirá:

- Cadastro de clientes
- Cadastro de quartos
- Realização de reservas
- Cancelamento de reservas
- Consulta de reservas

## Tecnologias

### Etapa 1
- Node.js
- Express
- HTML
- CSS
- Bootstrap

### Etapa 2
- React
- Hooks
- Consumo de API

### Etapa 3
- Banco de dados
- Docker
- REST API
- Arquitetura avançada

---

# Classes do domínio

## Cliente
- id
- nome
- email
- telefone

## Quarto
- numero
- tipo
- preco
- disponivel

## Reserva
- id
- dataEntrada
- dataSaida
- status

## SistemaHotel
- clientes
- quartos
- reservas

---

# Relações entre classes

- Cliente possui várias reservas
- Quarto pode estar em várias reservas
- SistemaHotel gerencia clientes, quartos e reservas

---

# Autor

Taelis Holanda
