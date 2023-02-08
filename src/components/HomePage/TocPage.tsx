import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Link from 'next/link'

export default function TocPage() {
  const { t } = useTranslation('common')
   return (
     <>
<section className="contener lg:px-48">
  <ul className="lg:text-xl text-gray-600 leading-normal divide-y divide-gray-200 dark:divide-gray-800 ">
    <li className="p-2 text-center"><p><b>Contents</b></p></li>
    <li className="p-2 text-center text-[#9867f0]">
     <Link href="#about_picsart_photo_editor"> <Trans i18nKey='article.about.h2'></Trans></Link>   
    </li>
    <li className="p-2 text-center text-[#9867f0]">
     <Link href="#about_picsart_photo_editor"><Trans i18nKey='article.mod.h2'></Trans></Link>   
    </li>
    <li className="p-2 text-center text-[#9867f0]">
     <Link href="#about_picsart_photo_editor"><Trans i18nKey='article.gold.h2'></Trans></Link>   
    </li>
    <li className="p-2 text-center text-[#9867f0]">
     <Link href="#about_picsart_photo_editor"> About PicsArt Photo Editor</Link>   
    </li>
  </ul>
</section>
     </>
    );
   }
//}