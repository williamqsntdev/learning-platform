import Image from "next/image";

export const Logo = () => {
  return (
    <Image
     className="rounded"
      height={50}
      width={50}
      alt="logo"
      src="/logo.png"
    />
  )
}