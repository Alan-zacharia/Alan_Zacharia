<<<<<<< HEAD
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Alan Zacharia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, ad!
            </p>
            <div className="flex flex-col  xl:flex-row gap-8 items-center"> 
              <Button
                size="lg"
                className="uppercase flex items-center gap-2 outline outline-1 border border-accent rounded-full bg-primary text-accent hover:text-white transition"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div>image</div>
        </div>
      </div>    
    </section>
=======
export default function Home() {
  return (
   <main>homepage</main>
>>>>>>> d235620e942cf4a7136d431121289e4de6450199
  );
}
