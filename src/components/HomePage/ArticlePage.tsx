import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'
import FaqsPage from './FaqsPage'
import AppInfo from './AppInfo'


const DynamicToolBar = dynamic(() => import('../Icons/ToolBar'), {
    suspense: true,
})

const DynamicArticleTab = dynamic(() => import('./ArticleTab'), {
    suspense: true,
})

const DynamicAppFigure = dynamic(() => import('../Icons/AppFigure'), {
    suspense: true,
})

const DynamicWindowsIcon = dynamic(() => import('../Icons/WindowsIcon'), {
    suspense: true,
})

const DynamicWindowsFeature = dynamic(() => import('../Icons/WindowsFeature'), {
    suspense: true,
})


const KeyFeatures = [
    { id: "a", name: <Trans i18nKey='article.keyf.list.a'></Trans> }, 
    { id: "b", name: <Trans i18nKey='article.keyf.list.b'></Trans> },
    { id: "c", name: <Trans i18nKey='article.keyf.list.c'></Trans> },
    { id: "d", name: <Trans i18nKey='article.keyf.list.d'></Trans> },
    { id: "e", name: <Trans i18nKey='article.keyf.list.e'></Trans> },
    { id: "f", name: <Trans i18nKey='article.keyf.list.f'></Trans> },
    { id: "g", name: <Trans i18nKey='article.keyf.list.g'></Trans> },
    { id: "h", name: <Trans i18nKey='article.keyf.list.h'></Trans> },
    { id: "i", name: <Trans i18nKey='article.keyf.list.i'></Trans> },
    { id: "j", name: <Trans i18nKey='article.keyf.list.j'></Trans> },
    { id: "k", name: <Trans i18nKey='article.keyf.list.k'></Trans> },
    { id: "l", name: <Trans i18nKey='article.keyf.list.l'></Trans> },
    { id: "m", name: <Trans i18nKey='article.keyf.list.m'></Trans> },
]

export default function ArticlePage() {
    const { t } = useTranslation('common')
    return (
        <>
            <DynamicArticleTab />
            <h2 className="lg:px-44 px-4 max-w-3xl mx-auto lg:text-xl text-gray-600 text-center leading-normal" itemProp="headline">
              <strong><Trans i18nKey='article.keyf.h2'></Trans></strong>  
            </h2>
            <div className="py-2 lg:py-12 text-center px-6 "><div className="z-1 relative inline-flex ">  
            <DynamicToolBar/></div></div> 
            <div className="contener lg:px-48 px-3 lg:text-xl text-gray-600 leading-normal font-light">
                <p itemProp="text"><Trans i18nKey='article.keyf.p'></Trans></p>
            </div>
            <div className="contener lg:px-56 px-6 mt-4 lg:text-xl font-light">
            <ul className="list-disc list-outside">
            {KeyFeatures.map((item) => (
              <li key={item.id} itemProp="name">{item.name}</li>
            ))} 
            </ul>
            </div>
            <h2 className="lg:px-44 px-4 mt-4 max-w-3xl mx-auto lg:text-xl text-gray-600 text-center leading-normal" itemProp="headline">
             <Trans i18nKey='article.howto.h2'></Trans>
            </h2>
            <div className="contener lg:px-48 px-3 mt-2 lg:text-xl text-gray-600 leading-normal font-light">
                <p itemProp="text"><Trans i18nKey='article.howto.p'></Trans></p>
            </div>
            <div className="contener lg:px-56 px-6 mt-4 lg:text-xl font-light">
            <ol className="list-decimal list-outside">
              <li itemProp="name"><Trans i18nKey='article.howto.a'></Trans></li>
              <li itemProp="name"><Trans i18nKey='article.howto.b'></Trans></li>
              <li itemProp="name"><Trans i18nKey='article.howto.c'></Trans></li>
              <li itemProp="name"><Trans i18nKey='article.howto.d'></Trans></li>
            </ol>
            </div>
            <div className="contener lg:px-48 px-3 mt-2 lg:text-xl text-gray-600 leading-normal font-light">
                <p itemProp="text"><Trans i18nKey='article.howto.e'></Trans></p>
            </div>
            <h2 className="lg:px-44 px-4 mt-4 max-w-3xl mx-auto lg:text-xl text-gray-600 text-center leading-normal" itemProp="headline">
             <Trans i18nKey='article.download.h2'></Trans>
            </h2>
            <div className="contener lg:px-48 px-3 mt-2 lg:text-xl text-gray-600 leading-normal font-light">
            <div className="text-center items-center mx-auto">
                <div className="z-1 relative inline-flex justify-center"> 
                <Suspense fallback={`Loading...`}>
                <DynamicAppFigure />
            </Suspense></div>
            </div>              
                <p itemProp="text"><Trans i18nKey='article.download.p'></Trans></p>              
            </div>
            <AppInfo />
            <div className="contener lg:px-48 px-3 mt-2 lg:text-xl text-gray-600 leading-normal font-light">
            <p itemProp="text"><Trans i18nKey='article.download.note'></Trans></p>  
            <div className="py-2 z-1 px-6 mt-8 rounded-full gradient-border-badge relative bg-transparent inline-flex items-center justify-center ">
            <span className="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#9867f0] to-[#ed4e50] font-semibold relative -top-px">
            <Trans i18nKey='article.download.info.info.download'></Trans> 
            </span>
          </div>         
            </div>
            <h2 className="lg:px-44 px-4 mt-4 max-w-3xl mx-auto lg:text-xl text-gray-600 text-center leading-normal" itemProp="headline">
             <Trans i18nKey='article.windows.h2'></Trans>
            </h2>
           
            <div className="contener lg:px-48 px-3 mt-2 lg:text-xl text-gray-600 leading-normal font-light">
            <div className="text-center items-center mx-auto">
                <div className="z-1 relative inline-flex justify-center"> 
                <Suspense fallback={`Loading...`}>
                <DynamicWindowsIcon/>   
            </Suspense></div>
            </div>   
             
            <p itemProp="text"><Trans i18nKey='article.windows.p'></Trans></p>  
            <p itemProp="text"><Trans i18nKey='article.windows.p2'></Trans></p> 
            <div className="mt-2 text-center items-center mx-auto">
                <div className="z-1 relative inline-flex justify-center"> 
                <Suspense fallback={`Loading...`}>
                <DynamicWindowsFeature/>

            </Suspense></div>
            </div>   
            <p itemProp="text" className="my-2 mt-4 p-3 shadow-2xl bg-slate-800 rounded-3xl text-white"><Trans i18nKey='article.windows.q'></Trans></p> 
            <p itemProp="text" className="my-2 p-3 shadow-2xl bg-slate-800 rounded-full text-white"><Trans i18nKey='article.windows.q2'></Trans></p> 
            <p itemProp="text" className="my-2 p-3 shadow-2xl bg-slate-800 rounded-3xl text-white"><Trans i18nKey='article.windows.q3'></Trans></p>   
            <div className="py-2 z-1 px-6 mt-8 rounded-full gradient-border-badge relative bg-transparent inline-flex items-center justify-center ">
            <span className="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#9867f0] to-[#ed4e50] font-semibold relative -top-px">
            <Trans i18nKey='article.windows.download'></Trans> 
            </span>
          </div>      
            </div>
            <h2 className="lg:px-44 px-4 mt-8 max-w-3xl mx-auto lg:text-xl text-gray-600 text-center leading-normal" itemProp="headline">
             <Trans i18nKey='article.opinion.h2'></Trans>
            </h2>
            <div className="contener lg:px-48 px-3 mt-2 lg:text-xl text-gray-600 leading-normal font-light">
            <p itemProp="text"><Trans i18nKey='article.opinion.p'></Trans></p>  
            <p itemProp="text"><Trans i18nKey='article.opinion.p2'></Trans></p> 
            <p itemProp="text" className="my-2 mt-4 p-3 shadow-2xl bg-slate-800 rounded-3xl text-white"><Trans i18nKey='article.opinion.q'></Trans></p> 
            <p itemProp="text" className="my-2 p-3 shadow-2xl bg-slate-800 rounded-full text-white"><Trans i18nKey='article.opinion.q2'></Trans></p> 
            <p itemProp="text" className="my-2 p-3 shadow-2xl bg-slate-800 rounded-3xl text-white"><Trans i18nKey='article.opinion.q3'></Trans></p>   
            </div>










          
        </>
    )
}
