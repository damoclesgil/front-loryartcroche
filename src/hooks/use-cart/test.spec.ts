import { normalize } from '@/utils/mappers'
import { expect, test } from 'vitest'

const mockedProducts = {
  produtos: {
    data: [
      {
        id: '1',
        attributes: {
          nome: 'Bolsinha Azul',
          slug: 'bolsinha-azul',
          descricao:
            '<h2>Feito sob encomenda 12 Dias para produção.</h2><p>&nbsp;</p><figure class="table"><table><tbody><tr><td>dasdfasd fasdf asdfasdf</td><td>sdfasdfasdf asdfasdfasdfasdfs</td></tr></tbody></table></figure><p>&nbsp;</p><ol><li>asdfasd</li><li>oi</li></ol>',
          preco: 200.54,
          imagem_destaque: {
            data: {
              attributes: {
                url: '/uploads/bolsa_em_croche_croche_azul_01_233c83f32e.jpg',
                __typename: 'UploadFile'
              },
              __typename: 'UploadFileEntity'
            },
            __typename: 'UploadFileEntityResponse'
          },
          galeria: {
            data: [
              {
                id: '6',
                attributes: {
                  url: '/uploads/01_c31dfb11_696b_46a9_a773_4280b0250f81_600x600_crop_center_8852180741.jpg',
                  name: '01_c31dfb11-696b-46a9-a773-4280b0250f81_600x600_crop_center.jpg',
                  width: 600,
                  height: 600,
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              {
                id: '7',
                attributes: {
                  url: '/uploads/bolsa_em_croche_croche_azul_02_644dfc52e0.webp',
                  name: 'bolsa-azul.webp',
                  width: 1200,
                  height: 1200,
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              {
                id: '3',
                attributes: {
                  url: '/uploads/bolsa_em_croche_croche_azul_01_a4312ef78f.jpg',
                  name: 'bolsa-em-croche-croche-azul-01.jpg',
                  width: 1200,
                  height: 1200,
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              {
                id: '1',
                attributes: {
                  url: '/uploads/bolsa_em_croche_croche_azul_03_114d9c06a7.jpg',
                  name: 'bolsa-em-croche-croche-azul-03.jpg',
                  width: 1200,
                  height: 1200,
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              }
            ],
            __typename: 'UploadFileRelationResponseCollection'
          },
          cor: '#3962a9',
          nomeCor: 'Azul',
          produtosReferentes: {
            data: [
              {
                id: '2',
                attributes: {
                  cor: '#bf08ff',
                  nomeCor: 'Rosa',
                  slug: 'bolsa-cor-de-rosa',
                  __typename: 'Produto'
                },
                __typename: 'ProdutoEntity'
              }
            ],
            __typename: 'ProdutoRelationResponseCollection'
          },
          __typename: 'Produto'
        },
        __typename: 'ProdutoEntity'
      },
      {
        id: '2',
        attributes: {
          nome: 'Bolsa Cor de Rosa',
          slug: 'bolsa-cor-de-rosa',
          descricao:
            '<p><span style="font-size:18px;">Titulo&nbsp;</span><br><br><span style="color:#6a1b9a;font-size:18px;">asdfasdf</span></p><p>&nbsp;</p><p>&nbsp;</p>',
          preco: 350,
          imagem_destaque: {
            data: null,
            __typename: 'UploadFileEntityResponse'
          },
          galeria: {
            data: [
              {
                id: '4',
                attributes: {
                  url: '/uploads/bolsa_de_croche_na_cor_rose_bolsa_01_07fdb01063.jpg',
                  name: 'bolsa-de-croche-na-cor-rose-bolsa-01.jpg',
                  width: 579,
                  height: 580,
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              {
                id: '5',
                attributes: {
                  url: '/uploads/bolsa_de_croche_na_cor_rose_bolsa_02_582d2b3e6b.jpg',
                  name: 'bolsa-de-croche-na-cor-rose-bolsa-02.jpg',
                  width: 579,
                  height: 580,
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              }
            ],
            __typename: 'UploadFileRelationResponseCollection'
          },
          cor: '#bf08ff',
          nomeCor: 'Rosa',
          produtosReferentes: {
            data: [
              {
                id: '3',
                attributes: {
                  cor: '#205029',
                  nomeCor: 'Verde',
                  slug: 'bolsa-verde',
                  __typename: 'Produto'
                },
                __typename: 'ProdutoEntity'
              }
            ],
            __typename: 'ProdutoRelationResponseCollection'
          },
          __typename: 'Produto'
        },
        __typename: 'ProdutoEntity'
      }
    ]
  }
}

// @ts-ignore
const cartReducer = (state, product) => {
  // @ts-ignore
  return state.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  )
}
test('shoud be normalize return from api strapi.io', () => {
  const data = mockedProducts
  console.log(data.produtos.data)
  //   const addQtyOnProducts = data.produtos.map((produto) => {
  //     return {
  //       ...produto,
  //       qty: 1
  //     }
  //   })
  //   console.log(addQtyOnProducts)

  //   const incrementQuantity = (id = '1') => {
  //     let currentProduct = addQtyOnProducts.filter((p) => p.id === id)
  //     currentProduct[0].qty + 1
  //     console.log(currentProduct)

  //   }

  //   incrementQuantity()

  // console.log(data.produtos)
  expect(data).toEqual(data)
})
