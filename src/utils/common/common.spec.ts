import { expect, test } from 'vitest'
import { ArrayUtils, setCharAt, capitalize, formatDate } from '.'

test('shoud be return icons inside the date format ⏰', () => {
  let date = formatDate(new Date('2024-04-17T02:08:35.293Z'))
  let getDate = `🗓  ${date}`
  const data = setCharAt(getDate, 14, ' ⏰')
  expect(data).toEqual('🗓  16/04/2024 ⏰ 23:08:35')
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
