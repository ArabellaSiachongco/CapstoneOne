import { React, useEffect } from "react";
import { styles } from '../styles';
import { lawyerProfiles, tags } from "../constants";
import { SectionWrapper } from '../wrapper';
import LawyerStatusCard from './canvas/LawyerStatusCard';

const Lawyer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className={`${styles.headText} my-5`}>Legal Matching</h2>
      <span className={styles.paragraphSubText}>Choose Your Lawyer</span>
      <br />
      <p>
        Id proident incididunt ut aliquip magna id eiusmod elit ut proident.
        Nostrud et tempor nulla enim sint sint. Nostrud dolore est ea ea
        voluptate laboris in cupidatat pariatur. Duis ut do in quis laborum
        ullamco eu consectetur consequat dolor. Irure incididunt reprehenderit
        esse laborum officia non velit aliquip.
      </p>

      {/* Render Tags */}
      <div className="my-6">
        <h4 className={`${styles.paragraphSubText} my-5`}>Tags:</h4>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="border-2 text-white px-4 py-2 rounded-full bg-gray-700 hover:bg-violet-900 transition duration-200 ease-in-out"
            >
              {tag.title}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lawyerProfiles.map((profile, index) => (
          <LawyerStatusCard key={index} LawyerProfile={profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper (Lawyer, "lawyer-section");

