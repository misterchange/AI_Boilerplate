import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Yoo Nitin's AI Boilerplate is Here !!!
      <p className="mb-3 mt-3">Give it a star "⭐"</p>
      <UserButton />
    </div>
  );
}
