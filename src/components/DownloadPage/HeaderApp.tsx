import React from 'react'
import { useTranslation } from 'react-i18next'
import AppFigure  from '@/components/Icons/AppFigure'
import dynamic from 'next/dynamic'

const DynamicDownloadLink = dynamic(() => import('@/components/DownloadPage/DownloadLink'), {
  ssr: false,
})

export default function HeaderApp() {
  const { t } = useTranslation('download')
  return (
    <>
      <div className="py-6 lg:py-12 flex items-center px-6">
        <div className="text-center mx-auto inline-block">
          <div className="z-1 relative inline-flex justify-center"><AppFigure /></div>
          <h1 className="text-3xl lg:text-6xl leading-tight max-w-3xl font-bold tracking-tight mt-6 mx-auto">
            {t('title')}
          </h1>
          <p className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light dark:font-normal dark:text-black">
            {t('summary')}
          </p>
          <p className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light">
            <strong>{t('summary-A')}</strong>
          </p>
          <p className="max-w-3xl mx-auto lg:text-xl text-gray-600 mt-3 leading-normal font-light"><strong>{t('current-version')}:</strong> 20.9.4</p>
          <div className="py-2 z-1 px-6 mt-8 rounded-full gradient-border-badge relative bg-transparent inline-flex items-center justify-center ">
            <span className="z-10 text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-[#9867f0] to-[#ed4e50] font-semibold relative -top-px">
            <DynamicDownloadLink/>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
