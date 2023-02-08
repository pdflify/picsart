import React, { Component } from "react";
import Image from "next/image";
import PicsartToolBar from '/./public/img/PicsArt_All_in_One_Editor_Filters.webp'

export default class ToolBar extends Component {
  render() {
    return (
    <figure>
      <Image
      alt="PicsArt Mod APK EditingBar image"
      src={PicsartToolBar}
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
    );
  }
}
