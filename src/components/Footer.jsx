import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-gray-900 text-white ${styles.paddingY} mt-16`}
    >
      <div className={`container mx-auto ${styles.paddingX} grid lg:grid-cols-4 md:grid-cols-2 gap-8`}>
        
        {/* About Section */}
        <div>
          <h4 className={`${styles.headSubText} mb-4`}>About Us</h4>
          <p className="text-sm">
            KARAPATAN KO: A Digital Platform for Legal Rights and Resources Information System is designed to empower citizens with accessible legal rights information and resources, and connect them with trusted legal professionals.
          </p>
        </div>

        {/* Proposal Section */}
        <div>
          <h4 className={`${styles.headSubText} mb-4`}>Our Proposal</h4>
          <p className="text-sm">
            Our mission is to help all individuals, especially those from vulnerable communities, understand and exercise their rights. Through future AI-powered tools, users can receive real-time support to guide them through legal processes and provide document assistance.
          </p>
        </div>

        {/* Partnership Section */}
        <div>
          <h4 className={`${styles.headSubText} mb-4`}>Partnership</h4>
          <p className="text-sm mb-2">We are open to partnerships with legal professionals, NGOs, and advocacy groups.</p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className={`${styles.headSubText} mb-4`}>Contact Information</h4>
          <p className="text-sm mb-2">Email: <span className="text-white">karapatanko@gmail.com</span></p>
          <p className="text-sm mb-2">Phone: (123) 456-7890</p>
          <p className="text-sm mb-2">Address: Legarda Government Road</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`mt-10 text-center text-sm border-t border-gray-700 pt-6 ${styles.paddingX}`}>
        <p>© {new Date().getFullYear()} KARAPATAN KO. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
