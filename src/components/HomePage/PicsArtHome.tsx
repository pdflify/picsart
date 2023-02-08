import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import HeaderApp from './HeaderApp'
import TocPage from './TocPage'
import AppInfo from './AppInfo'
import ArticlePage from './ArticlePage'

const DynamicEditingBar = dynamic(() => import('../Icons/EditingBar'), {
    suspense: true,
})

export class PicsArtHome extends Component {
    render() {
        return (
            <>
                <HeaderApp />
                <TocPage />
                <Suspense fallback={`Loading...`}>
                    <DynamicEditingBar />
                </Suspense>             
                <ArticlePage/>
               
            </>
        )
    }
}

export default PicsArtHome