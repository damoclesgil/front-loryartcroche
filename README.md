![Lory Art Croche](./public/img/logo/logo_LoryArtCrocheColorida.png)

This is the front end of the [loryartcroche](https://www.instagram.com/loryartcroche/) e-commerce that was created with the intention of selling and promoting its handcrafted products.

## Público Alvo

Seria pessoas que gostam de colecionar talvez ou comprar bolsas artesanais feito a mal de crochê. Meio que coleção únicas, pois ela quer produzir pouco porém com alta qualidade.

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## **aa**

Update Libs

```bash
ncu --interactive

// or
ncu -i
```

## Só para lembrar

- <https://maildev.github.io/maildev/>
- <http://localhost:1080/>
- <no-reply@strapi.io>

## todo

- [] colocar uma opção de gerar o rgb talvez?
- [] configurar o CKEditor rich text.
- [] configurar color picker

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
