/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ProdutoFragment on Produto {\n    nome\n    slug\n    descricao\n    preco\n    imagem_destaque {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n    galeria {\n      data {\n        id\n        attributes {\n          url\n          name\n        }\n      }\n    }\n  }\n": types.ProdutoFragmentFragmentDoc,
    "\n  mutation mutationUpdateFavorito($id: ID!, $data: FavoritoInput!) {\n    updateFavorito(id: $id, data: $data) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              id\n              attributes {\n                nome\n                slug\n              }\n            }\n          }\n          user {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.MutationUpdateFavoritoDocument,
    "\n  mutation mutationCreateFavorito($data: FavoritoInput!) {\n    createFavorito(data: $data) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              id\n              attributes {\n                nome\n                slug\n              }\n            }\n          }\n          user {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.MutationCreateFavoritoDocument,
    "\n  query getFavorito($id: ID!) {\n    favorito(id: $id) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              attributes {\n                nome\n                slug\n                descricao\n                preco\n                imagem_destaque {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                galeria {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetFavoritoDocument,
    "\n  query getFavoritos($filters: FavoritoFiltersInput) {\n    favoritos(filters: $filters) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              attributes {\n                galeria {\n                  data {\n                    id\n                    attributes {\n                      name\n                      url\n                    }\n                  }\n                }\n                nome\n                slug\n                descricao\n                preco\n                imagem_destaque {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetFavoritosDocument,
    "\n  query getProduto($produtoId: ID) {\n    produto(id: $produtoId) {\n      data {\n        id\n        attributes {\n          ...ProdutoFragment\n        }\n      }\n    }\n  }\n": types.GetProdutoDocument,
    "\n  query produtos {\n    produtos {\n      data {\n        id\n        attributes {\n          ...ProdutoFragment\n        }\n      }\n    }\n  }\n": types.ProdutosDocument,
    "\n  query getProfile {\n    me {\n      id\n      username\n      email\n    }\n  }\n": types.GetProfileDocument,
    "\n  mutation MutationRegister($input: UsersPermissionsRegisterInput!) {\n    register(input: $input) {\n      jwt\n    }\n  }\n": types.MutationRegisterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProdutoFragment on Produto {\n    nome\n    slug\n    descricao\n    preco\n    imagem_destaque {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n    galeria {\n      data {\n        id\n        attributes {\n          url\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ProdutoFragment on Produto {\n    nome\n    slug\n    descricao\n    preco\n    imagem_destaque {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n    galeria {\n      data {\n        id\n        attributes {\n          url\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation mutationUpdateFavorito($id: ID!, $data: FavoritoInput!) {\n    updateFavorito(id: $id, data: $data) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              id\n              attributes {\n                nome\n                slug\n              }\n            }\n          }\n          user {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation mutationUpdateFavorito($id: ID!, $data: FavoritoInput!) {\n    updateFavorito(id: $id, data: $data) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              id\n              attributes {\n                nome\n                slug\n              }\n            }\n          }\n          user {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation mutationCreateFavorito($data: FavoritoInput!) {\n    createFavorito(data: $data) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              id\n              attributes {\n                nome\n                slug\n              }\n            }\n          }\n          user {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation mutationCreateFavorito($data: FavoritoInput!) {\n    createFavorito(data: $data) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              id\n              attributes {\n                nome\n                slug\n              }\n            }\n          }\n          user {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFavorito($id: ID!) {\n    favorito(id: $id) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              attributes {\n                nome\n                slug\n                descricao\n                preco\n                imagem_destaque {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                galeria {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getFavorito($id: ID!) {\n    favorito(id: $id) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              attributes {\n                nome\n                slug\n                descricao\n                preco\n                imagem_destaque {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                galeria {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFavoritos($filters: FavoritoFiltersInput) {\n    favoritos(filters: $filters) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              attributes {\n                galeria {\n                  data {\n                    id\n                    attributes {\n                      name\n                      url\n                    }\n                  }\n                }\n                nome\n                slug\n                descricao\n                preco\n                imagem_destaque {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getFavoritos($filters: FavoritoFiltersInput) {\n    favoritos(filters: $filters) {\n      data {\n        id\n        attributes {\n          produtos {\n            data {\n              attributes {\n                galeria {\n                  data {\n                    id\n                    attributes {\n                      name\n                      url\n                    }\n                  }\n                }\n                nome\n                slug\n                descricao\n                preco\n                imagem_destaque {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProduto($produtoId: ID) {\n    produto(id: $produtoId) {\n      data {\n        id\n        attributes {\n          ...ProdutoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProduto($produtoId: ID) {\n    produto(id: $produtoId) {\n      data {\n        id\n        attributes {\n          ...ProdutoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query produtos {\n    produtos {\n      data {\n        id\n        attributes {\n          ...ProdutoFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query produtos {\n    produtos {\n      data {\n        id\n        attributes {\n          ...ProdutoFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProfile {\n    me {\n      id\n      username\n      email\n    }\n  }\n"): (typeof documents)["\n  query getProfile {\n    me {\n      id\n      username\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MutationRegister($input: UsersPermissionsRegisterInput!) {\n    register(input: $input) {\n      jwt\n    }\n  }\n"): (typeof documents)["\n  mutation MutationRegister($input: UsersPermissionsRegisterInput!) {\n    register(input: $input) {\n      jwt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;