const lawyersData = [
    {
    id:1,
      name: "Palmer Fagyan Bugtong",
      title: "Criminal Law",
    },
    // No. 7, 2/F Israel Bldg., Gibraltar Road, Baguio City 2600
    {
        id:2,
        name: "Noel Magalgalit",
        title: "Civil Law",
    },
    {
        id:3,
        name: "Jess B. Evasco",
        title: "Criminal Law",
    },
];

// Function to find a lawyer by name
export const findLawyerByName = (name) => {
    return lawyersData.find((lawyer) => lawyer.name === name);
  };