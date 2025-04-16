import {
  AngularjsOriginal,
  BitbucketOriginal,
  BootstrapOriginal,
  ConfluenceLine,
  ConfluenceOriginal,
  Css3Original,
  FigmaOriginal,
  GithubOriginal,
  GitlabOriginal,
  GitOriginal,
  Html5Original,
  JavascriptOriginal,
  JenkinsOriginal,
  JiraOriginal,
  JqueryOriginal,
  MicrosoftsqlserverOriginal,
  NextjsOriginal,
  PostgresqlOriginal,
  PostmanOriginal,
  PrismaOriginal,
  ReactOriginal,
  ReactrouterOriginal,
  ReduxOriginal,
  SassOriginal,
  VscodeOriginal,
} from "devicons-react";
import { RiRemixRunFill } from "react-icons/ri";

const resume = {
  experiences: [
    {
      title: "Application Developer",
      company: "Fiserv",
      timeframe: "November 2019 to December 2024",
      description: [
        "Created wireframe designs and implemented designs into eight new applications using ReactJS.",
        "Refactored and redesigned four existing applications using ReactJS.",
        "Assisted on three major CRM development projects, built with ReactJS, leading to more than $5 million in savings for call center.",
        "Wrote and analyzed SQL queries for business data.",
        "Migrated and combined three existing databases into one centralized database which was then used as a backend for admin UI, one of the eight new apps, that managed data for five of the applications.",
        "Due to my experience within the call center and managing the knowledge base, served as a subject matter expert between business and technology teams.",
        "Implemented REST APIs in frontend code.",
        "Implemented and managed CI/CD through Jenkins and Harness for more than a dozen frontend applications.",
      ],
    },
    {
      title: "Knowledge Systems Administrator",
      company: "Fiserv",
      timeframe: "July 2014 to November 2019",
      description: [
        "Redesigned outdated internal directory website to be fully responsive using HTML, CSS, and jQuery using a custom CSS layout.",
        "Redesigned and develop three major internal applications using HTML, CSS, Flexbox, jQuery, and JavaScript.",
        "Played a principle role in upgrade of content management system for existing knowledge base website and migrated over 2000 knowledge base articles to new system. Provided input with team on decisions of customizing UI and UX elements of new site.",
        "Maintained and upgraded knowledge base system for all call center departments. Created new frontend applications in partnership with fellow writer for call center.",
        "Managed and updated SQL data for applications based on business ticket requests.",
        "Created and managed taxonomy system for internal knowledge base for call center.",
        "Developed and edited articles with input from call center SMEs within knowledge base of several thousand articles.",
        "Led team on creation and modification of new knowledge base UI during upgrade, including major design decisions around font, layout, etc.",
      ],
    },
    {
      title: "Team Leader",
      company: "Fiserv",
      timeframe: "June 2010 to June 2014",
      description: [
        "Resolved intricate customer inquiries and escalated issues.",
        "Conducted side-by-side coaching sessions to help improve associate call quality and efficiency.",
        "Built and distributed reports for individual teams to understand and improve KPI metrics.",
        "Created, reviewed, and updated internal procedures to enhance call quality and assist call center users.",
        "Provided ongoing coaching for identified casework issues for each agent.",
        "Led agents during first two weeks on call center floor to assist with calls and questions.",
        "Handled escalations from customers to resolve issues with agents, payment concerns, and technical support assistance.",
      ],
    },
  ],
  educations: [
    {
      institution: "Catawba Valley Community College",
      name: "Associates in Web Technologies",
      timeframe: "August 2013 to May 2015",
      description:
        "Degree program focused mainly on front-end development during college, with some classes in backend and full-stack development such as Mobile Java development, C++ development, and database fundamentals. Built websites mostly using Dreamweaver and Notepad++ during these courses.",
      online: false,
      location: "Hickory, NC",
    },
    {
      institution: "PluralSight",
      name: "Various Courses and Paths",
      timeframe: "August 2015 to March 2016",
      description: "Completed interactive courses in HTML5, CSS3, Flexbox, Git, JavaScript, jQuery, AngularJS, and other HTML and JavaScript lessons.",
      online: true,
      location: "https://www.pluralsight.com",
    },
    {
      institution: "Codecademy",
      name: "Freelance Web Design Course",
      timeframe: "February 2017 to April 2017",
      description:
        "Participated in an eight-week course designed to teach users to design, build and deploy professional websites from scratch using HTML, CSS, JavaScript, and Github. The course helped me solidify an overall front-end skill set, particularly in regards to Flexbox and Github.",
      online: true,
      location: "https://www.codecademy.com",
    },
  ],
};

const languages = [
  {
    label: "JavaScript",
    icon: <JavascriptOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "ReactJS",
    icon: <ReactOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "HTML",
    icon: <Html5Original size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "CSS",
    icon: <Css3Original size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "NextJS",
    icon: <NextjsOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "Redux",
    icon: <ReduxOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "SASS",
    icon: <SassOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "Bootstrap",
    icon: <BootstrapOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "AngularJS",
    icon: <AngularjsOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "jQuery",
    icon: <JqueryOriginal size="1.8rem" />,
    category: "frontend",
  },
  {
    label: "Remix/ReactRouter 7",
    icon: <ReactrouterOriginal />,
    category: "frontend",
  },
  {
    label: "SQL Server",
    icon: <MicrosoftsqlserverOriginal size="1.8rem" />,
    category: "database",
  },
  {
    label: "PostgreSQL",
    icon: <PostgresqlOriginal size="1.8rem" />,
    category: "database",
  },
  {
    label: "Prisma",
    icon: <PrismaOriginal size="1.8rem" />,
    category: "database",
  },
  {
    label: "Git",
    icon: <GitOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "Bitbucket",
    icon: <BitbucketOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "JIRA",
    icon: <JiraOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "Confluence",
    icon: <ConfluenceOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "GitHub",
    icon: <GithubOriginal size="1.8rem" color="white" />,
    category: "tools",
  },
  {
    label: "GitLab",
    icon: <GitlabOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "Jenkins",
    icon: <JenkinsOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "Harness",
    icon: null,
    category: "tools",
  },
  {
    label: "Postman",
    icon: <PostmanOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "Figma",
    icon: <FigmaOriginal size="1.8rem" />,
    category: "tools",
  },
  {
    label: "VSCode",
    icon: <VscodeOriginal size="1.8rem" />,
    category: "tools",
  },
  // {
  //   label: "Netlify (not yet)",
  //   icon: null,
  //   category: "tools",
  // },
  // {
  //   label: "Vercel (not yet)",
  //   icon: null,
  //   category: "tools",
  // },
];

export { resume, languages };
