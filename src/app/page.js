import Image from "next/image";
import Slideshow from "./components/Slideshow";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="container">
          <Slideshow />
          </div>  
      </main>
    </div>
  );
}
