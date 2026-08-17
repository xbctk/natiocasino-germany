import Image from "next/image";

export function PlaceholderMedia({
  alt,
  label = "Image placeholder",
  position = "center",
  src,
}: {
  alt?: string;
  label?: string;
  position?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div className="media-placeholder media-placeholder--image">
        <Image
          alt={alt ?? ""}
          fill
          sizes="(max-width: 1180px) 100vw, 42vw"
          src={src}
          style={{ objectPosition: position }}
        />
      </div>
    );
  }

  return (
    <div className="media-placeholder" aria-label={label} role="img">
      <span aria-hidden="true" />
    </div>
  );
}
