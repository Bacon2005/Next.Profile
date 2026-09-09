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
      className="group flex items-center gap-2 rounded-full border px-5 py-2
                transition-all duration-300
                 hover:bg-black hover:text-white hover:scale-[1.03] hover:shadow-md
                 dark:hover:bg-white dark:hover:text-black"
    >
      <Image src={icon} alt={label} width={0} height={0} className="size-4" />
      {label}
    </a>
  );
}
