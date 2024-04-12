import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  JSON: { input: any; output: any }
  Long: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains?: InputMaybe<Scalars['Boolean']['input']>
  containsi?: InputMaybe<Scalars['Boolean']['input']>
  endsWith?: InputMaybe<Scalars['Boolean']['input']>
  eq?: InputMaybe<Scalars['Boolean']['input']>
  eqi?: InputMaybe<Scalars['Boolean']['input']>
  gt?: InputMaybe<Scalars['Boolean']['input']>
  gte?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt?: InputMaybe<Scalars['Boolean']['input']>
  lte?: InputMaybe<Scalars['Boolean']['input']>
  ne?: InputMaybe<Scalars['Boolean']['input']>
  nei?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']['input']>
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith?: InputMaybe<Scalars['Boolean']['input']>
}

export type ComponentComponentsProdutoComponentColor = {
  cor?: Maybe<Enum_Componentcomponentsprodutocomponentcolor_Cor>
  id: Scalars['ID']['output']
  produtoReferente?: Maybe<ProdutoEntityResponse>
}

export type ComponentComponentsProdutoComponentColorFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentComponentsProdutoComponentColorFiltersInput>>
  >
  cor?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentComponentsProdutoComponentColorFiltersInput>
  or?: InputMaybe<
    Array<InputMaybe<ComponentComponentsProdutoComponentColorFiltersInput>>
  >
  produtoReferente?: InputMaybe<ProdutoFiltersInput>
}

export type ComponentComponentsProdutoComponentColorInput = {
  cor?: InputMaybe<Enum_Componentcomponentsprodutocomponentcolor_Cor>
  id?: InputMaybe<Scalars['ID']['input']>
  produtoReferente?: InputMaybe<Scalars['ID']['input']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains?: InputMaybe<Scalars['DateTime']['input']>
  containsi?: InputMaybe<Scalars['DateTime']['input']>
  endsWith?: InputMaybe<Scalars['DateTime']['input']>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  eqi?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  ne?: InputMaybe<Scalars['DateTime']['input']>
  nei?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']['input']>
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith?: InputMaybe<Scalars['DateTime']['input']>
}

export enum Enum_Componentcomponentsprodutocomponentcolor_Cor {
  Azul = 'Azul',
  Branco = 'Branco',
  Laranja = 'Laranja',
  Rosa = 'Rosa',
  Verde = 'Verde',
  Vermelho = 'Vermelho'
}

export type EmailDesignerEmailTemplate = {
  bodyHtml?: Maybe<Scalars['String']['output']>
  bodyText?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  design?: Maybe<Scalars['JSON']['output']>
  enabled?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  subject?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Scalars['JSON']['output']>
  templateReferenceId?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type EmailDesignerEmailTemplateEntity = {
  attributes?: Maybe<EmailDesignerEmailTemplate>
  id?: Maybe<Scalars['ID']['output']>
}

export type EmailDesignerEmailTemplateEntityResponse = {
  data?: Maybe<EmailDesignerEmailTemplateEntity>
}

export type EmailDesignerEmailTemplateEntityResponseCollection = {
  data: Array<EmailDesignerEmailTemplateEntity>
  meta: ResponseCollectionMeta
}

export type EmailDesignerEmailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>
  bodyHtml?: InputMaybe<StringFilterInput>
  bodyText?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  design?: InputMaybe<JsonFilterInput>
  enabled?: InputMaybe<BooleanFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>
  or?: InputMaybe<Array<InputMaybe<EmailDesignerEmailTemplateFiltersInput>>>
  subject?: InputMaybe<StringFilterInput>
  tags?: InputMaybe<JsonFilterInput>
  templateReferenceId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type EmailDesignerEmailTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']['input']>
  bodyText?: InputMaybe<Scalars['String']['input']>
  design?: InputMaybe<Scalars['JSON']['input']>
  enabled?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  subject?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Scalars['JSON']['input']>
  templateReferenceId?: InputMaybe<Scalars['Int']['input']>
}

export type Favorito = {
  createdAt?: Maybe<Scalars['DateTime']['output']>
  produtos?: Maybe<ProdutoRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  user?: Maybe<UsersPermissionsUserEntityResponse>
}

export type FavoritoProdutosArgs = {
  filters?: InputMaybe<ProdutoFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FavoritoEntity = {
  attributes?: Maybe<Favorito>
  id?: Maybe<Scalars['ID']['output']>
}

export type FavoritoEntityResponse = {
  data?: Maybe<FavoritoEntity>
}

export type FavoritoEntityResponseCollection = {
  data: Array<FavoritoEntity>
  meta: ResponseCollectionMeta
}

export type FavoritoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FavoritoFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<FavoritoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<FavoritoFiltersInput>>>
  produtos?: InputMaybe<ProdutoFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type FavoritoInput = {
  produtos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  user?: InputMaybe<Scalars['ID']['input']>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains?: InputMaybe<Scalars['Float']['input']>
  containsi?: InputMaybe<Scalars['Float']['input']>
  endsWith?: InputMaybe<Scalars['Float']['input']>
  eq?: InputMaybe<Scalars['Float']['input']>
  eqi?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  ne?: InputMaybe<Scalars['Float']['input']>
  nei?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']['input']>
  notContainsi?: InputMaybe<Scalars['Float']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith?: InputMaybe<Scalars['Float']['input']>
}

export type GenericMorph =
  | ComponentComponentsProdutoComponentColor
  | EmailDesignerEmailTemplate
  | Favorito
  | I18NLocale
  | Ordem
  | Produto
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type I18NLocale = {
  code?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']['output']>
}

export type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains?: InputMaybe<Scalars['ID']['input']>
  containsi?: InputMaybe<Scalars['ID']['input']>
  endsWith?: InputMaybe<Scalars['ID']['input']>
  eq?: InputMaybe<Scalars['ID']['input']>
  eqi?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  ne?: InputMaybe<Scalars['ID']['input']>
  nei?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']['input']>
  notContainsi?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith?: InputMaybe<Scalars['ID']['input']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains?: InputMaybe<Scalars['Int']['input']>
  containsi?: InputMaybe<Scalars['Int']['input']>
  endsWith?: InputMaybe<Scalars['Int']['input']>
  eq?: InputMaybe<Scalars['Int']['input']>
  eqi?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  nei?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']['input']>
  notContainsi?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith?: InputMaybe<Scalars['Int']['input']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains?: InputMaybe<Scalars['JSON']['input']>
  containsi?: InputMaybe<Scalars['JSON']['input']>
  endsWith?: InputMaybe<Scalars['JSON']['input']>
  eq?: InputMaybe<Scalars['JSON']['input']>
  eqi?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  ne?: InputMaybe<Scalars['JSON']['input']>
  nei?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']['input']>
  notContainsi?: InputMaybe<Scalars['JSON']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith?: InputMaybe<Scalars['JSON']['input']>
}

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  contains?: InputMaybe<Scalars['Long']['input']>
  containsi?: InputMaybe<Scalars['Long']['input']>
  endsWith?: InputMaybe<Scalars['Long']['input']>
  eq?: InputMaybe<Scalars['Long']['input']>
  eqi?: InputMaybe<Scalars['Long']['input']>
  gt?: InputMaybe<Scalars['Long']['input']>
  gte?: InputMaybe<Scalars['Long']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  lt?: InputMaybe<Scalars['Long']['input']>
  lte?: InputMaybe<Scalars['Long']['input']>
  ne?: InputMaybe<Scalars['Long']['input']>
  nei?: InputMaybe<Scalars['Long']['input']>
  not?: InputMaybe<LongFilterInput>
  notContains?: InputMaybe<Scalars['Long']['input']>
  notContainsi?: InputMaybe<Scalars['Long']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>
  startsWith?: InputMaybe<Scalars['Long']['input']>
}

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  createFavorito?: Maybe<FavoritoEntityResponse>
  createOrdem?: Maybe<OrdemEntityResponse>
  createProduto?: Maybe<ProdutoEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  deleteFavorito?: Maybe<FavoritoEntityResponse>
  deleteOrdem?: Maybe<OrdemEntityResponse>
  deleteProduto?: Maybe<ProdutoEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateEmailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  updateFavorito?: Maybe<FavoritoEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateOrdem?: Maybe<OrdemEntityResponse>
  updateProduto?: Maybe<ProdutoEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationCreateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput
}

export type MutationCreateFavoritoArgs = {
  data: FavoritoInput
}

export type MutationCreateOrdemArgs = {
  data: OrdemInput
}

export type MutationCreateProdutoArgs = {
  data: ProdutoInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteEmailDesignerEmailTemplateArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteFavoritoArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteOrdemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteProdutoArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  files: Array<InputMaybe<Scalars['Upload']['input']>>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationUpdateEmailDesignerEmailTemplateArgs = {
  data: EmailDesignerEmailTemplateInput
  id: Scalars['ID']['input']
}

export type MutationUpdateFavoritoArgs = {
  data: FavoritoInput
  id: Scalars['ID']['input']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateOrdemArgs = {
  data: OrdemInput
  id: Scalars['ID']['input']
}

export type MutationUpdateProdutoArgs = {
  data: ProdutoInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  file: Scalars['Upload']['input']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type Ordem = {
  card_brand?: Maybe<Scalars['String']['output']>
  card_last4?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  payment_intent_id?: Maybe<Scalars['String']['output']>
  produtos?: Maybe<ProdutoRelationResponseCollection>
  total_in_cents: Scalars['Long']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  user?: Maybe<UsersPermissionsUserEntityResponse>
}

export type OrdemProdutosArgs = {
  filters?: InputMaybe<ProdutoFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type OrdemEntity = {
  attributes?: Maybe<Ordem>
  id?: Maybe<Scalars['ID']['output']>
}

export type OrdemEntityResponse = {
  data?: Maybe<OrdemEntity>
}

export type OrdemEntityResponseCollection = {
  data: Array<OrdemEntity>
  meta: ResponseCollectionMeta
}

export type OrdemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrdemFiltersInput>>>
  card_brand?: InputMaybe<StringFilterInput>
  card_last4?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<OrdemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<OrdemFiltersInput>>>
  payment_intent_id?: InputMaybe<StringFilterInput>
  produtos?: InputMaybe<ProdutoFiltersInput>
  total_in_cents?: InputMaybe<LongFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type OrdemInput = {
  card_brand?: InputMaybe<Scalars['String']['input']>
  card_last4?: InputMaybe<Scalars['String']['input']>
  payment_intent_id?: InputMaybe<Scalars['String']['input']>
  produtos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  total_in_cents?: InputMaybe<Scalars['Long']['input']>
  user?: InputMaybe<Scalars['ID']['input']>
}

export type Pagination = {
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
}

export type Produto = {
  cores?: Maybe<Array<Maybe<ComponentComponentsProdutoComponentColor>>>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  descricao?: Maybe<Scalars['String']['output']>
  galeria?: Maybe<UploadFileRelationResponseCollection>
  imagem_destaque?: Maybe<UploadFileEntityResponse>
  nome?: Maybe<Scalars['String']['output']>
  preco: Scalars['Float']['output']
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ProdutoCoresArgs = {
  filters?: InputMaybe<ComponentComponentsProdutoComponentColorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProdutoGaleriaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProdutoEntity = {
  attributes?: Maybe<Produto>
  id?: Maybe<Scalars['ID']['output']>
}

export type ProdutoEntityResponse = {
  data?: Maybe<ProdutoEntity>
}

export type ProdutoEntityResponseCollection = {
  data: Array<ProdutoEntity>
  meta: ResponseCollectionMeta
}

export type ProdutoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProdutoFiltersInput>>>
  cores?: InputMaybe<ComponentComponentsProdutoComponentColorFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  descricao?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  nome?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ProdutoFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ProdutoFiltersInput>>>
  preco?: InputMaybe<FloatFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ProdutoInput = {
  cores?: InputMaybe<
    Array<InputMaybe<ComponentComponentsProdutoComponentColorInput>>
  >
  descricao?: InputMaybe<Scalars['String']['input']>
  galeria?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  imagem_destaque?: InputMaybe<Scalars['ID']['input']>
  nome?: InputMaybe<Scalars['String']['input']>
  preco?: InputMaybe<Scalars['Float']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type ProdutoRelationResponseCollection = {
  data: Array<ProdutoEntity>
}

export type Query = {
  emailDesignerEmailTemplate?: Maybe<EmailDesignerEmailTemplateEntityResponse>
  emailDesignerEmailTemplates?: Maybe<EmailDesignerEmailTemplateEntityResponseCollection>
  favorito?: Maybe<FavoritoEntityResponse>
  favoritos?: Maybe<FavoritoEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  ordem?: Maybe<OrdemEntityResponse>
  ordens?: Maybe<OrdemEntityResponseCollection>
  produto?: Maybe<ProdutoEntityResponse>
  produtos?: Maybe<ProdutoEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryEmailDesignerEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryEmailDesignerEmailTemplatesArgs = {
  filters?: InputMaybe<EmailDesignerEmailTemplateFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryFavoritoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryFavoritosArgs = {
  filters?: InputMaybe<FavoritoFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryOrdemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryOrdensArgs = {
  filters?: InputMaybe<OrdemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryProdutoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryProdutosArgs = {
  filters?: InputMaybe<ProdutoFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ResponseCollectionMeta = {
  pagination: Pagination
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  containsi?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  eq?: InputMaybe<Scalars['String']['input']>
  eqi?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  nei?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']['input']>
  notContainsi?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UploadFile = {
  alternativeText?: Maybe<Scalars['String']['output']>
  caption?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  ext?: Maybe<Scalars['String']['output']>
  formats?: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height?: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl?: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata?: Maybe<Scalars['JSON']['output']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export type UploadFileEntity = {
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  ext?: InputMaybe<Scalars['String']['input']>
  folder?: InputMaybe<Scalars['ID']['input']>
  folderPath?: InputMaybe<Scalars['String']['input']>
  formats?: InputMaybe<Scalars['JSON']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  mime?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  previewUrl?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']['output']
  pathId: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Scalars['ID']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  pathId?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider?: Scalars['String']['input']
}

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type?: Maybe<Scalars['String']['output']>
}

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsPermission = {
  action: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  type?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['String']['output']
  provider?: Maybe<Scalars['String']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>
  confirmationToken?: InputMaybe<Scalars['String']['input']>
  confirmed?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>
}

export type ProdutoFragmentFragment = {
  __typename: 'Produto'
  nome?: string | null
  slug?: string | null
  descricao?: string | null
  preco: number
  imagem_destaque?: {
    __typename: 'UploadFileEntityResponse'
    data?: {
      __typename: 'UploadFileEntity'
      attributes?: { __typename: 'UploadFile'; url: string } | null
    } | null
  } | null
  galeria?: {
    __typename: 'UploadFileRelationResponseCollection'
    data: Array<{
      __typename: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename: 'UploadFile'
        url: string
        name: string
        width?: number | null
        height?: number | null
      } | null
    }>
  } | null
  cores?: Array<{
    __typename: 'ComponentComponentsProdutoComponentColor'
    cor?: Enum_Componentcomponentsprodutocomponentcolor_Cor | null
    produtoReferente?: {
      __typename: 'ProdutoEntityResponse'
      data?: {
        __typename: 'ProdutoEntity'
        attributes?: { __typename: 'Produto'; slug?: string | null } | null
      } | null
    } | null
  } | null> | null
}

export type MutationUpdateFavoritoMutationVariables = Exact<{
  id: Scalars['ID']['input']
  data: FavoritoInput
}>

export type MutationUpdateFavoritoMutation = {
  __typename: 'Mutation'
  updateFavorito?: {
    __typename: 'FavoritoEntityResponse'
    data?: {
      __typename: 'FavoritoEntity'
      id?: string | null
      attributes?: {
        __typename: 'Favorito'
        produtos?: {
          __typename: 'ProdutoRelationResponseCollection'
          data: Array<{
            __typename: 'ProdutoEntity'
            id?: string | null
            attributes?: {
              __typename: 'Produto'
              nome?: string | null
              slug?: string | null
              descricao?: string | null
              preco: number
              imagem_destaque?: {
                __typename: 'UploadFileEntityResponse'
                data?: {
                  __typename: 'UploadFileEntity'
                  attributes?: { __typename: 'UploadFile'; url: string } | null
                } | null
              } | null
              galeria?: {
                __typename: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename: 'UploadFile'
                    url: string
                    name: string
                    width?: number | null
                    height?: number | null
                  } | null
                }>
              } | null
              cores?: Array<{
                __typename: 'ComponentComponentsProdutoComponentColor'
                cor?: Enum_Componentcomponentsprodutocomponentcolor_Cor | null
                produtoReferente?: {
                  __typename: 'ProdutoEntityResponse'
                  data?: {
                    __typename: 'ProdutoEntity'
                    attributes?: {
                      __typename: 'Produto'
                      slug?: string | null
                    } | null
                  } | null
                } | null
              } | null> | null
            } | null
          }>
        } | null
        user?: {
          __typename: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename: 'UsersPermissionsUserEntity'
            id?: string | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type MutationCreateFavoritoMutationVariables = Exact<{
  data: FavoritoInput
}>

export type MutationCreateFavoritoMutation = {
  __typename: 'Mutation'
  createFavorito?: {
    __typename: 'FavoritoEntityResponse'
    data?: {
      __typename: 'FavoritoEntity'
      id?: string | null
      attributes?: {
        __typename: 'Favorito'
        produtos?: {
          __typename: 'ProdutoRelationResponseCollection'
          data: Array<{
            __typename: 'ProdutoEntity'
            id?: string | null
            attributes?: {
              __typename: 'Produto'
              nome?: string | null
              slug?: string | null
              descricao?: string | null
              preco: number
              imagem_destaque?: {
                __typename: 'UploadFileEntityResponse'
                data?: {
                  __typename: 'UploadFileEntity'
                  attributes?: { __typename: 'UploadFile'; url: string } | null
                } | null
              } | null
              galeria?: {
                __typename: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename: 'UploadFile'
                    url: string
                    name: string
                    width?: number | null
                    height?: number | null
                  } | null
                }>
              } | null
              cores?: Array<{
                __typename: 'ComponentComponentsProdutoComponentColor'
                cor?: Enum_Componentcomponentsprodutocomponentcolor_Cor | null
                produtoReferente?: {
                  __typename: 'ProdutoEntityResponse'
                  data?: {
                    __typename: 'ProdutoEntity'
                    attributes?: {
                      __typename: 'Produto'
                      slug?: string | null
                    } | null
                  } | null
                } | null
              } | null> | null
            } | null
          }>
        } | null
        user?: {
          __typename: 'UsersPermissionsUserEntityResponse'
          data?: {
            __typename: 'UsersPermissionsUserEntity'
            id?: string | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type MutationRegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

export type MutationRegisterMutation = {
  __typename: 'Mutation'
  register: { __typename: 'UsersPermissionsLoginPayload'; jwt?: string | null }
}

export type GetFavoritosQueryVariables = Exact<{
  filters?: InputMaybe<FavoritoFiltersInput>
}>

export type GetFavoritosQuery = {
  __typename: 'Query'
  favoritos?: {
    __typename: 'FavoritoEntityResponseCollection'
    data: Array<{
      __typename: 'FavoritoEntity'
      id?: string | null
      attributes?: {
        __typename: 'Favorito'
        produtos?: {
          __typename: 'ProdutoRelationResponseCollection'
          data: Array<{
            __typename: 'ProdutoEntity'
            id?: string | null
            attributes?: {
              __typename: 'Produto'
              nome?: string | null
              slug?: string | null
              descricao?: string | null
              preco: number
              imagem_destaque?: {
                __typename: 'UploadFileEntityResponse'
                data?: {
                  __typename: 'UploadFileEntity'
                  attributes?: { __typename: 'UploadFile'; url: string } | null
                } | null
              } | null
              galeria?: {
                __typename: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename: 'UploadFile'
                    url: string
                    name: string
                    width?: number | null
                    height?: number | null
                  } | null
                }>
              } | null
              cores?: Array<{
                __typename: 'ComponentComponentsProdutoComponentColor'
                cor?: Enum_Componentcomponentsprodutocomponentcolor_Cor | null
                produtoReferente?: {
                  __typename: 'ProdutoEntityResponse'
                  data?: {
                    __typename: 'ProdutoEntity'
                    attributes?: {
                      __typename: 'Produto'
                      slug?: string | null
                    } | null
                  } | null
                } | null
              } | null> | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type GetProdutoQueryVariables = Exact<{
  produtoId?: InputMaybe<Scalars['ID']['input']>
}>

export type GetProdutoQuery = {
  __typename: 'Query'
  produto?: {
    __typename: 'ProdutoEntityResponse'
    data?: {
      __typename: 'ProdutoEntity'
      id?: string | null
      attributes?: {
        __typename: 'Produto'
        nome?: string | null
        slug?: string | null
        descricao?: string | null
        preco: number
        imagem_destaque?: {
          __typename: 'UploadFileEntityResponse'
          data?: {
            __typename: 'UploadFileEntity'
            attributes?: { __typename: 'UploadFile'; url: string } | null
          } | null
        } | null
        galeria?: {
          __typename: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename: 'UploadFile'
              url: string
              name: string
              width?: number | null
              height?: number | null
            } | null
          }>
        } | null
        cores?: Array<{
          __typename: 'ComponentComponentsProdutoComponentColor'
          cor?: Enum_Componentcomponentsprodutocomponentcolor_Cor | null
          produtoReferente?: {
            __typename: 'ProdutoEntityResponse'
            data?: {
              __typename: 'ProdutoEntity'
              attributes?: {
                __typename: 'Produto'
                slug?: string | null
              } | null
            } | null
          } | null
        } | null> | null
      } | null
    } | null
  } | null
}

export type GetProdutosQueryVariables = Exact<{
  filters?: InputMaybe<ProdutoFiltersInput>
}>

export type GetProdutosQuery = {
  __typename: 'Query'
  produtos?: {
    __typename: 'ProdutoEntityResponseCollection'
    data: Array<{
      __typename: 'ProdutoEntity'
      id?: string | null
      attributes?: {
        __typename: 'Produto'
        nome?: string | null
        slug?: string | null
        descricao?: string | null
        preco: number
        imagem_destaque?: {
          __typename: 'UploadFileEntityResponse'
          data?: {
            __typename: 'UploadFileEntity'
            attributes?: { __typename: 'UploadFile'; url: string } | null
          } | null
        } | null
        galeria?: {
          __typename: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename: 'UploadFile'
              url: string
              name: string
              width?: number | null
              height?: number | null
            } | null
          }>
        } | null
        cores?: Array<{
          __typename: 'ComponentComponentsProdutoComponentColor'
          cor?: Enum_Componentcomponentsprodutocomponentcolor_Cor | null
          produtoReferente?: {
            __typename: 'ProdutoEntityResponse'
            data?: {
              __typename: 'ProdutoEntity'
              attributes?: {
                __typename: 'Produto'
                slug?: string | null
              } | null
            } | null
          } | null
        } | null> | null
      } | null
    }>
  } | null
}

export type GetProfileQueryVariables = Exact<{ [key: string]: never }>

export type GetProfileQuery = {
  __typename: 'Query'
  me?: {
    __typename: 'UsersPermissionsMe'
    id: string
    username: string
    email?: string | null
  } | null
}

export const ProdutoFragmentFragmentDoc = gql`
  fragment ProdutoFragment on Produto {
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
        id
        attributes {
          url
          name
          width
          height
        }
      }
    }
    cores {
      cor
      produtoReferente {
        data {
          attributes {
            slug
          }
        }
      }
    }
  }
`
export const MutationUpdateFavoritoDocument = gql`
  mutation mutationUpdateFavorito($id: ID!, $data: FavoritoInput!) {
    updateFavorito(id: $id, data: $data) {
      data {
        id
        attributes {
          produtos {
            data {
              id
              attributes {
                ...ProdutoFragment
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
  ${ProdutoFragmentFragmentDoc}
`
export type MutationUpdateFavoritoMutationFn = Apollo.MutationFunction<
  MutationUpdateFavoritoMutation,
  MutationUpdateFavoritoMutationVariables
>

/**
 * __useMutationUpdateFavoritoMutation__
 *
 * To run a mutation, you first call `useMutationUpdateFavoritoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationUpdateFavoritoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationUpdateFavoritoMutation, { data, loading, error }] = useMutationUpdateFavoritoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useMutationUpdateFavoritoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationUpdateFavoritoMutation,
    MutationUpdateFavoritoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MutationUpdateFavoritoMutation,
    MutationUpdateFavoritoMutationVariables
  >(MutationUpdateFavoritoDocument, options)
}
export type MutationUpdateFavoritoMutationHookResult = ReturnType<
  typeof useMutationUpdateFavoritoMutation
>
export type MutationUpdateFavoritoMutationResult =
  Apollo.MutationResult<MutationUpdateFavoritoMutation>
export type MutationUpdateFavoritoMutationOptions = Apollo.BaseMutationOptions<
  MutationUpdateFavoritoMutation,
  MutationUpdateFavoritoMutationVariables
>
export const MutationCreateFavoritoDocument = gql`
  mutation mutationCreateFavorito($data: FavoritoInput!) {
    createFavorito(data: $data) {
      data {
        id
        attributes {
          produtos {
            data {
              id
              attributes {
                ...ProdutoFragment
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
  ${ProdutoFragmentFragmentDoc}
`
export type MutationCreateFavoritoMutationFn = Apollo.MutationFunction<
  MutationCreateFavoritoMutation,
  MutationCreateFavoritoMutationVariables
>

/**
 * __useMutationCreateFavoritoMutation__
 *
 * To run a mutation, you first call `useMutationCreateFavoritoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationCreateFavoritoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationCreateFavoritoMutation, { data, loading, error }] = useMutationCreateFavoritoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useMutationCreateFavoritoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationCreateFavoritoMutation,
    MutationCreateFavoritoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MutationCreateFavoritoMutation,
    MutationCreateFavoritoMutationVariables
  >(MutationCreateFavoritoDocument, options)
}
export type MutationCreateFavoritoMutationHookResult = ReturnType<
  typeof useMutationCreateFavoritoMutation
>
export type MutationCreateFavoritoMutationResult =
  Apollo.MutationResult<MutationCreateFavoritoMutation>
export type MutationCreateFavoritoMutationOptions = Apollo.BaseMutationOptions<
  MutationCreateFavoritoMutation,
  MutationCreateFavoritoMutationVariables
>
export const MutationRegisterDocument = gql`
  mutation MutationRegister($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`
export type MutationRegisterMutationFn = Apollo.MutationFunction<
  MutationRegisterMutation,
  MutationRegisterMutationVariables
>

/**
 * __useMutationRegisterMutation__
 *
 * To run a mutation, you first call `useMutationRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationRegisterMutation, { data, loading, error }] = useMutationRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationRegisterMutation,
    MutationRegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MutationRegisterMutation,
    MutationRegisterMutationVariables
  >(MutationRegisterDocument, options)
}
export type MutationRegisterMutationHookResult = ReturnType<
  typeof useMutationRegisterMutation
>
export type MutationRegisterMutationResult =
  Apollo.MutationResult<MutationRegisterMutation>
export type MutationRegisterMutationOptions = Apollo.BaseMutationOptions<
  MutationRegisterMutation,
  MutationRegisterMutationVariables
>
export const GetFavoritosDocument = gql`
  query getFavoritos($filters: FavoritoFiltersInput) {
    favoritos(filters: $filters) {
      data {
        id
        attributes {
          produtos {
            data {
              id
              attributes {
                ...ProdutoFragment
              }
            }
          }
        }
      }
    }
  }
  ${ProdutoFragmentFragmentDoc}
`

/**
 * __useGetFavoritosQuery__
 *
 * To run a query within a React component, call `useGetFavoritosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritosQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetFavoritosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFavoritosQuery,
    GetFavoritosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetFavoritosQuery, GetFavoritosQueryVariables>(
    GetFavoritosDocument,
    options
  )
}
export function useGetFavoritosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFavoritosQuery,
    GetFavoritosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetFavoritosQuery, GetFavoritosQueryVariables>(
    GetFavoritosDocument,
    options
  )
}
export function useGetFavoritosSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetFavoritosQuery,
    GetFavoritosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetFavoritosQuery, GetFavoritosQueryVariables>(
    GetFavoritosDocument,
    options
  )
}
export type GetFavoritosQueryHookResult = ReturnType<
  typeof useGetFavoritosQuery
>
export type GetFavoritosLazyQueryHookResult = ReturnType<
  typeof useGetFavoritosLazyQuery
>
export type GetFavoritosSuspenseQueryHookResult = ReturnType<
  typeof useGetFavoritosSuspenseQuery
>
export type GetFavoritosQueryResult = Apollo.QueryResult<
  GetFavoritosQuery,
  GetFavoritosQueryVariables
>
export const GetProdutoDocument = gql`
  query getProduto($produtoId: ID) {
    produto(id: $produtoId) {
      data {
        id
        attributes {
          ...ProdutoFragment
        }
      }
    }
  }
  ${ProdutoFragmentFragmentDoc}
`

/**
 * __useGetProdutoQuery__
 *
 * To run a query within a React component, call `useGetProdutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProdutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProdutoQuery({
 *   variables: {
 *      produtoId: // value for 'produtoId'
 *   },
 * });
 */
export function useGetProdutoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProdutoQuery,
    GetProdutoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProdutoQuery, GetProdutoQueryVariables>(
    GetProdutoDocument,
    options
  )
}
export function useGetProdutoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProdutoQuery,
    GetProdutoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProdutoQuery, GetProdutoQueryVariables>(
    GetProdutoDocument,
    options
  )
}
export function useGetProdutoSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProdutoQuery,
    GetProdutoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetProdutoQuery, GetProdutoQueryVariables>(
    GetProdutoDocument,
    options
  )
}
export type GetProdutoQueryHookResult = ReturnType<typeof useGetProdutoQuery>
export type GetProdutoLazyQueryHookResult = ReturnType<
  typeof useGetProdutoLazyQuery
>
export type GetProdutoSuspenseQueryHookResult = ReturnType<
  typeof useGetProdutoSuspenseQuery
>
export type GetProdutoQueryResult = Apollo.QueryResult<
  GetProdutoQuery,
  GetProdutoQueryVariables
>
export const GetProdutosDocument = gql`
  query getProdutos($filters: ProdutoFiltersInput) {
    produtos(filters: $filters) {
      data {
        id
        attributes {
          ...ProdutoFragment
        }
      }
    }
  }
  ${ProdutoFragmentFragmentDoc}
`

/**
 * __useGetProdutosQuery__
 *
 * To run a query within a React component, call `useGetProdutosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProdutosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProdutosQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetProdutosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProdutosQuery,
    GetProdutosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProdutosQuery, GetProdutosQueryVariables>(
    GetProdutosDocument,
    options
  )
}
export function useGetProdutosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProdutosQuery,
    GetProdutosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProdutosQuery, GetProdutosQueryVariables>(
    GetProdutosDocument,
    options
  )
}
export function useGetProdutosSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProdutosQuery,
    GetProdutosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetProdutosQuery, GetProdutosQueryVariables>(
    GetProdutosDocument,
    options
  )
}
export type GetProdutosQueryHookResult = ReturnType<typeof useGetProdutosQuery>
export type GetProdutosLazyQueryHookResult = ReturnType<
  typeof useGetProdutosLazyQuery
>
export type GetProdutosSuspenseQueryHookResult = ReturnType<
  typeof useGetProdutosSuspenseQuery
>
export type GetProdutosQueryResult = Apollo.QueryResult<
  GetProdutosQuery,
  GetProdutosQueryVariables
>
export const GetProfileDocument = gql`
  query getProfile {
    me {
      id
      username
      email
    }
  }
`

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    options
  )
}
export function useGetProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    options
  )
}
export function useGetProfileSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProfileQuery,
    GetProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(
    GetProfileDocument,
    options
  )
}
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>
export type GetProfileLazyQueryHookResult = ReturnType<
  typeof useGetProfileLazyQuery
>
export type GetProfileSuspenseQueryHookResult = ReturnType<
  typeof useGetProfileSuspenseQuery
>
export type GetProfileQueryResult = Apollo.QueryResult<
  GetProfileQuery,
  GetProfileQueryVariables
>
