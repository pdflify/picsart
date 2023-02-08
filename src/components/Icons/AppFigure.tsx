import React, { Component } from "react";
import Image from "next/image";
import Picsart from '/./public/img/picsart-mod-apk.webp'

export default class AppFigure extends Component {
  render() {
    return (
        <figure className="h-36 w-36">
             <Image
      alt="PicsArt Mod APK Icon"
      src={Picsart}
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
