import Image from "next/image";
import Slideshow from "./components/Slideshow";
import Rjdarjeeling from "./components/rjdarjeeling";

export default function Home() {
  return (
      <main className="">
        <div className="w-full">
        <Slideshow />
        </div>
        <div className="w-full">
        <Rjdarjeeling/>
        </div>
      </main>
  );
}
