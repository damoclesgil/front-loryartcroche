import { expect, test } from 'vitest'
import { normalize } from '.'

const mockedProducts = {
  data: {
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
        },
        {
          id: '3',
          attributes: {
            nome: 'Bolsa Verde',
            slug: 'bolsa-verde',
            descricao:
              '<h2 style="text-align:center;">Bolsa Verde Muito Daora.</h2><p>segue o baile.</p><h3>lista</h3><ol><li>primeiro</li><li>segundo</li></ol><p><strong>negrito</strong></p><p><i>italic</i></p><p style="text-align:center;"><a href="https://google.com.br">link</a><br><br>Tabela<br>&nbsp;</p><figure class="table"><table><thead><tr><th><p style="text-align:center;">123</p></th><th><p style="text-align:center;">3234123414</p></th></tr></thead></table><figcaption>tabela tal tal</figcaption></figure><p>imagem</p><figure class="image"><img style="aspect-ratio:4608/3456;" src="http://localhost:1337/uploads/fidelicia_debora_marcela_876b8e84d6.jpg" alt="fidelicia_debora_marcela.jpg" srcset="http://localhost:1337/uploads/thumbnail_fidelicia_debora_marcela_876b8e84d6.jpg 208w,http://localhost:1337/uploads/small_fidelicia_debora_marcela_876b8e84d6.jpg 500w,http://localhost:1337/uploads/medium_fidelicia_debora_marcela_876b8e84d6.jpg 750w,http://localhost:1337/uploads/large_fidelicia_debora_marcela_876b8e84d6.jpg 1000w," sizes="100vw" width="4608" height="3456"></figure><p>&nbsp;</p><p>b</p>',
            preco: 51.45,
            imagem_destaque: {
              data: {
                attributes: {
                  url: '/uploads/bolsa_verde_9a8dbe9af2.jpeg',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            galeria: {
              data: [
                {
                  id: '14',
                  attributes: {
                    url: '/uploads/bolsa_verde_2_32dfbf87de.jpeg',
                    name: 'bolsa-verde-2.jpeg',
                    width: 960,
                    height: 1280,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '13',
                  attributes: {
                    url: '/uploads/bolsa_verde_9a8dbe9af2.jpeg',
                    name: 'bolsa-verde.jpeg',
                    width: 1280,
                    height: 1151,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                }
              ],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: '#205029',
            nomeCor: 'Verde',
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
                },
                {
                  id: '1',
                  attributes: {
                    cor: '#3962a9',
                    nomeCor: 'Azul',
                    slug: 'bolsinha-azul',
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
          id: '4',
          attributes: {
            nome: 'Marias',
            slug: 'marias',
            descricao: '<p>Oi tudo beleza?</p>',
            preco: 450,
            imagem_destaque: {
              data: {
                attributes: {
                  url: '/uploads/IMG_0112_03ec1b2606.jpg',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            galeria: {
              data: [
                {
                  id: '19',
                  attributes: {
                    url: '/uploads/yasuoe_d14bee5ad1.jpeg',
                    name: 'yasuoe.jpeg',
                    width: 1024,
                    height: 1024,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '20',
                  attributes: {
                    url: '/uploads/castlevania_77216c295c.jpg',
                    name: 'castlevania.jpg',
                    width: 2560,
                    height: 1440,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                }
              ],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: '#0114ee',
            nomeCor: 'Azul',
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
        },
        {
          id: '5',
          attributes: {
            nome: 'Doido',
            slug: 'doido',
            descricao: '<p>.</p>',
            preco: 350,
            imagem_destaque: {
              data: {
                attributes: {
                  url: '/uploads/IMG_20240411_193524_649d0192c8.jpg',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            galeria: {
              data: [
                {
                  id: '21',
                  attributes: {
                    url: '/uploads/pxfuel_e9ed946bd1.jpg',
                    name: 'pxfuel.jpg',
                    width: 719,
                    height: 1421,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '22',
                  attributes: {
                    url: '/uploads/pxfuel_2_0e52a55510.jpg',
                    name: 'pxfuel (2).jpg',
                    width: 1920,
                    height: 1080,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '23',
                  attributes: {
                    url: '/uploads/Sung_Jin_woo_02_d7d8b3540b.jpg',
                    name: 'Sung Jin-woo_02.jpg',
                    width: 1920,
                    height: 1080,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '24',
                  attributes: {
                    url: '/uploads/Sung_Jin_woo_01_81d48c6598.jpg',
                    name: 'Sung Jin-woo_01.jpg',
                    width: 1920,
                    height: 1080,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                }
              ],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: null,
            nomeCor: null,
            produtosReferentes: {
              data: [],
              __typename: 'ProdutoRelationResponseCollection'
            },
            __typename: 'Produto'
          },
          __typename: 'ProdutoEntity'
        },
        {
          id: '6',
          attributes: {
            nome: 'radouken',
            slug: null,
            descricao: null,
            preco: 0,
            imagem_destaque: {
              data: null,
              __typename: 'UploadFileEntityResponse'
            },
            galeria: {
              data: [],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: null,
            nomeCor: null,
            produtosReferentes: {
              data: [],
              __typename: 'ProdutoRelationResponseCollection'
            },
            __typename: 'Produto'
          },
          __typename: 'ProdutoEntity'
        },
        {
          id: '7',
          attributes: {
            nome: 'shoryoken',
            slug: 'shoryoken',
            descricao: null,
            preco: 321,
            imagem_destaque: {
              data: {
                attributes: {
                  url: '/uploads/gil_2_1528e480f3.jpg',
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
                }
              ],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: null,
            nomeCor: null,
            produtosReferentes: {
              data: [],
              __typename: 'ProdutoRelationResponseCollection'
            },
            __typename: 'Produto'
          },
          __typename: 'ProdutoEntity'
        },
        {
          id: '8',
          attributes: {
            nome: 'biscoito',
            slug: 'biscoito',
            descricao: null,
            preco: 500,
            imagem_destaque: {
              data: {
                attributes: {
                  url: '/uploads/cyberpunk_nightfall_wall_paper_by_bananabee1617_dg0gokv_fullview_d6a5dd292d.jpg',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            galeria: {
              data: [
                {
                  id: '26',
                  attributes: {
                    url: '/uploads/bg_gandalf_b9d9732f8c.jpeg',
                    name: 'bg_gandalf.jpeg',
                    width: 1920,
                    height: 1200,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '27',
                  attributes: {
                    url: '/uploads/forest_winter_247_by_nalina24_dfoj2dn_8df3a59879.jpg',
                    name: 'forest_winter_247_by_nalina24_dfoj2dn.jpg',
                    width: 8256,
                    height: 5504,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '25',
                  attributes: {
                    url: '/uploads/cyberpunk_nightfall_wall_paper_by_bananabee1617_dg0gokv_fullview_d6a5dd292d.jpg',
                    name: 'cyberpunk_nightfall__wall_paper__by_bananabee1617_dg0gokv-fullview.jpg',
                    width: 1280,
                    height: 718,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                }
              ],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: null,
            nomeCor: null,
            produtosReferentes: {
              data: [],
              __typename: 'ProdutoRelationResponseCollection'
            },
            __typename: 'Produto'
          },
          __typename: 'ProdutoEntity'
        },
        {
          id: '9',
          attributes: {
            nome: 'yasaki',
            slug: 'yasaki',
            descricao: null,
            preco: 985.98,
            imagem_destaque: {
              data: {
                attributes: {
                  url: '/uploads/skin_yasuo_profetizado_lol_2024_800x450_2ac9a0abf5.jpg',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            galeria: {
              data: [
                {
                  id: '30',
                  attributes: {
                    url: '/uploads/Yasuo_54_142ab74daa.jpg',
                    name: 'Yasuo_54.jpg',
                    width: 1215,
                    height: 717,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '29',
                  attributes: {
                    url: '/uploads/skin_yasuo_profetizado_lol_2024_800x450_2ac9a0abf5.jpg',
                    name: 'skin-yasuo-profetizado-lol-2024-800x450.jpg',
                    width: 800,
                    height: 450,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                }
              ],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: '#75c3f7',
            nomeCor: null,
            produtosReferentes: {
              data: [],
              __typename: 'ProdutoRelationResponseCollection'
            },
            __typename: 'Produto'
          },
          __typename: 'ProdutoEntity'
        },
        {
          id: '10',
          attributes: {
            nome: 'Biruleibe',
            slug: 'biruleibe',
            descricao: null,
            preco: 0.26,
            imagem_destaque: {
              data: {
                attributes: {
                  url: '/uploads/ever_after_you_by_trey_trimble_1920_1080_206082d065.jpg',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            galeria: {
              data: [
                {
                  id: '27',
                  attributes: {
                    url: '/uploads/forest_winter_247_by_nalina24_dfoj2dn_8df3a59879.jpg',
                    name: 'forest_winter_247_by_nalina24_dfoj2dn.jpg',
                    width: 8256,
                    height: 5504,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                },
                {
                  id: '31',
                  attributes: {
                    url: '/uploads/smoking_236be73de6.jpg',
                    name: 'smoking.jpg',
                    width: 7680,
                    height: 4320,
                    __typename: 'UploadFile'
                  },
                  __typename: 'UploadFileEntity'
                }
              ],
              __typename: 'UploadFileRelationResponseCollection'
            },
            cor: null,
            nomeCor: null,
            produtosReferentes: {
              data: [],
              __typename: 'ProdutoRelationResponseCollection'
            },
            __typename: 'Produto'
          },
          __typename: 'ProdutoEntity'
        }
      ],
      meta: {
        pagination: {
          total: 11,
          pageSize: 10,
          pageCount: 2,
          page: 1,
          __typename: 'Pagination'
        },
        __typename: 'ResponseCollectionMeta'
      },
      __typename: 'ProdutoEntityResponseCollection'
    }
  }
}

test('shoud be normalize return from api strapi.io', () => {
  const data = normalize(mockedProducts)
  expect(data).toEqual(data)
})
