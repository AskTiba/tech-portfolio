"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/interactive-rating");
  };
  return (
    <main className="flex flex-col text-5xl text-white bg-dark-blue h-screen w-screen justify-center items-center">
      <div className="uppercase flex text-center max-[384px]:text-red-600 justify-center items-center text-5xl font-bold tracking-wider">
        welcome to my project hub
      </div>
      <Button
        type="button"
        onClick={handleClick}
        className="bg-orange text-blue font-bold my-6 py-3 px-5 rounded-3xl text-xl transition-all duration-200 hover:bg-white"
      >
        Interactive Rating Component
      </Button>
      <Button
        type="button"
        onClick={() => {
          router.push("/redux-API");
        }}
        className="bg-orange text-blue font-bold my-6 py-3 px-5 rounded-3xl text-xl transition-all duration-200 hover:bg-white"
      >
        Who let the dogs out
      </Button>
    </main>
  );
}
