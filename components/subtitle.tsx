import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${nunito_sans.className} text-xl mt-4 text-left tracking-wide border-outline border-b-2 pb-2`}
    >
      {children}
    </p>
  );
}
