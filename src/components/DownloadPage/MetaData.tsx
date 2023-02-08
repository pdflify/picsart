import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const MetaData = ( ) =>  {
    const { t } = useTranslation('download')
  return (
    <Head>
    <title>{t('title')} मुफ्त डाउनलोड</title>
    <meta content={t('dec')} name="description" />
    <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST}${t('canonical')}/download`} />
    {/* <link rel="amphtml" href={`${process.env.NEXT_PUBLIC_HOST}${t('canonical')}/amp`} /> */}
    <link rel="alternate" hrefLang="x-default" href={`${process.env.NEXT_PUBLIC_HOST}/download`} />
    <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_HOST}/download`} />     
     <link rel="alternate" hrefLang="hi" href={`${process.env.NEXT_PUBLIC_HOST}/hi/download`} />
    <meta content={`${process.env.NEXT_PUBLIC_HOST}${t('canonical')}`} property="og:url" />
    <meta content={`${process.env.NEXT_PUBLIC_HOST}/img/PicsArt_Og.webp`} property="og:image" name="twitter:image" itemProp="image primaryImageOfPage" />
    <meta content={`${t('title')}  मुफ्त डाउनलोड`} name="twitter:title" property="og:title" itemProp="name" />
    <meta content={t('dec')} name="twitter:description" property="og:description" itemProp="description" />  
    <meta content={t('updatedAt')} property="article:published_time" />
    <meta content={t('createdAt')} property="article:published_time" />
    {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "WebPage",
      "name":`${title}`,
      "headline" : `${title}`,
      "description":`${dec}`,
      "@id": `${`${process.env.NEXT_PUBLIC_HOST}/font/${slug}`}`,
      "url": `${`${process.env.NEXT_PUBLIC_HOST}/font/${slug}`}`,
      "datePublished": `${createdAt}`,
	    "dateModified": `${updatedAt}`,
      "inLanguage":"en",
      "image": {
		"@type": "ImageObject",
		"url": `${`${process.env.NEXT_PUBLIC_HOST}/api/font/${title}`}`,
		"width": 1200,
		"height": 630
	  },
		// "@type": "Article",
		// "@id": `${`${process.env.NEXT_PUBLIC_HOST}/font/${slug}`}`,
    //     "name":`${title}`,
    //     "headline" : `${title}`,
    //     "description":`${dec}`,
    //     "articleSection":[`${categories.map((c, i) => (c.name))}`],
    //     "url": `${`${process.env.NEXT_PUBLIC_HOST}/font/${slug}`}`,
    //     "inLanguage":"en",
    //     "datePublished": `${createdAt}`,
    //     "dateModified": `${updatedAt}`,
    //     "image": {
    //       "@type": "ImageObject",
    //       "url": `${`${process.env.NEXT_PUBLIC_HOST}/api/font/${title}`}`,
    //       "width": 1200,
    //       "height": 630
    //     },
	  // },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          `${summary}`
        ]
        },
      "author": {
          "@type": "Person",
          name: `${process.env.NEXT_PUBLIC_AUTHOR}`,
          url: `${process.env.NEXT_PUBLIC_HOST}/author/sudodk`,
          worksFor: {
            "@type": "Organization",
            name: `${process.env.NEXT_PUBLIC_APP}`,
            url: `${process.env.NEXT_PUBLIC_HOST}`
          }, 
       },   
      "publisher":{"@type":"Organization","name":`${process.env.NEXT_PUBLIC_APP}`,"url":`${process.env.NEXT_PUBLIC_HOST}`,
      "logo": {"@type": "ImageObject", "url":`${process.env.NEXT_PUBLIC_HOST}/img/logo.png`, "width": 368, "height": 50 }} })
    }} /> */}
           {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "SoftwareApplication",
              "applicationSubCategory": "TrueType Font",
              "screenshot" : `${cover}`,
              "name": `${title}`,
              "operatingSystem": "WINDOWS,MACOS,LINUX,ANDROID,IOS",
              "applicationCategory": `${categories.map((c, i) => (c.name))} Font`,
              "description" : `${dec}`,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "reviewCount": "50",
                "bestRating": "5"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }})
            }} /> */}
  </Head>
  )
}

export default MetaData