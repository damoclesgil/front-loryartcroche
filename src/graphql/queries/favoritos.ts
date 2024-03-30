import { gql } from '@apollo/client'

export const MUTATION_UPDATE_FAVORITO = gql`
  mutation mutationUpdateFavorito($id: ID!, $data: FavoritoInput!) {
    updateFavorito(id: $id, data: $data) {
      data {
        id
        attributes {
          produtos {
            data {
              id
              attributes {
                nome
                slug
              }
            }
          }
          user {
            data {
              id
            }
          }
        }
      }
    }
  }
`
/**
{
  "data": {
    "produtos": [2],
    "user": 2
  }
}
*/

export const MUTATION_CREATE_FAVORITO = gql`
  mutation mutationCreateFavorito($data: FavoritoInput!) {
    createFavorito(data: $data) {
      data {
        id
        attributes {
          produtos {
            data {
              id
              attributes {
                nome
                slug
              }
            }
          }
          user {
            data {
              id
            }
          }
        }
      }
    }
  }
`

/* 
{ 
 "id": 28,
 "data": { "produtos": [2], "user": 2 }
}
*/

export const GET_FAVORITO = gql`
  query getFavorito($id: ID!) {
    favorito(id: $id) {
      data {
        id
        attributes {
          produtos {
            data {
              attributes {
                nome
                slug
                descricao
                preco
                imagem_destaque {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                galeria {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_FAVORITOS = gql`
  query getFavoritos($filters: FavoritoFiltersInput) {
    favoritos(filters: $filters) {
      data {
        id
        attributes {
          produtos {
            data {
              attributes {
                galeria {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
                nome
                slug
                descricao
                preco
                imagem_destaque {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
