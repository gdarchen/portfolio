import { ReactNode } from 'react';
import { DiScrum } from 'react-icons/di';
import {
  FaAirbnb,
  FaAngular,
  FaApple,
  FaAws,
  FaCheckCircle,
  FaCss3Alt,
  FaDocker,
  FaFileCode,
  FaGit,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaLeaf,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaWindows,
} from 'react-icons/fa';
import {
  SiApachemaven,
  SiC,
  SiCplusplus,
  SiDjango,
  SiFfmpeg,
  SiJavascript,
  SiKubernetes,
  SiMatrix,
  SiNeo4J,
  SiNestjs,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiServerless,
  SiSocketdotio,
  SiSonarcloud,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiYarn,
} from 'react-icons/si';

type Skill = {
  text: string;
  icon: ReactNode;
};

type SkillsByLevel = Array<{
  title: string;
  skills: Skill[]
  className?: string
}>

const advancedSkills: Skill[] = [
  { text: 'JavaScript', icon: <SiJavascript /> },
  { text: 'React', icon: <FaReact /> },
  { text: 'Node.js', icon: <FaNodeJs /> },
  { text: 'TypeScript', icon: <SiTypescript /> },
  { text: 'Nest', icon: <SiNestjs /> },
  { text: 'AWS', icon: <FaAws /> },
  { text: 'Serverless', icon: <SiServerless /> },
  { text: 'Docker', icon: <FaDocker /> },
  { text: 'Kubernetes', icon: <SiKubernetes /> },
  { text: 'Sass', icon: <FaSass /> },
  { text: 'CSS', icon: <FaCss3Alt /> },
  { text: 'Tailwind', icon: <SiTailwindcss /> },
  { text: 'Git', icon: <FaGit /> },
  { text: 'Websockets', icon: <SiSocketdotio /> },
  { text: 'Webpack', icon: <SiWebpack /> },
  { text: 'Vite', icon: <SiVite /> },
  { text: 'Yarn', icon: <SiYarn /> },
  { text: 'npm', icon: <SiNpm /> },
  { text: 'Java', icon: <FaJava /> },
  { text: 'Spring', icon: <FaLeaf /> },
  { text: 'Maven', icon: <SiApachemaven /> },
  { text: 'Jenkins', icon: <FaJenkins /> },
  { text: 'Gitlab CI', icon: <FaGitlab /> },
  { text: 'SonarQube', icon: <SiSonarcloud /> },
  { text: 'HTML', icon: <FaHtml5 /> },
  { text: 'LaTeX', icon: <FaFileCode /> },
  { text: 'Linux', icon: <FaLinux /> },
  { text: 'Mac OSX', icon: <FaApple /> },
  { text: 'Windows', icon: <FaWindows /> },
  { text: 'Scrum', icon: <DiScrum /> },
  { text: 'TDD', icon: <FaCheckCircle /> },
  { text: 'SQL', icon: <SiPostgresql /> },
];

const intermediateSkills: Skill[] = [
  { text: 'Angular', icon: <FaAngular /> },
  { text: 'PHP', icon: <SiPhp /> },
  { text: 'C', icon: <SiC /> },
  { text: 'C++', icon: <SiCplusplus /> },
  { text: 'Python', icon: <FaPython /> },
  { text: 'Django', icon: <SiDjango /> },
  { text: 'Swift', icon: <SiSwift /> },
  { text: 'Matlab', icon: <SiMatrix /> },
  { text: 'Neo4j', icon: <SiNeo4J /> },
  { text: 'FFmpeg', icon: <SiFfmpeg /> },
  { text: 'Lottie', icon: <FaAirbnb /> },
];

export const skillsByLevel: SkillsByLevel = [
  { title: "Advanced", skills: advancedSkills, className: "grow md:[&>div]:grid-cols-10" },
  { title: 'Intermediate', skills: intermediateSkills }
]