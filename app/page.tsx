//Components
import NavBar from "@/components/navBar";
import SocialLink from "@/components/socialLink";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-background">
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Design */}
      <div className="grid grid-cols-2 grid-rows-1 gap-40 mt-24">
        <div>
          <h1 className="text-5xl font-extrabold">
            Full-stack
            <br />
            Software Engineer <br />
            with <span className="text-red-900">Tyrone</span>
            <br />
            <span className="text-red-900">Niere</span>
          </h1>

          <p className="mt-6 max-w-md">
            My goal is to write maintainable, clean, and understandable code
            while building meaningful digital experiences. I enjoy working
            across the stack, from crafting intuitive interfaces to developing
            reliable backend systems.
          </p>

          {/* TODO: Simplify it so that you dont have to copy paste it everytime */}
          <div className="flex flex-row justify-between mt-6">
            <SocialLink
              href="https://github.com/"
              icon="/assets/icons/github.svg"
              label="Github"
            />
            <SocialLink
              href="https://facebook.com/"
              icon="/assets/icons/facebook.svg"
              label="Facebook"
            />
            <SocialLink
              href="https://github.com/"
              icon="/assets/icons/instagram.svg"
              label="Instagram"
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 grid-rows-3 w-95 h-95">
            <div className="bg-red-500 rounded-tl-[70px] rounded-br-[70px]" />

            <div className="flex items-center justify-center">
              <div className="bg-red-100 size-20 rotate-45" />
            </div>

            <div className="bg-[#21191d] rounded-tr-[100px] rounded-br-[100px] row-span-2" />

            <div className="border-14 border-red-950" />

            <div className="bg-red-500 rounded-full" />

            <div className="bg-red-950 rounded-tl-[50px] rounded-br-[50px]" />

            <div className="flex items-center justify-center">
              <div className="w-0 h-0 border-l-60 border-r-60 border-b-120 border-l-transparent border-r-transparent border-b-red-500" />
            </div>

            <div className="bg-red-950 rounded-tr-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
