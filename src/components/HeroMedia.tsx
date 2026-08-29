"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroMediaProps {
  videoSrc: string;
  imageSrc: string;
  imageAlt?: string;
}

export function HeroMedia({ videoSrc, imageSrc, imageAlt = "" }: HeroMediaProps) {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="relative h-[320px] w-full rounded-[20px] overflow-hidden">
      <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoEnded ? "opacity-0" : "opacity-100"
        }`}
        src={videoSrc}
        muted
        autoPlay
        playsInline
        controls={false}
        onEnded={() => setVideoEnded(true)}
      />
    </div>
  );
}
