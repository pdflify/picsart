import Link from 'next/link'
import dynamic from 'next/dynamic'
import siteNavigationLink from './../siteNavigationLink'
//import ThemeSwitch from './ThemeSwitch'
//import { useRouter } from 'next/router'
//import { useTranslation, Trans } from 'next-i18next'

const DynamicMobileNav = dynamic(() => import('./MobileNav'),
{ ssr: false })

const DynamicThemeSwitch = dynamic(() => import('./ThemeSwitch'),
{ ssr: false })

//const DynamicLangChang = dynamic(() => import('./LangChang'),
//{ ssr: false })

const APP_LOGO_NAME = 'PicsArt Mod Apk'

export default function NavBar() {
  return (
    
    <><div className="relative">
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 h-72 z-[-1] opacity-20 pointer-events-none"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          animationDelay: "0.6s",
          animationDuration: "1s"
        }}
        className="fade-in"
      >
        <canvas height={576} width={686} style={{ width: 343, height: 288 }} />
      </div>
    </div>
    <div className="h-1 bg-gradient-to-r from-[#9867f0] to-[#ed4e50]" />
    <header className="p-4">
      <div className="flex items-center justify-between">
      <h1>
    <Link href={`${process.env.NEXT_PUBLIC_HOST}`}>{APP_LOGO_NAME}</Link></h1> 
       
        <nav className="space-x-4 text-sm text-gray-600">
        <DynamicThemeSwitch />
        
       
        </nav>
      </div>
    </header>
  </div>
  
   {/*
    <header className="py-2 shadow-md z-30 ">
    <div className="container mx-auto px-4 lg:px-20 flex items-center justify-between">
    <div className="text-lg flex"><h1>
    <Link href={`${process.env.NEXT_PUBLIC_HOST}`}>{APP_LOGO_NAME}</Link></h1>    
    </div> 
        <div className="flex items-center">
          <nav className="uppercase text-lg lg:flex hidden" itemScope itemType="https://schema.org/SiteNavigationElement">
            {siteNavigationLink.map((item) => (
              <Link key={item.name} 
                    href={item.href} 
                    target={item.target}
                    itemProp="url" className="px-4 hover:text-[#673AB7] dark:hover:text-[#FFC107]">                 
             
               <span itemProp="name">{item.name}</span>
              
              </Link>   
            ))} 
            </nav>
          <DynamicThemeSwitch />
          <DynamicMobileNav /> 
        </div>
    </div>
    </header>*/}
    </>
  )
}

