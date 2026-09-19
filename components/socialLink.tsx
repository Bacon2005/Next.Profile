"use client";

import * as motion from "motion/react-client";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SocialLink({
  href,
  label,
  icon,
  color,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ ...box, backgroundColor: color }}
    >
      <a href={href} className="flex flex-row gap-3 items-center p-2">
        <span className={`${nunito_sans.className} tracking-wide pl-2`}>
          {label}
        </span>
        <span className="pr-2">{icon}</span>
      </a>
    </motion.div>
  );
}

const box = {
  borderRadius: "50px",
};
