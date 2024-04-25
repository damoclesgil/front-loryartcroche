export type OrderPriceEntity = 'preco:ASC' | 'preco:DESC'

export type Field = {
  label: string
  name: string
}

export type SortPriceField = {
  label: string
  name: OrderPriceEntity
}

export const priceFields = [
  { label: 'Abaixo de R$ 200,00', name: 200 },
  { label: 'De R$ 0 a R$ 300', name: 300 },
  { label: 'Abaixo de R$ 500,00', name: 500 },
  { label: 'Abaixo de R$ 600,00', name: 600 }
]

export const sortFields = [
  { label: 'Maior Preço', name: 'preco:ASC' },
  { label: 'Menor Preço', name: 'preco:DESC' }
] as SortPriceField[]

export const filterPrice = {
  title: 'Preço',
  name: 'preco',
  type: 'checkbox',
  fields: priceFields
}
export const filterSort = {
  title: 'Ordenar Por',
  name: 'sort',
  type: 'radio',
  fields: sortFields
}

export const filterItems = [filterPrice, filterSort]
