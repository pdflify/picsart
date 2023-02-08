import React, { ReactNode } from 'react'
interface Props {
  children: ReactNode
}
const MainLayout = ({ children }: Props) => {
    return (
    <div className="container p-1 lg:px-20 mx-auto"><div className="flex flex-row flex-wrap py-4">{children}</div></div>
    ) 
  }

export default MainLayout