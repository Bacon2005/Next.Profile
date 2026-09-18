import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ToolShowcase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${nunito_sans.className} cursor-default tracking-wider flex justify-center border border-outline rounded-full bg-surface-2 mt-2.5 
      transition-all ease-in-out hover:scale-110`}
    >
      <span className="pt-3 pb-3 pr-5 pl-5">{children}</span>
    </div>
  );
}
