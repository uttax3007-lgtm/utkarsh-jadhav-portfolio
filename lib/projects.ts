export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  status: string;
  featured?: boolean;
};

const github = "https://github.com/uttax3007-lgtm";

export const projects: Project[] = [
  {
    number: "01",
    name: "AI Cum Dost",
    category: "Writing utility · AI",
    description:
      "A focused text and email humanizer built around a simple idea: make everyday writing sound more natural, clear, and personal.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "ToHuman API"],
    href: `${github}/ai-cum-dost`,
    status: "In development",
    featured: true,
  },
  {
    number: "02",
    name: "BVP Buddy",
    category: "Campus utility",
    description:
      "A student-focused project exploring useful digital tools and a more connected campus experience.",
    stack: ["Web development", "JavaScript"],
    href: `${github}/Bvp-Buddy`,
    status: "Project",
  },
  {
    number: "03",
    name: "AI Report Card Generator",
    category: "Python · Automation",
    description:
      "A Python project focused on generating structured student report cards and simplifying repetitive academic workflows.",
    stack: ["Python", "Automation"],
    href: `${github}/Ai-report-card-generator`,
    status: "Project",
  },
  {
    number: "04",
    name: "BankCore",
    category: "Systems · C++",
    description:
      "A banking-system programming project exploring core account operations, transaction flows, and structured program design.",
    stack: ["C++", "OOP", "Data structures"],
    href: `${github}/BankCore`,
    status: "Project",
  },
  {
    number: "05",
    name: "Employee Management System",
    category: "Systems · C",
    description:
      "A foundational management-system project built to practise records, employee data handling, and function-based programming.",
    stack: ["C", "File handling", "Functions"],
    href: `${github}/Employee-managment-system`,
    status: "Project",
  },
];