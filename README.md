<div align="center">

![Lory Art Croche](./public/img/logo/logo_LoryArtCrocheColorida.png)

</div>

This is the front end of the [loryartcroche](https://www.instagram.com/loryartcroche/) e-commerce that was created with the intention of selling and promoting its handcrafted products.

The project have the back-end too: [api-loryartcroche](https://github.com/damoclesgil/api-loryartcroche)

## Objetivo

Vender, Divulgar as suas Bolsas, Sanar Dúvidas dos Clientes e Auxiliar nas suas tomadas de decisoes em relaçãos os produtos de Crochês feitos na mão.

## Público Alvo / Persona

Seria pessoas que gostam de colecionar talvez ou comprar bolsas artesanais feito a mal de crochê, geralmente pessoas de todas idades, jovens e adultos. São pessoas que gostam de que coleção únicas / exclusividade.

## Sobre o Produto

São bolsas de altas qualidades feitas a mão.

## Envinroment Variables

`env.local`

```env
  NEXT_PUBLIC_API_URL=http://localhost:1337
  NEXT_PUBLIC_IMAGE_HOST=http://localhost:1337
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
  NEXT_PUBLIC_GA_TRACKING=
  NEXT_PUBLIC_APP_URL=
  JWT_SECRET=
  NEXT_GOOGLE_CLIENT_ID=
  NEXT_GOOGLE_CLIENT_SECRET=
  APOLLO_KEY=
```

## 🖇️ Dependências Principais

[&#8593; Voltar para o topo](#-índice)

| Biblioteca                                       | Versão                                                       | Descrição                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| [Shadcn](https://ui.shadcn.com/)                 | ![Iconify](https://img.shields.io/badge/0.8.0-blue.svg)      | Biblioteca UI.                                                                                                    |
| [Iconify](https://icon-sets.iconify.design/)     | ![Iconify](https://img.shields.io/badge/5.0.1-blue.svg)      | Biblioteca de icones.                                                                                             |
| [Vitest](https://vitest.dev/)                    | ![Vitest](https://img.shields.io/badge/1.5.0-blue.svg)       | Ferramente para executar testes unitários, que executa os testes bem rápido usando o vite.                        |
| [Typescript](https://www.typescriptlang.org/)    | ![Typescript](https://img.shields.io/badge/5.3.3-blue.svg)   | Um superset Javascript que aprimora a experiência de desenvolvimento com tipagem estática.                        |
| [Apollo](https://www.apollographql.com/)         | ![Apollo](https://img.shields.io/badge/3.9.11-blue.svg)      | uma biblioteca de gerenciamento de estado que facilita a integração de uma API GraphQL com a aplicação front-end. |
| [Tailwind CSS](https://tailwindcss.com/)         | ![Tailwind CSS](https://img.shields.io/badge/3.4.3-blue.svg) | Uma framework CSS Altamente customizável para um rápido desenvolvimento web.                                      |
| [Codegen](https://the-guild.dev/graphql/codegen) | ![Codegen](https://img.shields.io/badge/5.0.2-blue.svg)      | Uma biblioteca que ajuda a "tipar" todas as query do graphql baseado no schema.                                   |
| [Zod](https://zod.dev/)                          | ![Zod](https://img.shields.io/badge/3.22.4-blue.svg)         | Uma biblioteca que auxilia na reutilização de validações dos campos(input fields)                                 |

## Atualizar Dependências usando ncu1

```bash
ncu --interactive

// or
ncu -i
```

## Só para lembrar

- <https://maildev.github.io/maildev/>
- <http://localhost:1080/>
- <no-reply@strapi.io>

## TODO

> BACKEND

- [] colocar uma opção de gerar o rgb talvez?
- [] configurar o CKEditor rich text.
- [] configurar color picker

> FRONTEND

- [] Melhorar no front algumas coisinhas.

Para simular se está carregando localmente colocar um e ver se o loading state is work fine.

```js
await new Promise((resolve) => setTimeout(resolve, 3000))
```

O suspense vai ser bom quando quero setar o estado componente especifico sem trocar a pagina toda. <https://youtu.be/5QP0mvrJkiY?t=4957>

```javascriptreact

<Suspense fallback="Loading...">
  <Product />
</Suspense>
```

## FAQ e estudos

Alguns testes feitos na pasta: [dev-testing](<src/app/(dev-testing)/server-side/>)

A real é que o APOLLO não funciona muito bem para server side.

Talvez no caso para server side seria melhor utilizar api rest normal mesmo para renderizar os produtos e tals no lado do servidor sem bugar e sem ter problemas.

O 'use client' deve ser usado com cuidado, e ele não quer dizer que renderiza do lado do cliente. Só vai renderizar dos dois lados, tanto no server como no client para funcionar o javascript no client side.
