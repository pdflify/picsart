import Head from 'next/head'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PicsArtHome, MetaData } from '../components/HomePage';



type Props = {
}

const Home = (_Props: InferGetStaticPropsType<typeof getStaticProps>) =>  {
  //const router = useRouter()
 
   
  const { t } = useTranslation('common')
  return (
    <>
    <MetaData />
      {/* <Head>     
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST}${t('canonical')}`} />
        <link rel="amphtml" href={`${process.env.NEXT_PUBLIC_HOST}${t('canonical')}/amp`} />
        <link rel="alternate" hrefLang="x-default" href={`${process.env.NEXT_PUBLIC_HOST}`} />
        <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_HOST}`} />     
        <link rel="alternate" hrefLang="hi" href={`${process.env.NEXT_PUBLIC_HOST}/hi`} />
      </Head> */}
      
      <PicsArtHome/>
      {/* <h1 className="text-3xl font-bold underline text-fuchsia-500">
      Hello world!  | {t('title')}
    </h1> */}
    </>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: { 
    ...await serverSideTranslations (locale ?? 'en', ['common'])  ,
  },
})

export default Home

