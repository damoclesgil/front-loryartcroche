import { expect, test } from 'vitest'
import { ArrayUtils, setCharAt, capitalize, formatDate } from '.'
import { formatDateLong } from './formatDate'

test('shoud be return icons inside the date format ⏰', () => {
  let date = formatDate(new Date('2024-04-17T02:08:35.293Z'))
  let getDate = `🗓  ${date}`
  const data = setCharAt(getDate, 14, ' ⏰')
  expect(data).toEqual('🗓  16/04/2024 ⏰ 23:08:35')
})
test('formatDatePtBr()', () => {
  // isso aqui está certo, eu sei que parece que está errado o dia 26, mas é o banco salva por padrão horário de california | en-US se não me engano
  let date = formatDateLong('2024-04-26T02:25:48.283Z')
  expect(date).toEqual('25 de abril de 2024 às 23:25:48')
})
test('capitalize()', () => {
  let capt = capitalize('asd bsd')
  expect(capt).toEqual('Asd Bsd')
})
test('ArrayUtils.isEmpty()', () => {
  let array = ['a']
  let arrayEmpty = ArrayUtils.isEmpty(array)
  expect(arrayEmpty).toEqual(false)
})
