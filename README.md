![Lory Art Croche](./public/img/logo/logo_LoryArtCrocheColorida.png)

This is the front end of the [loryartcroche](https://www.instagram.com/loryartcroche/) e-commerce that was created with the intention of selling and promoting its handcrafted products.

## Objetivo


## Público Alvo / Persona

Seria pessoas que gostam de colecionar talvez ou comprar bolsas artesanais feito a mal de crochê. Meio que coleção únicas, pois ela quer produzir pouco porém com alta qualidade.


- Biblioteca de Icones: https://icon-sets.iconify.design/

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
await new Promise((resolve) => setTimeout(resolve, 3000));
```

O suspense vai ser bom quando quero setar o estado componente especifico sem trocar a pagina toda. https://youtu.be/5QP0mvrJkiY?t=4957

```javascriptreact

<Suspense fallback="Loading...">
  <Product />
</Suspense>
```

## FAQ e estudos

Alguns testes feitos na pasta: [dev-testing](src/app/(dev-testing)/server-side/)

A real é que o APOLLO não funciona muito bem para server side.

Talvez no caso para server side seria melhor utilizar api rest normal mesmo para renderizar os produtos e tals no lado do servidor sem bugar e sem ter problemas.

O 'use client' deve ser usado com cuidado, e ele não quer dizer que renderiza do lado do cliente. Só vai renderizar dos dois lados, tanto no server como no client para funcionar o javascript no client side.
