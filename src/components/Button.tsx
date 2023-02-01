import React from 'react'

export function Button({ children }: { children: React.ReactNode }) {
  return <button className="bg-blue-500 px-[16px] py-[8px]">{children}</button>
}
