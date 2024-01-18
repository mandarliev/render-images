import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <header className="my-1">
        <h1 className="text-xl font-bold">
          Mandarliev - Coding, Boxing, Swimming
        </h1>
        <h2>
          visit{" "}
          <a className="font-bold" href="www.mandarliev.com">
            mandarliev.com
          </a>{" "}
          to learn to code!
        </h2>
      </header>

      <div className="relative h-64 w-96">
        <Image
          priority
          src="https://links.papareact.com/d7l"
          layout="fill"
          objectFit="contain"
          alt="papa"
        />
      </div>
    </div>
  );
}
