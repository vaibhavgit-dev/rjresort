import Image from "next/image";
import Slideshow from "./components/Slideshow";
import Rjdarjeeling from "./components/rjdarjeeling";

export default function Home() {
  return (
      <main className="">
        <div className="container">
          <div className="hidden">
            <Slideshow />
          </div>
        </div>
        <Rjdarjeeling/>
      </main>
  );
}
