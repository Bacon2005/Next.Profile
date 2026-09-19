"use client";
import { Alfa_Slab_One, Nunito_Sans } from "next/font/google";
import { ArrowRight, Download } from "lucide-react";
import SocialLink from "@/components/socialLink";
import NavLink from "@/components/navLinks";

const alfa_Slab_One = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Main() {
  return (
    <div className="flex flex-row gap-8">
      <div className="bg-surface rounded-3xl p-10 flex-1">
        <div className="border-outline border-b-2 pb-10">
          <div id="title" className="flex flex-row items-center">
            <div className="w-3 h-3 rounded-full bg-cta" />
            <p className={`${nunito_sans.className} pl-3 tracking-widest`}>
              Cebu, Philippines
            </p>
          </div>
          <h1
            className={`${alfa_Slab_One.className} text-8xl mt-2.5 whitespace-nowrap`}
          >
            Hello
          </h1>
          <p
            className={`${nunito_sans.className} text-xl mt-4 text-left tracking-wide max-w-2xl`}
          >
            I am <span className="text-cta">Tyrone Niere,</span> a junior
            software developer
          </p>
          <p
            className={`${nunito_sans.className} text-xl mt-4 text-left tracking-wide max-w-2xl`}
          >
            I build clean, maintainable software and meaningful digital
            experiences from intuitive interfaces to reliable backend systems.
          </p>
        </div>
        <div className="flex flex-row gap-8 mt-5">
          <SocialLink
            href={""}
            label={"Get in Touch"}
            icon={<ArrowRight size={18} />}
            color={"var(--cta)"}
          />
          <SocialLink
            href={""}
            label={"Download CV"}
            icon={<Download size={18} />}
            color={"var(--surface-2)"}
          />
        </div>
      </div>
      <div className="bg-surface rounded-3xl p-10 w-72 shrink-0">
        <div id="title" className="flex flex-row items-center">
          <div className="w-3 h-3 rounded-full bg-cta" />
          <p className={`${nunito_sans.className} pl-3 tracking-widest`}>
            Tech Stack
          </p>
        </div>
        <ul className="flex flex-col gap-3.5">
          <NavLink href={"#tools"}>Tools</NavLink>
          <NavLink href={"#languages"}>Languages</NavLink>
          <NavLink href={"#databases"}>Databases</NavLink>
          <NavLink href={"#techStack"}>Tech Stack</NavLink>
        </ul>
      </div>
    </div>
  );
}
