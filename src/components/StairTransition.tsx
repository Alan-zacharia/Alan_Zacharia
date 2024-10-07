"use client";

<<<<<<< HEAD
import { AnimatePresence, easeInOut, motion } from "framer-motion";
=======
import { AnimatePresence } from "framer-motion";
>>>>>>> d235620e942cf4a7136d431121289e4de6450199
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div
            className="h-screen w-screen fixed top-0 left-0 right-0
pointer-events-none z-40 flex"
          >
            <Stairs />
          </div>
<<<<<<< HEAD
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
=======
>>>>>>> d235620e942cf4a7136d431121289e4de6450199
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
