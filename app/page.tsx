import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-background">
      {/* Navigation Bar */}
      <div className="flex flex-row items-end justify-between w-full px-8 py-0 gap-4">
        <Image
          src="/assets/ESPNlogo.png"
          alt="ESPN Logo"
          width={150}
          height={150}
        />
        <div className="navigation">
          <ul className="flex flex-row items-center gap-20 text-lg font-bold text-black dark:text-white">
            <li className="text-red">Player Card</li>
            <li className="text-red">Stats</li>
            <li className="text-red">Contact</li>
          </ul>
        </div>
        <div className="profile"></div>
      </div>

      <div className="relative w-full h-[600px] overflow-hidden bg-white">
        {/* Diagonal-clipped background image */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 25% 0, 35% 100%, 0 100%)",
          }}
        >
          <Image
            src="/assets/bg.avif"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-row items-center justify-center h-full gap-80">
          <Image
            src="/assets/profile.jpg"
            alt="Tyrone Pic"
            width={350}
            height={350}
            className="rounded-3xl"
          />

          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Tyrone Niere</h1>
            <p className="mt-2 text-lg font-medium text-red">
              Software Engineer
            </p>
            <p className="mt-4 text-gray-700 max-w-sm">
              I build clean, scalable web applications with a focus on great
              user experience and solid engineering fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
