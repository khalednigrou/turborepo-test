/**
 *
 * Picture component for Next.js Image component.
 *
 * how to use:
 * <Picture sources={[{ src: "/images/example.jpg", type: "image/jpeg" }]} img={{ src: "/images/example.jpg", alt: "Example image" }} />
 *
 *
 */

import type { HTMLAttributes } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@frontend/lib/utils";

type PictureProps = HTMLAttributes<HTMLPictureElement> & {
  sources: { srcset: string; type: string }[];
  img: ImageProps;
};

export default function Picture({ sources, img, ...rest }: PictureProps) {
  const { alt, ...imgProps } = img;
  const { className, ...restProps } = rest;

  return (
    <picture className={cn(className)} {...restProps}>
      {sources.map((source, index) => (
        <source {...source} key={`source-${index}`} />
      ))}
      <Image {...imgProps} alt={alt} className={cn(imgProps.className, "pointer-events-none")} />
    </picture>
  );
}
