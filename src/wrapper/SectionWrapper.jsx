import { styles } from "../styles";
import { staggerContainer } from "../utility/motion";
import {motion} from 'framer-motion';

const SectionWrapper = (Component, idName) => 
    function wrapper() {
    
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={ idName }>
                {" "}
                &nbsp;{" "}
            </span>

            <Component />
        </motion.section>
    );
};

export default SectionWrapper;


// forgot to add the component and idname in props and call the  wrapper ()