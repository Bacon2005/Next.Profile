"use client";
import Image from "next/image";

export default function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 rounded-full bg-background border border-black px-5 py-2 font-bold
                transition-all duration-300 ease-in-out
              hover:bg-orange-300 hover:text-cream hover:scale-[1.05] hover:border-orange-300 hover:shadow-md active:scale-[1.02]"
    >
      <Image src={icon} alt={label} width={0} height={0} className="size-5" />
      {label}
    </a>
  );
}
