import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'
import i18nextConfig from './../../next-i18next.config'
//import Script from 'next/script'
//<Script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-632703a41c79a0a0" strategy="lazyOnload" />
type Props = DocumentProps & {
  // add custom document props
}


class MyDocument extends Document<Props> {
  render() {
    const currentLocale =
    this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale} prefix="og: http://ogp.me/ns#" className="scroll-smooth">
        <Head>
        {/* <meta charSet="utf-8" /> */}
        <meta content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=3,user-scalable=yes" name="viewport" />
        <meta name="msvalidate.01" content="B5BCE421892185260D045E1067A1A9D4" />
        <meta content="index, follow" name="robots" />  
        <meta name="google-site-verification" content="zpE2OS1Dt9GRowS3xMM12_58AdxNJj-u-3ChHV2LopQ" />   
        <meta content="#fff" name="theme-color" media="(prefers-color-scheme: light)" />
        <meta content="#000" name="theme-color" media="(prefers-color-scheme: dark)" />
        <meta content="WebSite" property="og:type" />
        <meta content="PicsArt Mod Apk" property="og:site_name" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="max-image-preview:large" name="robots" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta name="author" content="SudoDK" />
        <meta content={process.env.NEXT_PUBLIC_APP} name="apple-mobile-web-app-title" />
        <meta content={process.env.NEXT_PUBLIC_APP} name="application-name"  />    
        <meta content="#9f00a7" name="msapplication-TileColor" />
        <meta content="/icons/browserconfig.xml" name="msapplication-config" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#9f00a7" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="android-touch-icon" href="/icons/android-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="//picsart.site" />
	      <link rel='dns-prefetch' href="//www.google.com" />
        <link rel="dns-prefetch" href="//apis.google.com" />
        <link rel="dns-prefetch" href="//cdn.ampproject.org" />  
	      <link rel='dns-prefetch' href="//www.google-analytics.com" />
	      <link rel='dns-prefetch' href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//adservice.google.ca" />
        <link rel="dns-prefetch" href="//adservice.google.com" />
        <link rel="dns-prefetch" href="//securepubads.g.doubleclick.net" />  
	      <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//tpc.googlesyndication.com" />
        <link rel="dns-prefetch" href="//stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "Person",
               "name":`${process.env.NEXT_PUBLIC_APP} Org`,
               "url":`${process.env.NEXT_PUBLIC_HOST}/author/censusindia-org`,
               "worksFor":{"@type":"Organization","name":`${process.env.NEXT_PUBLIC_APP}`,"url":`${process.env.NEXT_PUBLIC_HOST}`} })
        }} /> */}
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Organization",
            "name": `${process.env.NEXT_PUBLIC_APP}`,
            "url": `${process.env.NEXT_PUBLIC_HOST}`,
            "logo": {"@type": "ImageObject", "url":`${process.env.NEXT_PUBLIC_HOST}/img/logo.png`, "width": 368, "height": 50 },
            "sameAs": [
              "https://www.facebook.com/censusindia_org",
              "https://twitter.com/censusindia_org"
            ]})
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
           "@context": "https://schema.org",
           "@type": "WebSite",
           "url": `${process.env.NEXT_PUBLIC_HOST}`,
           "potentialAction": {
             "@type": "SearchAction",
             "target": {
               "@type": "EntryPoint",
               "urlTemplate": `${process.env.NEXT_PUBLIC_HOST}/search?q={search_term_string}`
             },
             "query-input": "required name=search_term_string" } })
        }} /> */}
        </Head>
        <body>      
        <Main />       
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument