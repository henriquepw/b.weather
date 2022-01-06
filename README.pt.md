<p align="center">
  <img alt="Your icon here" src="./assets/icon.png" width="100"/>
</p>
<h1 align="center">
  B.Weather
</h1>

<!-- Badges -->
<p align="center">
  <!-- if your  -->
  <a href="https://github.com/henry-ns/b.weather/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-1EAE72.svg" />
  </a>

  <!-- License -->
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-1EAE72.svg" />
  </a>

  <!-- codefactor -->
  <a href="https://www.codefactor.io/repository/github/henry-ns/b.weather" alt="CodeFactor">
    <img src="https://www.codefactor.io/repository/github/henry-ns/b.weather/badge" />
  </a>

  <br/>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/henry-ns/b.weather?color=blue">

  <!-- version -->
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/henry-ns/b.weather">

  <!-- GitHub repo size -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/henry-ns/b.weather">

  <br/>

  <!-- langs -->
  <a href="./README.md" alt="CodeFactor">
    <img alt="en" src="https://img.shields.io/badge/lang-en-red.svg">
  </a>

  <a href="./README.pt.md" alt="CodeFactor">
    <img alt="pt" src="https://img.shields.io/badge/lang-pt-green.svg">
  </a>
</p>

<!-- summary -->
<p align="center">
  <a href="#clipboard-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando-localmente">Executando Localmente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-o-que-tem-dentro">O que tem dentro?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :clipboard: Descrição
B.Weather é um aplicativo informativo do clima atual e de previsões do tempo referente a sua localização. Foi desenvolvido inicialmente como desafio técnico de React Native na [Builders](https://platformbuilders.io).

## :iphone: Executando no Expo
  É possível ver a ultima versão do aplicativo disponível no Expo Store, para executar no seu smartphone, basta baixar o aplicativo Expo na loja de aplicativos e escanear o QRCode abaixo, ou acessando [aqui](https://exp.host/@henry-ns/b-weather?release-channel=default):

<p align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=exp://exp.host/@henry-ns/b-weather?release-channel=default"></img>
</p>

## :rocket: Executando Localmente

1. Baixar o repositório

  - Usando Git
```shell
  git clone https://github.com/henry-ns/b.weather.git
```
  - Usando Github CLI
```shell
  gh repo clone henry-ns/b.weather
```
  > :bulb: ou de outra forma que preferir

2. Instalação

Dentro da pasta do repositório, rode o seguinte comando:

  ```shell
    yarn install
  ```

  > :bulb: Pode-se usar qualquer gerenciador de pacotes da sua preferencia, como `npm` ou `pnpm`.

3. Execução

Para executar no emulador iOS, rode o seguinte comando:
  ```shell
    yarn ios
  ```

Para executar no emulador Android, rode o seguinte comando:
  ```shell
    yarn android
  ```

  > :bulb: Para informações mais detalhadas, acesse a documentação do [Expo](https://docs.expo.dev/tutorial/planning/)

## 🧐 O que tem dentro?

### :building_construction: Tecnologias
- [Expo](https://docs.expo.dev)
- [React Native](https://reactnative.dev)

### :lipstick: Ferramentas de Linter
- [Eslint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io/)

### :package: Pacotes

  - [Axios](https://axios-http.com)
  - [date-fns](https://date-fns.org)
  - [Expo Google Font Lato](https://www.npmjs.com/package/@expo-google-fonts/lato)
  - [Expo location](https://docs.expo.dev/versions/latest/sdk/location/)
  - [NativeBase](https://nativebase.io)
  - [React Navigation](https://reactnavigation.org)

### Uma rápida olhada nos diretórios dentro do `./src`.
    ./src
     ├── components
     ├── enums
     ├── hooks
     ├── routes
     ├── services
     ├── styles
     ├── types
     ├── utils

1.  **`components`**: pasta com os componentes do aplicativo seguindo o padrão [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

2.  **`enums`**: pasta com os enums da aplicação

3.  **`hooks`**: react hooks customizados.

4.  **`routes`**: rotas do aplicativos.

5.  **`services`**: serviços de terceiros utilizados.

6.  **`styles`**: estilos globais.

7.  **`types`**: pasta com os tipos da aplicação.

8.  **`utils`**: funções utilitárias recorrentes.

## :memo: Licença

Este projeto está sob a licença do MIT. Veja o arquivo  [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💙 por [Henrique](https://henrique.pw)
