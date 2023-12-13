import React from 'react'

export type TabContentProps = {
  contentFirstTab: React.ReactNode
  contentSecondTab?: React.ReactNode
}

const Tabs = ({ contentFirstTab }: TabContentProps) => {
  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Detalhes
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              Avaliações do produto
            </a>
          </li>
          {/* <li>
          <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Disabled
          </a>
        </li> */}
        </ul>
      </div>
      <p>{contentFirstTab}</p>
    </div>
  )
}
export default Tabs
