"use client";

import * as motion from "motion/react-client";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProjectLink({
  href,
  label,
  color,
}: {
  href: string;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.8 }}
      style={{ ...box, backgroundColor: color }}
      className="inline-block mt-2.5"
    >
      <a href={href} className="flex flex-row gap-3 justify-center p-2">
        <span className={`${nunito_sans.className} tracking-wide ml-3 mr-3`}>
          {label}
        </span>
      </a>
    </motion.div>
  );
}

const box = {
  borderRadius: "50px",
};
