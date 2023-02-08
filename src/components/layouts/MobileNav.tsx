import { useState } from 'react'
import Link from 'next/link'
import siteNavigationLink from './../siteNavigationLink'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="h-10 w-10"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
       ☰   
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-6 mt-2 h-10 w-10"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
             ✕ 
          </button>
        </div>
        <nav className="mt-4">
        {siteNavigationLink.map((item) => (
              <Link key={item.name} href={item.href} target={item.target}
              className="py-1 px-4 flex hover:text-green-600">                 
              
                {item.name}
               
              </Link>   
            ))} 
        </nav>
      </div>
    </div>
  )
}

export default MobileNav