// this index are for the links, connected to different Files, for easier editting.
// finalize the user
// update: icons, text

import {
    youth,
    adulthood,
    senior,
    book,
    Ai,
    lawyerIcon,
    AiRobot,
    lawyers,
} from "../assets";

const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "feature",
        title: "Features",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const userLink = [
    {
        title: "Youth",
        icon: youth,
    },
    {
        title: "Adulthood",
        icon: adulthood,
    },
    {
        title: "Senior",
        icon: senior,
    },
];

const features = [
    {
        title: "Law books",
        subtitle: "Table of Contents",
        icon: book,
        iconBg: "#383E56",
        date: "August 31 - December 7",
        color: "blue-text-gradient",
        points: [
            {
                text:"THE CONSTITUTION OF THE REPUBLIC OF THE PHILIPPINES", 
                id: "book_ID"
            },
            {
                text:"Mollit qui ullamco proident nulla.", 
                id: "sample1_ID"
            },
            {
                text:"Ex proident consequat veniam quis exercitation irure labore reprehenderit cupidatat ut.", 
                id: "sample2_ID"
            },
            {
                text:"Fugiat fugiat culpa do nisi nulla dolore consectetur mollit.S", 
                id: "sample3_ID"
            },     

        ],
    },
    {
        title: "Legal Matching",
        subtitle: "Connecting You with the Right Expertise, Every Time.",
        icon: lawyerIcon,
        iconBg: "#383E56",
        date: "August 31 - December 7",
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
        date: "August 31 - December 7",
        color: "pink-text-gradient",
        btn: "/ai-robot",
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
        image: "/src/assets/lawyers.png",
        name: "Lawyer 1",
        title: "Criminal Lawyer",
        currentSP: 500,
        currentPoints: 300,
        stats: { strength: 5, endurance: 6, agility: 7 },
        talent: "Negotiation",
        masteries: 2,
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

const table_of_contents = [
    {
        topic: "ARTICLE I National Territory",
        href: "/articleOne"
    },
    {
        topic: "ARTICLE II Declaration of Principles and State Policies",
        href: "/articleTwo"
    },
    {
        topic: "ARTICLE III Bill of Rights",
        href: "/articleThree"
    },
    {
        topic: "ARTICLE IV Citizenship",
        href: "/articleFour"
    },
    {
        topic: "ARTICLE V Suffrage",
        href: "/articleFive"
    },
    {
        topic: "ARTICLE VI Legislative Department",
        href: "/articleSix"
    },
    {
        topic: "ARTICLE VII Executive Department",
        href: "/articleSeven"
    },
    {
        topic: "ARTICLE VIII Judicial Department",
        href: "/articleEight"
    },
    {
        topic: "ARTICLE IX Constitutional Commissions",
        href: "/articleNine"
    },
    {
        topic: "ARTICLE X Local Government",
        href: "/articleTen"
    },
    {
        topic: "ARTICLE XI Accountability of Public Officers",
        href: "/articleEleven"
    },
    {
        topic: "ARTICLE XII National Economy and Patrimony",
        href: "/articleTwelve"
    },
    {
        topic: "ARTICLE XIII Social Justice and Human Rights",
        href: "/articleThirteen"
    },
    {
        topic: "ARTICLE XIV Education, Science and Technology, Arts, Culture and Sports",
        href: "/articleFourteen"
    },
    {
        topic: "ARTICLE XV The Family",
        href: "/articleFifteen"
    },
    {
        topic: "ARTICLE XVI General Provisions",
        href: "/articleSixteen"
    },
    {
        topic: "ARTICLE XVII Amendments or Revisions",
        href: "/articleSeventeen"
    },
    {
        topic: "ARTICLE XVIII Transitory Provisions",
        href: "/articleEighteen"
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
    table_of_contents 
};


 