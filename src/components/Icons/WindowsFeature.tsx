import React, { Component } from "react";
import Image from "next/image";
import PicsartWindowsFeature from '/./public/img/windows-feature.webp'

export default class WindowsFeature extends Component {
  render() {
    return (
        <figure>
             <Image
      alt="PicsArt Mod APK Icon"
      src={PicsartWindowsFeature}
      placeholder="blur"
      width={1080}
      height={573}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
        </figure>
    );
  }
}
