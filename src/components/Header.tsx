import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
<<<<<<< HEAD
import MobileNav from "./MobileNav";
=======
>>>>>>> d235620e942cf4a7136d431121289e4de6450199

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">

      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Alan<span className="text-accent">.</span>
        </h1>
      </Link>
      {/* Desktop navbar */}
      <div className="hidden xl:flex items-center gap-8">
      <Nav/>
      <Link href="/contact">
       <Button>Hire me</Button>
      </Link>
      </div>
      {/* mobile navbar */}
<<<<<<< HEAD
      <div className=" xl:hidden ">
<MobileNav/>
=======
      <div className="flex xl:hidden items-center gap-8">

>>>>>>> d235620e942cf4a7136d431121289e4de6450199
      </div>
      </div>
    </header>
  );
};

export default Header;
