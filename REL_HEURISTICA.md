# Relatório de Avaliação Heurística — Projeto 1

**Autor:** Taélis Holanda
**Projeto:** Hotel Costa
**Disciplina:** Programação Web
**Data:** 14/08/2026
**Score Lighthouse (Acessibilidade):** 69 / 100

---

## Objetivo

Este relatório apresenta uma avaliação heurística do frontend do Projeto 1 — Hotel Costa, utilizando as 10 heurísticas de usabilidade de Jakob Nielsen.

A avaliação foi realizada considerando as telas de clientes, quartos e reservas, além da navegação e interação com os formulários da aplicação.

Também foram realizadas verificações técnicas de acessibilidade utilizando o Lighthouse e testes manuais relacionados à navegação por teclado e ao comportamento da aplicação SPA.

---

# Problema 1

* **Onde:** Formulários de cadastro de clientes, quartos e reservas.
* **O que observei:** Alguns elementos de formulário, principalmente elementos de seleção, não possuem elementos `<label>` associados. O Lighthouse identificou que os elementos de formulário e seleção não possuem etiquetas associadas.
* **Heurística violada:** #5 — Prevenção de erros.
* **Gravidade:** 3
* **Correção proposta:** Adicionar elementos `<label>` associados corretamente aos campos utilizando os atributos `for` e `id`.
* **Evidência:** Resultado do Lighthouse — "Os elementos de formulário não têm etiquetas associadas" e "Os elementos de seleção não têm elementos de `<label>` associados".

---

# Problema 2

* **Onde:** Documento HTML principal.
* **O que observei:** O elemento `<html>` não possui o atributo `lang`. Isso pode dificultar a interpretação correta do conteúdo por leitores de tela.
* **Heurística violada:** #6 — Reconhecer em vez de lembrar.
* **Gravidade:** 2
* **Correção proposta:** Adicionar o idioma da página ao elemento HTML:

```html
<html lang="pt-BR">
```

* **Evidência:** Resultado do Lighthouse — "O elemento `<html>` não tem um atributo `[lang]`".

---

# Problema 3

* **Onde:** Estrutura principal da página.
* **O que observei:** A página não possui um elemento `<main>` que identifique o conteúdo principal da aplicação. O Lighthouse identificou a ausência de um ponto de referência principal.
* **Heurística violada:** #6 — Reconhecer em vez de lembrar.
* **Gravidade:** 2
* **Correção proposta:** Utilizar elementos semânticos HTML5, principalmente `<main>`, para identificar o conteúdo principal da aplicação.
* **Evidência:** Resultado do Lighthouse — "O documento não tem um ponto de referência principal".

---

# Problema 4

* **Onde:** Cadastro de clientes, quartos e reservas.
* **O que observei:** Durante operações que dependem de requisições à API, não existe um indicador visual de carregamento claramente apresentado ao usuário. O usuário pode ficar sem saber se a operação está sendo processada.
* **Heurística violada:** #1 — Visibilidade do status do sistema.
* **Gravidade:** 3
* **Correção proposta:** Adicionar estados de carregamento, como "Salvando...", "Carregando..." ou um indicador visual enquanto o frontend aguarda a resposta da API.
* **Evidência:** Teste manual das operações de cadastro e remoção.

---

# Problema 5

* **Onde:** Listas de clientes, quartos e reservas.
* **O que observei:** As listas são atualizadas dinamicamente pelo JavaScript, porém não foi implementado `aria-live` nas regiões que recebem essas alterações.
* **Heurística violada:** #1 — Visibilidade do status do sistema.
* **Gravidade:** 3
* **Correção proposta:** Adicionar `aria-live="polite"` nas regiões atualizadas dinamicamente para que leitores de tela sejam informados sobre as alterações.

Exemplo:

```html
<ul id="lista-clientes" aria-live="polite">
```

* **Evidência:** Código dos arquivos `clienteView.js` e `reservaView.js`.

---

# Problema 6

* **Onde:** Tratamento de erros do frontend.
* **O que observei:** Quando ocorre um erro na comunicação com a API, existe o risco de a informação ficar restrita ao console do navegador, sem uma mensagem clara apresentada diretamente na interface.
* **Heurística violada:** #9 — Reconhecer, diagnosticar e recuperar-se de erros.
* **Gravidade:** 3
* **Correção proposta:** Criar uma área de mensagens no frontend para apresentar erros de maneira clara, por exemplo: "Não foi possível cadastrar o cliente. Verifique os dados e tente novamente."
* **Evidência:** Arquivo `api.js` e chamadas dos services do frontend.

---

# Problema 7

* **Onde:** Após operações realizadas na SPA.
* **O que observei:** Como a aplicação atualiza o conteúdo dinamicamente sem recarregar a página, o foco do teclado pode não ser reposicionado após alterações ou remoções.
* **Heurística violada:** #3 — Controle e liberdade.
* **Gravidade:** 3
* **Correção proposta:** Gerenciar o foco após alterações utilizando `.focus()` para direcionar o usuário para um elemento coerente.
* **Evidência:** Teste manual de navegação por teclado.

---

# Problema 8

* **Onde:** Formulários de cadastro.
* **O que observei:** Algumas validações são realizadas pelo backend, mas poderiam também ser realizadas antes do envio no frontend para prevenir erros e evitar requisições desnecessárias.
* **Heurística violada:** #5 — Prevenção de erros.
* **Gravidade:** 2
* **Correção proposta:** Implementar validações no frontend para campos obrigatórios, formato de email, CPF e outros dados antes de realizar o `fetch`.
* **Evidência:** Formulários de clientes, quartos e reservas.

---

# Problema 9

* **Onde:** Remoção de clientes, quartos e reservas.
* **O que observei:** A remoção de registros ocorre diretamente após o acionamento do botão, sem uma etapa de confirmação ou possibilidade de desfazer a operação.
* **Heurística violada:** #3 — Controle e liberdade.
* **Gravidade:** 2
* **Correção proposta:** Adicionar uma confirmação antes da exclusão, como "Tem certeza que deseja remover este registro?".
* **Evidência:** Botões de remoção da aplicação.

---

# Problema 10

* **Onde:** Interface geral.
* **O que observei:** É necessário manter um padrão visual consistente para mensagens de sucesso, erro e carregamento em todas as operações do sistema.
* **Heurística violada:** #4 — Consistência e padrões.
* **Gravidade:** 2
* **Correção proposta:** Criar um componente ou padrão visual único para mensagens de sucesso, erro e carregamento.
* **Evidência:** Telas de clientes, quartos e reservas.

---

# Verificações Técnicas de Acessibilidade

## A) Lighthouse

Foi realizada uma análise utilizando o Lighthouse na versão publicada do frontend.

**Score de acessibilidade: 69 / 100**

### Problemas identificados

1. Elementos de formulário sem etiquetas associadas.
2. Elementos `<select>` sem `<label>` associado.
3. Elemento `<html>` sem atributo `lang`.
4. Ausência de um ponto de referência principal (`<main>`).

### Auditorias aprovadas

O Lighthouse também identificou vários pontos positivos:

* Botões possuem nomes acessíveis.
* Contraste de cores considerado suficiente.
* Documento possui `<title>`.
* Estrutura das listas está adequada.
* Áreas de toque possuem tamanho adequado.
* Ordem dos títulos está adequada.
* Não existe `aria-hidden="true"` aplicado ao `<body>`.
* O zoom da página não está desabilitado.

---

## B) Navegação por teclado

Foi realizada uma verificação manual utilizando a tecla `Tab`.

Os seguintes pontos devem ser considerados:

* [ ] Todos os campos podem ser alcançados pelo teclado.
* [ ] Todos os botões podem ser alcançados pelo teclado.
* [ ] A ordem do foco segue uma sequência lógica.
* [ ] O foco visual é claramente identificável.
* [ ] Os botões podem ser ativados utilizando Enter ou Espaço.

---

## C) Inspeção visual

Foram considerados os seguintes pontos:

* [x] O documento possui `<title>`.
* [ ] Todos os campos possuem `<label>` associado.
* [x] O contraste de cores foi aprovado pelo Lighthouse.
* [ ] As atualizações dinâmicas possuem `aria-live`.
* [x] Os botões possuem nomes acessíveis.
* [x] Os elementos interativos utilizam elementos HTML apropriados.

---

## D) Aspectos específicos da SPA

### Loading State

**Situação:** Problema identificado.

Durante as requisições realizadas pela API não existe um estado visual de carregamento claramente apresentado ao usuário.

**Heurística relacionada:** #1 — Visibilidade do status do sistema.

**Correção proposta:** Adicionar indicadores de carregamento durante operações assíncronas.

---

### aria-live

**Situação:** Melhoria necessária.

As listas de clientes, quartos e reservas são atualizadas dinamicamente utilizando JavaScript.

A aplicação deve utilizar `aria-live` para comunicar essas alterações aos usuários de leitores de tela.

**Correção proposta:**

```html
<ul id="lista-clientes" aria-live="polite">
```

---

### Gestão de foco

**Situação:** Melhoria necessária.

Após operações de cadastro ou remoção, o foco deve ser reposicionado de maneira coerente para evitar que usuários que navegam pelo teclado percam sua posição na interface.

**Correção proposta:** Utilizar `.focus()` após operações de atualização ou remoção quando necessário.

---

### Erros sem reload

**Situação:** Problema identificado.

As mensagens de erro da API devem ser apresentadas diretamente na interface, sem depender do console do navegador.

**Correção proposta:** Criar uma área de mensagens para apresentar erros de forma clara ao usuário.

---

# Resumo

* **Total de problemas:** 10
* **Problemas de gravidade 3–4:** 5
* **Problemas de acessibilidade:** 4
* **Problemas específicos de SPA:** 4
* **Score Lighthouse:** 69 / 100

## Os 3 problemas que serão corrigidos primeiro no E7

### 1. Corrigir labels dos formulários

Associar corretamente todos os campos e elementos `<select>` aos seus respectivos `<label>`.

### 2. Melhorar feedback e acessibilidade da SPA

Implementar estados de carregamento, `aria-live` e gerenciamento adequado do foco durante as atualizações dinâmicas.

### 3. Melhorar o tratamento de erros

Apresentar mensagens de erro diretamente na interface, permitindo que o usuário entenda o problema e saiba como agir.

---

# Conclusão

A avaliação heurística mostrou que o Hotel Costa atende às principais funcionalidades propostas para o Projeto 1, porém existem oportunidades de melhoria principalmente relacionadas à acessibilidade, feedback das operações, tratamento de erros e gerenciamento de foco.

O Lighthouse apresentou um score de **69/100** em acessibilidade. Os principais problemas identificados foram a ausência de labels associados aos controles de formulário, a ausência do atributo `lang` no documento HTML e a ausência de um elemento `<main>`.

Os problemas encontrados serão utilizados como base para as melhorias da próxima etapa do projeto.
