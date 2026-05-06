import React from 'react';
import Image from 'next/image';

interface ImageOverlayCardProps {
  imageSrc: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  aspectRatio?: string;
  overlayClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageOverlayCard({
  imageSrc,
  alt,
  children,
  className = '',
  aspectRatio = 'aspect-[3/4]',
  overlayClassName = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 33vw',
}: ImageOverlayCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[var(--radius-md)] ${aspectRatio} ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className={`absolute inset-0 ${overlayClassName}`}
        style={{ backgroundImage: 'var(--overlay-gradient)' }}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {children}
      </div>
    </div>
  );
}
