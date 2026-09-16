import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageValue } from "@/.utils/types";

interface SanityImageProps {
  image: SanityImageValue;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
  fit?: "max" | "crop";
}

export function SanityImage({
  image,
  alt,
  className,
  sizes,
  priority,
  width = 1200,
  height,
  fill = false,
  fit = "max",
}: SanityImageProps) {
  if (!image?.asset) return null;

  const builder = urlFor(image).width(width);
  const src =
    fit === "crop" && height
      ? builder.height(height).fit("crop").url()
      : builder.fit("max").url();
  const resolvedAlt = image.alt || alt;

  if (fill) {
    return (
      <Image
        src={src}
        alt={resolvedAlt}
        fill
        className={className}
        sizes={sizes ?? "100vw"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={resolvedAlt}
      width={width}
      height={height ?? Math.round(width * 0.66)}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
