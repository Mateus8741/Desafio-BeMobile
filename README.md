# 📱 App - Be Mobile
O desafio Mobile da Be consiste em montar uma tabela com as informações que virão por uma API simulada escrita em json-server.

## 💻 Sobre o projeto
Aplicação que lista funcionários, cargos data de admissão e número da empresa.
  

![Screenshot-mobile](https://user-images.githubusercontent.com/62652109/227748732-b1849133-0b2d-49c4-be7b-8dcb8f15e3c5.png)

## ♻️ Foi utilizado
- Typescript
- Native Base
- Moti
- Axios
- Json-server

## 📋 Conceitos
- Estados
- Propriedades
- Componentização

## ⚠️ Pré-requisitos
Tenha instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Expo](https://docs.expo.dev).

## 🚀 Como executar
Para iniciar o projeto, siga o passo a passo abaixo.
1. Clone esse repositório
2. Entre no projeto e execute os comandos abaixo
```bash
# Instalar as dependências
$ yarn

# Entre na pasta services e altere a baseURL de acordo com o IP da sua máquina
$ baseURL: "http://{ip da sua maquina}:3333"

# Entre no packege.json, no script "api" coloque o ip da sua maquina
$ "api": "json-server ./src/services/database.json --host {ip da sua maquina} --port 3333 --delay 700"

# Executar o json-server
$ yarn api
```

Feito por Mateus Tavares⚡