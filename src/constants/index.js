const navLinks = [
    {
        id: "ai",
        title: "HELENA AI",
    },
    {
        id: "lawyer-status",
        title: "LEGAL MATCH",
    },
    {
        id: "lawyer-appoinments",
        title: "APPOINTMENT",
    },
    {
        id: "forms",
        title: "DOWNLOADABLE FORMS",
    },
];

const userLink = [
    {
        title: "LAWYER",
        icon: "/assets/userLawyer.png",
    },
    {
        title: "STUDENT",
        icon: "/assets/userStudents.png",
    },
];

const features = [
    {
        title: "Law books",
        subtitle: "Simply highlight any word in our law books to instantly fetch its definition.",
        icon: "/assets/book.png",
        iconBg: "#383E56",
        // overview: "An in-depth look at legal texts in the Philippines.",
        color: "blue-text-gradient",
        
        points: [
            {
                text:"The Constitution Of The Republic Of The Philippines", 
                id: "Constitution_ID",
                li: "/constitution",
            },
            {
                text:"Indigenous Peoples’ Rights Act", 
                id: "RA_8371_ID",
                li:"/RA_8371",
            },
            {
                text:"Family Code", 
                id: "family_ID",
                li:"/family",
            },
        ],
        image: "/assets/lawbook.png",
        span: "More law books to come"
    },
    {
        title: "Legal Matching",
        subtitle: "Connecting You with the Right Expertise, Every Time.",
        icon: "/assets/lawyerIcon2.png",
        iconBg: "#383E56",
        // update: "Last Updated: November 19, 2024",
        color: "green-text-gradient",
        btn: "/lawyer-status",
        image: "/assets/lawyerIcon.png",
      
    },
    {
        title: "Helena",
        subtitle: "Your Smart Guide for Legal Books",
        icon:"/assets/Ai.png",
        iconBg: "#383E56",
        // born: "Born in November 2024",
        color: "pink-text-gradient",
        btn: "/ai",
        image: "/assets/AiRobot.png",
    },
];

const legalMatch = [
    {
        title: "Legal Matching",
        subtitle: "Connecting You with the Right Expertise, Every Time.",
        icon: "/assets/senior.png",
        iconBg: "#383E56",
        date: "August 31 - December 7",
    },
];

const partnerships = [
    {
        name: "Non-government organization",
        icon: "/assets/senior.png",
    },
    {
        name: "Professional Lawyer",
        icon: "/assets/senior.png",
    },
    {
        name: "Department of Justice",
        icon: "/assets/senior.png",
    },
];

const testimonials = [
    {
        testimonial:
            "The website is well designed and user-friendly, with features like AI chat and definitions for any highlighted text. It is clear how to use it from the first time, and I didn't face any complications.",
        name: "Jamil Al Amin",
        designation: "Student",
        company: "University of the Cordilleras",
        image: "/assets/testimonial1.png",
    },
    {
        testimonial:
            "The website has a clean and professional look, and suitable for legal resources. However, some areas could benefit from improved visual appeal, such as personalized dashboard and inclusion of search bar.",
        name: "Lina An-an",
        designation: "Student",
        company: "University of the Cordilleras",
        image: "/assets/profile2.png",
    },
    {
        testimonial:
            "It will help many people, especially those who are unaware of their rights. I love the Legal Matching, as it connects us with professionals. The convenience of booking appointments directly on the site is a great addition.",
        name: "Palmer Bugtong",
        designation: "Lawyer",
        company: "Magalgalit Law Office",
        image: "/assets/profile1.png",
    },
];

const lawyerProfiles = [
    {
      image: "/assets/profile1.jpg",
      name: "Palmer Fagyan Bugtong",
      nickname:"Atty. Palmer",
      title: "Criminal Law",
      currentSP: "Face to Face",
      currentPoints: "5 years lawyer",
      talent: "Negotiation, Persuasion",
      contact: "09952179842",
      gmail: "amorsolo960@gmail.com",
      tagline: "The Defender of the Defenseless", 
      address: "Liaison Officer at Magalgalit Law Office",
      btn: "/appointmentLawyer1",
    },
    // No. 7, 2/F Israel Bldg., Gibraltar Road, Baguio City 2600
    {
        image: "/assets/profile1.jpg",
        name: "Noel Magalgalit",
        nickname:"Atty. Magalgalit",
        title: "Civil Law",
        currentSP: "Face to Face",
        currentPoints: "15 years lawyer",
        talent: "Public Speaking, Negotiation",
        contact: "09778563607",
        gmail: "nbmagalgalit@gmail.com",
        tagline: "The Defender of the Defenseless", 
        address: "Liaison Officer at Magalgalit Law Office",
        btn: "/appointmentLawyer2",
    },
    {
        image: "/assets/profile1.jpg",
        name: "Jess B. Evasco",
        nickname:"Atty. Evasco",
        title: "Criminal Law",
        currentSP: "Face to Face",
        currentPoints: "5 years lawyer",
        talent: "Persuasion, Public Speaking",
        contact: "09666303622",
        gmail: "karapatanko@gmail.com",
        tagline: "The Fast Talker and Thinker", 
        address: "Liaison Officer at Magalgalit Law Office",
        btn: "/appointmentLawyer3",
    },
];


export {
    navLinks,
    userLink,
    features,
    legalMatch,
    partnerships,
    testimonials,
    lawyerProfiles,
};