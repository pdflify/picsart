import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function AboutPage() {
    const { t } = useTranslation('download')
    return (
        <>         
            
 
            <h2 className="lg:px-44 px-4 mt-8 max-w-3xl mx-auto lg:text-xl text-gray-600 text-center leading-normal" itemProp="headline">
            {t('h2')}
            </h2>

            <div className="contener lg:px-48 px-3 mt-2 lg:text-xl text-gray-600 leading-normal font-light">
            <p itemProp="text"> {t('p')} </p> <b/> 
            <p itemProp="text"> {t('p2')} </p> 
            <p itemProp="text"> {t('p3')} </p> 
            <p itemProp="text" className="my-2 mt-4 p-3 shadow-2xl bg-slate-800 rounded-3xl text-white">
                {t('disclaimer')} </p> 
           </div>          
        </>
    )
}
