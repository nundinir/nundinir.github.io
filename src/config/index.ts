import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nundini Rawal",
  author: "Nundini Rawal",
  description: `Howdy! I'm a mechanical engineer and scientist at the University of Michigan.
    I specialize in biomechanics, human-robot interaction, exoskeleton control, and experimental design.`,
  lang: "en",
  siteLogo: "/nundinir-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nundinir/" },
    { text: "Github", href: "https://github.com/nundinir" },
    { text: "ORCID", href: "https://orcid.org/0009-0002-0591-8542" },
    { text: "Google Scholar", href: "https://scholar.google.com/citations?user=-YWyaAQAAAAJ&hl=en&oi=ao" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nundini Rawal",
    specialty: "Ph.D Candidate",
    summary: `Howdy! I'm a mechanical engineer and scientist at the University of Michigan.
    I specialize in biomechanics, human-robot interaction, exoskeleton control, and experimental design.`,
    email: "nundinir@umich.edu",
  },
  experience: [
    //   {
    //     company: "Neurobionics Lab",
    //     position: "Characterizing Value Landscapes for Exoskeleton Assistance",
    //     startDate: "July 2024",
    //     endDate: "current",
    //     summary: [
    //       "Designed a study to quantify how perceived value of exoskeleton assistance changes with assistance attributes (e.g., peak torque).",
    //       "Developed a mid-level torque controller",
    //       "Designed a 3D printed a custom thermal enclosure to mitigate motor overheating.",
    //       "Currently recruiting participants, finalizing experimental protocols, and characterizing device transmission using a dynamometer.",
    //     ],

    //   },
    //   {
    //     company: "Neurobionics Lab",
    //     position: "What does User Experience of Exoskeleton Assistance Encode?",
    //     startDate: "July 2022",
    //     endDate: "current",
    //     summary: [
    //       "Formulated a study to investigate how user perception of exoskeleton assistance relates to physical fatigue during use. ",
    //       "Led an IRB-approved human study with 10 participants; collected physiological data including metabolic rate and limb kinetics/kinematics.",
    //       "Currently analyzing data using statistical modeling techniques.",
    //     ],
    //   },
    //   {
    //     company: "Neurobionics Lab",
    //     position: "Preferred Ankle Stiffness of a Variable-Stiffness Prosthesis Across Five Activities",
    //     startDate: "May 2023",
    //     endDate: "June 2024",
    //     summary: [
    //       "Assisted in revamping a Variable Stiffness Prosthetic Ankle (VSPA) foot to determine amputee preferred stiffness for various activities, as well as ankle stiffness sensitivity during these activities.",
    //       "Performed biomechanical data collection and performed psychometric analysis to determine just-noticeable-differences (JND) in stiffness.",
    //       "Designed and 3D printed wearable housing for electronic components; created wiring harnesses for robust electrical interfaces.",
    //     ],
    //   },
    //   {
    //     company: "Neurobionics Lab",
    //     position: "A Sensitivity Analysis of an Economic Value Metric for Quantifying the Success of Lower-Limb Exoskeletons and their Assistance",
    //     startDate: "Aug 2021",
    //     endDate: "July 2022",
    //     summary: [
    //       "Designed a study to investigate how virtual robotic agents influence perceived value of exoskeleton assistance.",
    //       "Developed agents that simulate human fatigue behavior to estimate user perceptions.",
    //       "Led an IRB-approved study with 14 participants; conducted statistical modeling and data analysis.",
    //     ]
    //   },
  ],
  projects: [
    {
      name: "Characterizing Value Landscapes for Exoskeleton Assistance",
      summary: "How does user value of exoskeleton assistance change with assistance attributes (e.g., peak torque)?",
      // linkPreview: "/",
      linkSource: "https://github.com/neurobionics/Exoboot-Controller-VAS",
      image: "/S101_vas_landscape.png",
    },
    {
      name: "What does User Experience of Exoskeleton Assistance Encode?",
      summary: "How does user perception of exoskeleton assistance relate to physical fatigue during use. ",
      // linkPreview: "/",
      // linkSource: "https://github.com/immois/astro-zen",
      image: "/MV_diag.png",
    },
    {
      name: "Preferred Ankle Stiffness of a Variable-Stiffness Prosthesis Across 5 Activities",
      summary: "What ankle stiffness do amputees prefer for various activities?",
      linkPreview: "/",
      // linkSource: "https://github.com/immois/astro-zen",
      image: "/vspa_img.png",
    },
  ],
  about: {
    description: `
    Hi there! I'm a PhD candidate in Mechanical Engineering at the University of Michigan,
    where I study how to develop exoskeletons that are both biomechanically effective and meaningful to wear.
    My work combines human-subject studies, controls development, and behavioral metrics to quantify
    and integrate user experience directly into exoskeleton design.
    `,
    image: "/headshot_1.png",
  },
};

// #5755ff
