import Image from "next/image";


export default function Home() {
  return (
      <div>
        <div className="flex items-center justify-center w-full">
          <div className="relative aspect-[510/510] w-3/4 overflow-hidden ">
            <Image
                src="/hero.jpg"
                alt="Ignite Life Slogan"
                layout="fill"
                objectFit="contain"
            />
          </div>
        </div>
      </div>
  );
}
