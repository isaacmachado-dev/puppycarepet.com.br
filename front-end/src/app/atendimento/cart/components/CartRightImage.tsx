import React from "react";
import Image from "next/image";

interface CartRightImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const CartRightImage: React.FC<CartRightImageProps> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => (
  <div className="flex justify-end col-span-1">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-32 h-32 object-cover rounded-lg"
      {...props}
    />
  </div>
);
