// this index are for the links, connected to different Files, for easier editting.
// finalize the user
// update: icons, text

import {
    userLawyer,
    userStudents,
    senior,
    book,
    Ai,
    lawyerIcon,
    AiRobot,
    lawyers,
    lawbook,
    profile,
    profile1,
    profile2,
    testimonial1,
} from "../assets";

const navLinks = [
    {
        id: "helena",
        title: "HELENA AI",
    },
    {
        id: "lawyer-status",
        title: "LEGAL MATCH",
    },
];

const userLink = [
    {
        title: "LAWYER",
        icon: userLawyer,
    },
    {
        title: "STUDENT",
        icon: userStudents,
    },,
];

const features = [
    {
        title: "Law books",
        subtitle: "Simply highlight any word in our law books to instantly fetch its definition.",
        icon: book,
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
        ],
        image: lawbook,
        span: "More law books to come"
    },
    {
        title: "Legal Matching",
        subtitle: "Connecting You with the Right Expertise, Every Time.",
        icon: lawyerIcon,
        iconBg: "#383E56",
        // update: "Last Updated: November 19, 2024",
        color: "green-text-gradient",
        btn: "/lawyer-status",
        image: lawyers,
        // tags: [
        //     {
        //         name: "5 years",
        //         color: "blue-text-gradient",
        //         btn:"",
        //     },
        //     {
        //         name: "Bullying",
        //         color: "green-text-gradient",
        //         btn:"",
        //     },
        //     {
        //         name: "Discrimination",
        //         color: "pink-text-gradient",
        //         btn:"",
        //     },
        //     {
        //         name: "Harassment",
        //         color: "blue-text-gradient",
        //         btn:"",
        //     },
        // ],
    },
    {
        title: "Helena",
        subtitle: "Your Smart Guide for Legal Books",
        icon: Ai,
        iconBg: "#383E56",
        // born: "Born in November 2024",
        color: "pink-text-gradient",
        btn: "/helena",
        image: AiRobot,
    },
];

const legalMatch = [
    {
        title: "Legal Matching",
        subtitle: "Connecting You with the Right Expertise, Every Time.",
        icon: senior,
        iconBg: "#383E56",
        date: "August 31 - December 7",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];

const partnerships = [
    {
        name: "Non-government organization",
        icon: senior,
    },
    {
        name: "Professional Lawyer",
        icon: senior,
    },
    {
        name: "Department of Justice",
        icon: senior,
    },
];

const testimonials = [
    {
        testimonial:
            "The website is well designed and user-friendly, with features like AI chat and definitions for any highlighted text. It is clear how to use it from the first time, and I didn't face any complications.",
        name: "Jamil Al Amin",
        designation: "Student",
        company: "University of the Cordilleras",
        image: testimonial1,
    },
    {
        testimonial:
            "The website has a clean and professional look, and suitable for legal resources. However, some areas could benefit from improved visual appeal, such as personalized dashboard and inclusion of search bar.",
        name: "Lina An-an",
        designation: "Student",
        company: "University of the Cordilleras",
        image: profile2,
    },
    {
        testimonial:
            "It will help many people, especially those who are unaware of their rights. I love the Legal Matching, as it connects us with professionals. The convenience of booking appointments directly on the site is a great addition.",
        name: "Palmer Bugtong",
        designation: "Lawyer",
        company: "Magalgalit Law Office",
        image: profile1,
    },
];

const lawyerProfiles = [
    {
      image: profile1,
      name: "Palmer Fagyan Bugtong",
      nickname:"Atty. Palmer",
      title: "Criminal Law",
      currentSP: "Face to Face",
      currentPoints: "5 years lawyer",
      stats: { strength: 8, endurance: 8, agility: 8 },
      talent: "Negotiation",
      tagline: "The Defender of the Defenseless", 
      address: "Liaison Officer at Magalgalit Law Office",
      btn: "/appointmentLawyer1",
    },
    // No. 7, 2/F Israel Bldg., Gibraltar Road, Baguio City 2600
    {
        image: profile,
        name: "Noel Magalgalit",
        nickname:"Atty. Magalgalit",
        title: "Civil Law",
        currentSP: "Face to Face",
        currentPoints: "15 years lawyer",
        stats: { strength: 7, endurance: 8, agility: 7 },
        talent: "Public Speaking",
        tagline: "The Defender of the Defenseless", 
        address: "Liaison Officer at Magalgalit Law Office",
        btn: "/appointmentLawyer2",
    },
    {
        image: profile1,
        name: "Jess B. Evasco",
        nickname:"Atty. Evasco",
        title: "Criminal Law",
        currentSP: "Face to Face",
        currentPoints: "5 years lawyer",
        stats: { strength: 6, endurance: 8, agility: 9 },
        talent: "Persuasion",
        tagline: "The Fast Talker and the Faster Thinker", 
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
    // tags,
};