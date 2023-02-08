import React, { Component } from "react";
import Image from "next/image";
import PicsartEditingBar from '/./public/img/PicsArt-editing-bar.webp'

export default class EditingBar extends Component {
  render() {
    return (
<div className="py-6 lg:py-12 flex items-center px-6">
  <div className="text-center mx-auto inline-block">
     <div className="z-1 relative inline-flex justify-center">
        <figure>
             <Image
      alt="PicsArt Mod APK EditingBar image"
      src={PicsartEditingBar}
      placeholder="blur"
      width={191}
      height={108}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
        </figure>
        </div>  </div>  </div>  
    );
  }
}
