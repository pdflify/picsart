import { Component } from 'react'
import Link from 'next/link'

export class DownloadLink extends Component {
    render() {
        return (
            <Link target="_blank" rel="noopener noreferrer"  href={`${process.env.NEXT_PUBLIC_DOWNLOAD_LINK}`}> Download APK</Link> 
        )
    }
}

export default DownloadLink