import { cn } from "@/lib/utils";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
}

const ImageWithCaption = ({ src, alt, caption, className, imageClassName }: ImageWithCaptionProps) => {
  return (
    <figure className={cn("space-y-2", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-auto rounded-lg shadow-soft", imageClassName)}
      />
      {caption && (
        <figcaption className="text-sm text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageWithCaption;