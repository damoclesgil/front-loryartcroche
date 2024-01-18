'use client'

import React, { useState } from 'react'
import styles from './tab.module.css'

export type TabContentProps = {
  contentFirstTab: React.ReactNode
  contentSecondTab?: React.ReactNode
}

const Tabs = ({ contentFirstTab, contentSecondTab }: TabContentProps) => {
  const [activeFirstTab, setActiveFirstTab] = useState(true)
  const [activeSecondTab, setActiveSecondTab] = useState(false)

  const handleClick = (isFirstTab: Boolean) => {
    console.log('on click')
    console.log(activeFirstTab)
    if (isFirstTab) {
      setActiveFirstTab(true)
      setActiveSecondTab(false)
    } else {
      setActiveFirstTab(false)
      setActiveSecondTab(true)
    }
  }

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <button
              onClick={() => handleClick(true)}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeFirstTab
                  ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent'
              }`}
            >
              Detalhes
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => handleClick(false)}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeSecondTab
                  ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent'
              }`}
            >
              Avaliações do produto
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        {activeFirstTab && (
          <div className={`text-gray-800 ${styles['cms-content']}`}>
            {contentFirstTab}
          </div>
        )}
        {activeSecondTab && (
          <div className="cms-content">{contentSecondTab}</div>
        )}
      </div>
    </div>
  )
}
export default Tabs
