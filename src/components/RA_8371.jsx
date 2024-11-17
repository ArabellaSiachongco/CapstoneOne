import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./layouts/book.css";
import { table_of_content_RA12066 } from "../constants/table_of_content";
import { SectionWrapper, ScrollWrapper } from "/src/wrapper";
import { fadeIn, staggerContainer } from "../utility/motion";

const RA_12066 = () => {
    return (
        <ScrollWrapper>
            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn("top", "spring", 0.5, 1)}
                id="Constitution_ID"
                className="p-8 min-h-screen text-center image-border-table"
            >
                <motion.div variants={fadeIn("top", "spring", 0.5, 1)} className="mb-16">

                    <motion.p variants={fadeIn("top", "spring", 0.5, 1.5)} className={`${styles.paragraphSubTextLower} text-white mb-2`}>
                        <em>Republic of the Philippines</em>
                    </motion.p>
                    <motion.p variants={fadeIn("top", "spring", 0.5, 2)} className={`${styles.paragraphSubText} text-white mb-2`}>
                        <strong>Congress of the Philippines</strong>
                    </motion.p>
                    <br/>
                    <motion.p variants={fadeIn("top", "spring", 0.5, 3)} className={`${styles.paragraphSubTextLower} text-white mb-2`}>
                        <p>Metro Manila</p>
                    </motion.p>
                    <br/><br/>

                    <motion.p variants={fadeIn("top", "spring", 0.5, 4)} className={`${styles.paragraphSubTextLower} text-white mb-2`}>
                        <p>Nineteenth Congress</p>
                    </motion.p>
                    <br/><br/>

                    <motion.p variants={fadeIn("top", "spring", 0.5, 6)} className={`${styles.paragraphSubTextLower} text-white mb-2`}>
                        <p>Third Regular Session</p>
                    </motion.p>
                    <br/><br/>

                    <motion.p variants={fadeIn("top", "spring", 0.5, 5)} className={`${styles.paragraphSubTextLower} text-white mb-2`}>
                        <p>Begun and held in Metro Manila, on Monday, the twenty-second <br/> day of July, two thousand twenty-four.</p>
                    </motion.p>
                    
                <motion.hr
                        variants={fadeIn("top", "tween", 0.5, 4)}
                        initial="hidden"
                        animate="show"
                        className="w-20 mx-auto border-t-2 border-white my-4"
                        />
                        
                </motion.div>
                
                        
                <motion.div variants={fadeIn("top", "spring", 0.5, 7)} className="mb-6">
                    <h3
                        className={`${styles.paragraphSubText} text-white mb-4 font-semibold`}
                    >
                        This Act shall be known as “The Indigenous Peoples’ Rights Act of 1997″.
                    </h3>
                    
                    <p className={`${styles.paragraphSubTextLower} text-white mb-12`}>
                        AN ACT AMENDING SECTIONS 27, 28, 32, 34, 57, 106, 108, 109, 112, 135, 237, 237-A, 269, 292, 293, 294, 295, 296, 297, 300, 301, 308, 309, 310, AND 311, AND ADDING NEW SECTIONS 135-A, 295-A, 296-A, AND 297-A OF THE NATIONAL INTERNAL REVENUE CODE OF 1997, AS AMENDED, AND FOR OTHER PURPOSES
                    </p>
                </motion.div>

                {/* Table of Contents Header */}
                <motion.div variants={fadeIn("top", "spring", 0.6, 8)} className="mb-12">
                    <h3
                        className={`${styles.paragraphSubText} text-white text-2xl font-semibold`}
                    >
                        Table of Contents
                    </h3>
                    <hr className="w-20 mx-auto border-t-2 border-white my-4" />
                </motion.div>

                {/* Links to Table of Contents */}
                <motion.div
                    variants={staggerContainer(0.2)}
                    className="space-y-4 text-left max-w-3xl mx-auto"
                >
                    {table_of_content_RA12066.map((item, index) => (
                        <motion.div key={item.href} variants={fadeIn("bottom", "spring", index * 0.2, 0.9)}>
                            <Link
                                to={item.href}
                                className={`${styles.paragraphSubText} text-white hover:underline hover:text-purple-400 block py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg`}
                            >
                                {item.topic}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </ScrollWrapper>
    );
};

export default SectionWrapper(RA_12066, "");
