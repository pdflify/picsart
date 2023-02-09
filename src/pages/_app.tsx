import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useAmp } from 'next/amp'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic'
import { NavBar, FooterApp } from '../components/layouts'
import Head from 'next/head'

const DynamicNextprogress = dynamic(() => import('../components/layouts/Nextprogress'),
{ ssr: false })


const App = ({ Component, pageProps }: AppProps) => {
  const isAmp = useAmp()
  return (
    <>
     {isAmp ? ( 
    <Component {...pageProps} />
     ): (
      <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
  </Head>  
    <ThemeProvider attribute="class">
     <DynamicNextprogress />
     <NavBar/>
      <Component {...pageProps} />
     <FooterApp/>
    </ThemeProvider>
    </>
    )}
    </>
  ) 
}

export default appWithTranslation(App);
export const config = { amp: 'hybrid' }
