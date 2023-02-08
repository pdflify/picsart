import React, { Component } from "react";
import Image from "next/image";
import PicsartWindowsIcon from '/./public/img/windows-icon.webp'

export default class WindowsIcon extends Component {
  render() {
    return (
        <figure>
             <Image
      alt="PicsArt Mod APK Icon"
      src={PicsartWindowsIcon}
      placeholder="blur"
      width={150}
      height={150}
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
