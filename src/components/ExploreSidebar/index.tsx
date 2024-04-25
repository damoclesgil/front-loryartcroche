'use client'

import xor from 'lodash.xor'
import { ParsedUrlQueryInput } from 'querystring'
import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Field, OrderPriceEntity } from '@/utils/filter/fields'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}
type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)
  const [order, setOrder] = useState<OrderPriceEntity>('preco:ASC')

  useEffect(() => {
    onFilter(values)
    // this method comes from another template
    // that we don't have access
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleRadio = (value: string | boolean) => {
    // console.log('e', e)

    if (order === 'preco:ASC') {
      setOrder('preco:DESC')
    } else {
      setOrder('preco:ASC')
    }
    // console.log()
    setValues((s) => ({ ...s, sort: order }))
  }

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || []
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }))
  }

  const handleFilterMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <span>Input Search</span>
      {JSON.stringify(values)}

      {items.map((item) => {
        return (
          <div key={item.name}>
            <h3 className="text-lg font-semibold mb-1 mt-2">{item.title}</h3>
            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <div className="space-y-2" key={field.name}>
                  <Checkbox
                    id={field.name}
                    checked={(values[item.name] as string[])?.includes(
                      field.name
                    )}
                    onCheckedChange={() =>
                      handleCheckbox(item.name, field.name)
                    }
                  />
                  <Label htmlFor={field.name} className="ml-2 cursor-pointer">
                    {field.label}
                  </Label>
                </div>
              ))}

            {item.type === 'radio' && (
              // onValueChange={() =>
              //   handleRadio(item.name, item.fields[0].name)
              // }
              <RadioGroup
                defaultValue={item.fields[0].name}
                onValueChange={() => handleRadio(item.fields[0].name)}
              >
                {item.fields.map((field) => (
                  <div className="flex items-center space-x-2" key={field.name}>
                    <RadioGroupItem value={field.name} id={field.name} />
                    <Label htmlFor={field.name}>{field.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        )
      })}
    </>
  )
}
export default ExploreSidebar
