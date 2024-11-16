import { motion } from "framer-motion";
import { styles } from "../styles";
import { ScaleCanvas } from '../components/canvas';

const Header = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className="w-5 h-5 rounded-full bg-[#915EFF]"
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.headText} text-white`}>
            Legal
            <span className="text-[#915EFF]"> Awareness</span>
          </h1>
          <p className={`${styles.headSubText} mt-2 text-white-100`}>
            Built for Everyone. <br className="sm:block hidden" /> Your Smart
            Guide to Legal Understanding
          </p>
        </div>
      </div>
      {/* calling the 3d image  */}
      <ScaleCanvas/>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        {/* link for about page */}
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">

            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Header;
