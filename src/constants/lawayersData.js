const lawyer = [
    {
        name: "Palmer Fagyan Bugtong",
        title: "Criminal Law",
    },
    // No. 7, 2/F Israel Bldg., Gibraltar Road, Baguio City 2600
    {
        name: "Noel Magalgalit",
        title: "Civil Law",
    },
    {
        name: "Jess B. Evasco",
        title: "Criminal Law",
    },
];

// Function to find a lawyer by name
export const findLawyerByName = (name) => {
    return lawyer.find((lawyer) => lawyer.name === name);
};