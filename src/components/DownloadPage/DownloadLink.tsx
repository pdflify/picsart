import { Component } from 'react'
import Link from 'next/link'

export class DownloadLink extends Component {
    render() {
        return (
            <Link target="_blank" rel="noopener noreferrer"  href="https://bit.ly/3HLKmmU"> Download APK</Link> 
        )
    }
}

export default DownloadLink