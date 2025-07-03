# Projeto React – Consumo de API de Cachorros com Axios

Este repositório contém um exemplo simples e didático de como consumir uma API pública utilizando **React + Axios**, com separação de componentes e aplicação de estilos básicos.

## Sobre o Projeto

Este projeto foi desenvolvido como continuação do plano de aula ministrado de forma voluntária no programa da comunidade FLY.

Aqui as alunas aprendem a:
- Fazer requisições HTTP com `axios`;
- Usar `useState` e `useEffect`;
- Trabalhar com componentes reutilizáveis;
- Aplicar tratamento de carregamento e erro;
- Atualizar dados dinamicamente com clique de botão.

---

##  Funcionalidades

- Busca automática de uma imagem de cachorro ao carregar a página;
- Botão "Buscar outro cachorro" para buscar nova imagem a qualquer momento;
- Tratamento de erros e estado de carregamento.

---

##  Estrutura do Projeto

src/
├── App.jsx
├── DogExample.jsx
└── components/
├── DogImage.jsx
├── Loading.jsx
└── Error.jsx


---


### Como rodar o projeto

````
1.  Clone o repositório:
`git clone https://github.com/ThainaSantoss/api-dogs-exercicio.git

2.  Acesse a pasta:

`cd api-dogs-exercicio 

3. Instale as dependências:

npm install

4. Instale o axios:

`npm install axios` 

5.  Inicie o servidor de desenvolvimento:

npm run dev

````

##  API utilizada
Este projeto utiliza a Dog CEO API:
📍 https://dog.ceo/dog-api/

## Endpoint principal:

https://dog.ceo/api/breeds/image/random

## 🤝 Sobre o Programa FLY

A **Fly** é uma ONG que forma protagonistas sociais por meio da educação socioemocional, da tecnologia e do empreendedorismo. Com uma metodologia própria e pioneira no Brasil, já foi impactados mais de **8 mil vidas diretamente** e **300 mil indiretamente** na América Latina, inspirando jovens, mulheres, imigrantes e pessoas de grupos sub-representados a transformarem suas trajetórias com autonomia, renda e equidade.

 Observação: 
Este repositório é focado exclusivamente no consumo da API dos cachorros com axios e botão de atualização. 

