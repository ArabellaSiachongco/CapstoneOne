import React from 'react';
import "/src/components/layouts/book.css";
import { useNavigate } from 'react-router-dom';
import { styles } from '/src/styles.js';
import { SectionWrapper, ScrollWrapper } from '/src/wrapper';
import { chapterSeven, chapterPower, offices, chapterSevenII, chapterSevenIII } from "/src/constants/book_peoples_right/chapterSeven.js";

const ChapterSeven = () => {
const navigate = useNavigate();

// Navigation handlers
const handleNextArticleClick = () => navigate("/chapterEight");
const handlePrevArticleClick = () => navigate("/ChapterSix");

return (
<div>
<ScrollWrapper>
<div>
{chapterSeven.map((item) => (
<div key={item.id} className="my-5">
    <h5 className={styles.paragraphSubText}>{item.subtitle}</h5>
    <h4 className={`${styles.headText} mb-10`}>{item.title}</h4>
    <div>
        {item.sections.map((section, index) => (
            <div key={index} className="my-4">
                <h6 className={styles.sectionTitle}>{section.name} {section.subtitle}</h6>
                <p className={styles.paragraphSubTextLower}>{section.paragraph}</p>
            </div>
        ))}
    </div>
</div>
))}

{chapterPower.map((item) => (
<div key={item.name} className="my-5">
  <h5 className={styles.sectionTitle}>{item.name} {item.subtitle}</h5>
    <div>
        <p className={styles.paragraphSubTextLower}>{item.sub_paragraphs}</p><br/>
        {item.section.paragraph.map((para, index) => (
            <p key={index} className={styles.paragraphSubTextLower}>{para}</p>
        ))}
    </div>
</div>
))}

{chapterSevenII.map((item) => (
<div key={item.name} className="my-5">
<h6 className={styles.sectionTitle}>{item.name} {item.subtitle}</h6>
    <p className={styles.paragraphSubTextLower}>{item.paragraph}</p>
</div>
))}

{offices.map((item) => (
<div key={item.name} className="my-5">
    <h5 className={styles.sectionTitle}>{item.name} {item.subtitle}</h5>
    <p className={styles.paragraphSubTextLower}>{item.sub_paragraphs}</p>
    
    <div>
        {item.sections.map((section, index) => (
            <div key={index} className="my-4">
                <h6 className={styles.sectionTitle}>{section.name}</h6>
                <p className={styles.paragraphSubTextLower}>{section.paragraph}</p>
            </div>
        ))}
    </div>
</div>
))}

{chapterSevenIII.map((item) => (
<div key={item.name} className="my-5">
    <h5 className={styles.sectionTitle}>{item.name} {item.subtitle}</h5>
    <p className={styles.paragraphSubTextLower}>{item.paragraph}</p>
</div>
))}

<div className="mt-10 text-center flex justify-between">
<button
    onClick={handlePrevArticleClick}
    className="px-6 py-2 border text-white rounded-lg hover:bg-gray-500">
    Previous Article
</button>
<button
    onClick={handleNextArticleClick}
    className="px-6 py-2 border text-white rounded-lg hover:bg-gray-500">
    Next Article
</button>
</div>
</div>
</ScrollWrapper>
</div>
);
};

export default SectionWrapper(ChapterSeven);
