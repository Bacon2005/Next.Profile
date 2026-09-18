//Components
import SocialLink from "@/components/socialLink";
import { Alfa_Slab_One, Nunito_Sans } from "next/font/google";

const alfa_Slab_One = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <section id="main">
          <div className="flex flex-row gap-8">
            <div className="bg-surface rounded-3xl p-4">
              <h1 className={nunito_sans.className}>Hello</h1>
            </div>
            <div className="bg-surface rounded-3xl p-4">
              <h1 className={nunito_sans.className}>Tech Stack</h1>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="bg-surface rounded-3xl p-4">
            <div id="title" className="flex flex-row items-center">
              <div className="w-3 h-3 rounded-full bg-cta" />
              <p className={`${nunito_sans.className} pl-3`}>About</p>
            </div>
            <h1 className={`${alfa_Slab_One.className} text-4xl`}>
              About <span className="text-cta">Me</span>
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
