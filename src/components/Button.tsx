import React, { PropsWithChildren } from 'react'

export function Button({ children }: PropsWithChildren) {
  const handleClick = () => {
    console.log('Vite + React + TS+ TailwindCSS!')
  }

  return (
    <button onClick={handleClick} className="bg-blue-500 px-[16px] py-[8px]">
      {children}
    </button>
  )
}
