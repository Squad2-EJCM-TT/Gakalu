# Galuka

**Status do Projeto** : Em desenvolvimento


![Badge](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
 
 
## Tabela de Conteúdo


 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Download](#download)
 3. [Instalação](#instalação)
 4. [Configuração](#configuração)
 5. [Uso](#uso)
 6. [Arquitetura](#arquitetura)
 7. [Autores](#autores)
 
## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

 - Node.js
 - React Native
 - Expo
 - Prisma

## Download

*Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta **[git](https://git-scm.com/downloads)**. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:*

``` git
git clone https://github.com/Squad2-EJCM-TT/Gakalu.git
```

## Instalação 

### Na pasta `backend`

Abra o seu terminal e execute o comando para instalar as dependências da pasta `backend`.

``` bash
cd back
npm install

```

### Na pasta `frontend`

Agora, execute os comandos abaixo para instalar as dependências da pasta `frontend`.

``` bash
cd ..
cd frontend
npm install

```



## Configuração

Após a instalação, algumas preparações anteriores devem ser realizadas na pasta `backend`.

A partir dos comandos abaixo, serão aplicadas as migrações do bando de dados `backend`:

```bash
cd backend
npx prisma migrate dev

```

Também é preciso configurar o .env com o Postgres.
Exemplo padrão: postgresql://user:password@host:port/dbname?schema=public

 
## Uso

Ainda na pasta `backend`, execute o seguinte comando para servir o aplicativo em um servidor customizado para posterior execução no front-end:

``` bash
npm run start
```

Com as configurações feitas, mude a seguir para a pasta `frontend`, para a execução do aplicativo utilizando o **Expo** utilizando os seguintes comandos:


``` bash
cd ..
cd frontend
npx expo start

```
Para parar a execução do aplicativo, basta executar o comando `CTRL + C` no terminal.


## Arquitetura

- [Notion](https://www.notion.so/Squad-2-44af2cd142f44a39b08de0a1eb20f9e6)

- [Figma](https://www.figma.com/design/dInCENnel21HRqnh5RyM3V/GALUKA---TT-2024.2?node-id=0-1&t=Wql2jwvke8Op83z4-0)

- [Modelagem]()


## Autores

* Gerente - Lucas Stefano
* Tech Lead - Gabriel de Araujo
* Dev Front-end - Gabrielly
* Dev Front-end - Victor Santos
* Dev Front-end - Anna Cristine
* Dev Back-end - Alexandre Peixoto 
* Dev Back-end - Julia Vilela 
* Dev Back-end - Giovanna 
&nbsp;

