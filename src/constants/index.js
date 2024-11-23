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
    lawbook
} from "../assets";

const navLinks = [
    {
        id: "/articleOne",
        title: "Article I",
    },
    {
    id: "/articleTwo",
    title: "Article II",
    sections: [
        { id: "#principles", title: "Principles" },
        { id: "#policies", title: "Policies" },
    ],
    },
    {
    id: "/articleThree",
    title: "Article III",
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
    },
    // {
    //     title: "Senior",
    //     icon: senior,
    // },
];

const features = [
    {
        title: "Law books",
        subtitle: "Table of Contents",
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
            // {
            //     text:"Ex proident consequat veniam quis exercitation irure labore reprehenderit cupidatat ut.", 
            //     id: "sample2_ID"
            // },
            // {
            //     text:"Fugiat fugiat culpa do nisi nulla dolore consectetur mollit.S", 
            //     id: "sample3_ID"
            // },     
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
        tags: [
            {
                name: "Harassment",
                color: "blue-text-gradient",
            },
            {
                name: "Bullying",
                color: "green-text-gradient",
            },
            {
                name: "Discrimination",
                color: "pink-text-gradient",
            },
        ],
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
            "I thought it was impossible to make a seniorsite as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I thought it was impossible to make a seniorsite as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I thought it was impossible to make a seniorsite as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];

const tags = [
    {
        id: "bullying",
        title: "Bullying",  
    },
    {
        id: "harassment",
        title: "Sexual Harassment",  
    },
    {
        id: "trial",
        title: "Trial",  
    },
    {
        id: "sample",
        title: "Sample",  
    },
];

const lawyerProfiles = [
    {
      image: "/src/assets/palmer_lawyer.jpg",
      name: "Palmer Fagyan Bugtong",
      title: "Lawyer",
      currentSP: 500,
      currentPoints: "5 years",
      stats: { strength: 8, endurance: 8, agility: 8 },
      talent: "Negotiation",
      tagline: "The Defender of the Defenseless", // A single string
      constitutions: 1,
    },
    {
        image: "/src/assets/lawyers.png",
        name: "Lawyer 2",
        title: "Corporate Lawyer",
        currentSP: 700,
        currentPoints: 500,
        stats: { strength: 6, endurance: 8, agility: 6 },
        talent: "Corporate Law",
        masteries: 3,
        constitutions: 2,
    },
    {
        image: "/src/assets/lawyers.png",
        name: "Lawyer 3",
        title: "Corporate Lawyer",
        currentSP: 700,
        currentPoints: 500,
        stats: { strength: 6, endurance: 8, agility: 6 },
        talent: "Corporate Law",
        masteries: 3,
        constitutions: 2,
    },
    {
        image: "/src/assets/lawyers.png",
        name: "Lawyer 4",
        title: "Corporate Lawyer",
        currentSP: 700,
        currentPoints: 500,
        stats: { strength: 6, endurance: 8, agility: 6 },
        talent: "Corporate Law",
        masteries: 3,
        constitutions: 2,
    },
    {
        image: "/src/assets/lawyers.png",
        name: "Lawyer 5",
        title: "Corporate Lawyer",
        currentSP: 700,
        currentPoints: 500,
        stats: { strength: 6, endurance: 8, agility: 6 },
        talent: "Argumentation, Negotiation, Persuasion, Case Analysis",
        masteries: 3,
        constitutions: 2,
    },
    {
        image: "/src/assets/lawyers.png",
        name: "Lawyer 6",
        title: "Corporate Lawyer",
        currentSP: 700,
        currentPoints: 500,
        stats: { strength: 6, endurance: 8, agility: 6 },
        talent: "Corporate Law",
        masteries: 3,
        constitutions: 2,
    },
    {
        image: "/src/assets/lawyers.png",
        name: "Lawyer 7",
        title: "Corporate Lawyer",
        currentSP: 700,
        currentPoints: 500,
        stats: { strength: 6, endurance: 8, agility: 6 },
        talent: "Corporate Law",
        masteries: 3,
        constitutions: 2,
    },
    {
        image: "/src/assets/lawyers.png",
        name: "Lawyer 8",
        title: "Corporate Lawyer",
        currentSP: 700,
        currentPoints: 500,
        stats: { strength: 6, endurance: 8, agility: 6 },
        talent: "Corporate Law",
        masteries: 3,
        constitutions: 2,
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
    tags,
};