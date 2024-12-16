import Video from "./components/video";
import Hero from "./components/hero";
import Update from "./components/update";
import Guide from "./components/guide";
import Creators from "./components/creators";
import Concept from "./components/concept";
import Search from "./components/search";

export default function Home() {
  return (
    <>
      <Video />
      <div className="relative w-full flex flex-col items-stretch justify-center gap-12">
        <Hero />
        <Update />
        <Guide />
        <Creators />
        <div className="bg-white">
          <Concept />
          <Search />
        </div>
      </div>
    </>
  );
}
