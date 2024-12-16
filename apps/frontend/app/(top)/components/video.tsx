import React from "react";
import Image from "next/image";

export default function Video() {
  return <>
    <div className="fixed inset-0 w-screen h-screen z-0">
      <video src="/top/hero/video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover"></video>
      <div className="absolute top-[2%] left-1/2 w-auto h-[70%] aspect-[1576/782] translate-x-[-50%]">
        <Image src="/top/hero/particles.svg" alt="hero" width={1576} height={782} className="object-contain pointer-events-none" />
      </div>
      <Image src="/top/hero/redefinition.svg" alt="hero" width={1920} height={154} className="absolute bottom-0 left-0 w-full h-auto pointer-events-none" />
    </div>
  </>;
}
