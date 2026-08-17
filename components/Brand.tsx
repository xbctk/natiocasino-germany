import Image from "next/image";

export function Brand() {
  return (
    <div className="brand" aria-label="National casino">
      <Image
        alt=""
        className="brand__logo brand__logo--desktop"
        height={50}
        src="/brand/national-casino-logo.svg"
        width={128}
      />
      <Image
        alt=""
        className="brand__logo brand__logo--compact"
        height={50}
        src="/brand/national-casino-mark.svg"
        width={46}
      />
    </div>
  );
}
