import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Authentication from "./components/Authentication";
import Endpoints from "./components/Endpoints";
import Tutorial from "./components/Tutorial";
import Pricing from "./components/Pricing";
import Code from "./components/Code element/Code";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-[#1f293a] w-full h-full md:h-full pt-5 flex flex-col gap-5 pb-5">
        <Overview />
        <Authentication />
        <Endpoints />
        <Tutorial />
        <Code />
        <Pricing />
      </div>
    </>
  );
}
