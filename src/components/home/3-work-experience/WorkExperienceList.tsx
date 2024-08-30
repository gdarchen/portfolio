import { FC, ReactNode } from 'react'
import { DiGoogleAnalytics } from 'react-icons/di'
import {
  FaCalculator,
  FaCode,
  FaCodeBranch,
  FaCreditCard,
  FaGraduationCap,
  FaPeopleCarryBox,
  FaVideo,
} from 'react-icons/fa6'
import { GiDiamondRing } from 'react-icons/gi'
import { Md3dRotation } from 'react-icons/md'

import ArrowIcon from '@/components/icons/ArrowIcon'

export type Experience = {
  date: string
  title: string
  tabTitle: string
  icon: ReactNode
  location: string
  company?: string
  description?: ReactNode
  technologies?: string[]
  link?: string
}

const Arrow: FC = () => (
  <ArrowIcon className="mr-2 h-5 w-4 flex-none text-primary" />
)

export const experiences: Experience[] = [
  // Contentsquare
  {
    date: 'September 2024 - today',
    title: 'Senior Software Engineer',
    tabTitle: 'Contentsquare',
    icon: <DiGoogleAnalytics />,
    location: 'Paris (full remote), France',
    company: 'Contentsquare',
    description: <>{/* TODO(contentsquare): to fill */}</>,
    technologies: [
      'React',
      'Node.js',
      'Git',
      'Kubernetes',
      'Vue',
      'Vite',
      'Turborepo',
      'pnpm',
    ],
    link: 'https://contentsquare.com',
  },

  // Swile
  {
    date: 'July 2022 - today',
    title: 'Senior Software Engineer',
    tabTitle: 'Swile',
    icon: <FaCreditCard />,
    location: 'Montpellier & Paris (full remote), France',
    company: 'Swile',
    description: (
      <>
        <span className="inline-flex">
          <Arrow />
          <span>
            I have been working for this french unicorn 🦄, in the
            &quot;Places&quot; team which is in charge of the{' '}
            <span className="text-primary">full stack</span> development of all
            the features related to the{' '}
            <span className="text-primary">geolocation</span> of the restaurants
            and shops affiliated with Swile.
          </span>
        </span>

        <span className="mt-4 inline-flex">
          <Arrow />
          <span>
            Then, I actively worked on the{' '}
            <span className="text-primary">ecommerce</span> platform.
          </span>
        </span>
      </>
    ),
    technologies: [
      'React',
      'Node.js',
      'Git',
      'Kubernetes',
      'Nest',
      'Vite',
      'Vitest',
      'Tailwind',
    ],
    link: 'https://swile.co',
  },

  // Kannelle
  {
    date: 'May 2020 - June 2022',
    title: 'Software Engineer',
    tabTitle: 'Kannelle',
    icon: <FaVideo />,
    location: 'Paris (full remote), France',
    company: 'Kannelle',
    description: (
      <span className="inline-flex">
        <Arrow />
        <span>
          In a startup context, I have been in charge of developing the{' '}
          <span className="text-primary">web</span> platform of the Kannelle
          application, a web video editor as well as the administration module.
          I also managed the <span className="text-primary">back-end</span>{' '}
          part, the <span className="text-primary">DevOps</span> and the{' '}
          <span className="text-primary">cloud</span> architecture.
        </span>
      </span>
    ),
    technologies: [
      'React',
      'Node.js',
      'Git',
      'CSS-in-JS',
      'Webpack',
      'Lottie',
      'AWS',
      'Serverless',
      'Neo4j',
      'Websockets',
      'FFmpeg',
    ],
    link: 'https://kannelle.io',
  },

  // Takima
  {
    date: 'July 2018 - April 2020',
    title: 'Software Engineer — IT consultant',
    tabTitle: 'Cartier',
    icon: <GiDiamondRing />,
    location: 'Paris, France',
    company: 'Takima',
    description: (
      <>
        <span className="inline-flex">
          <Arrow />
          Working for Cartier Joaillerie International, I developed several
          applications to improve the time management in workshops or gain a lot
          of time in the processes of logistics.
        </span>

        <span className="mt-2 inline-flex">
          <Arrow />
          <span>
            Using <span className="text-primary">DevOps</span> methodology, I
            was also in charge of setting up a new technological stack at the IS
            pole.
          </span>
        </span>
      </>
    ),
    technologies: [
      'Node.js',
      'React',
      'Electron',
      'Jest',
      'Git',
      'NFC',
      'WebUSB',
      'Jenkins',
      'Bitbucket',
      'Jira',
      'Docker',
      'Sass',
      'SQLServer',
    ],
    link: 'https://cartier.com',
  },

  // Takima academy
  {
    date: 'February 2018 - July 2018',
    title: 'Takima Academy training',
    tabTitle: 'Takima Academy',
    icon: <FaCodeBranch />,
    location: 'Takima, Paris, France',
    company: 'Takima',
    description: (
      <>
        <div className="inline-flex">
          <Arrow />
          As an Engineering internship, project training in the following areas:
        </div>
        <div className="flex flex-col">
          <div className="ml-8 inline-flex">
            <Arrow />
            back-end development,
          </div>
          <div className="ml-8 inline-flex">
            <Arrow />
            front-end development,
          </div>
          <div className="ml-8 inline-flex">
            <Arrow />
            DevOps activities,
          </div>
          <div className="ml-8 inline-flex">
            <Arrow />
            working methodologies.
          </div>
        </div>
      </>
    ),
    technologies: [
      'Java',
      'Spring/SpringBoot',
      'JDBC',
      'ORM',
      'ES6',
      'AngularJS',
      'Angular',
      'i18n',
      'Gitlab-CI',
      'Jenkins',
      'Ansible',
      'Docker',
      'Docker-Compose',
      'Scrum',
      'TDD',
      'load-testing',
      'Git workflow',
    ],
    link: 'https://takima.fr',
  },

  // Specialty internship
  {
    date: 'Juny 2017 - August 2017',
    title: 'Specialty internship in Germany',
    tabTitle: 'BIM&CO',
    icon: <Md3dRotation />,
    location: 'KiM GmbH, Sankt-Wendel, Germany',
    company: 'BIM&CO',
    description: (
      <div className="inline-flex">
        <Arrow />
        <span>
          Development of two plugins for the CAD software Allplan® in the field
          of BIM objects (<em>Building Information Modeling</em>).
        </span>
      </div>
    ),
    technologies: ['C++', 'MFC', 'JSON', 'XML'],
    link: 'https://bimandco.com',
  },

  // Project Manager (PIC)
  {
    date: 'all year 2017',
    title: 'Project Manager',
    tabTitle: 'AEROW Solutions',
    icon: <FaPeopleCarryBox />,
    location: 'INSA Rouen-Normandie, Rouen, France',
    company: 'INSA',
    description: (
      <div className="inline-flex">
        <Arrow />
        Redesign a web application for Electronic Document Management (team of 8
        people) in the context of an ISO 9001:2015 certified project.
      </div>
    ),
    technologies: [
      'Symfony',
      'Scrum',
      'PHP',
      'Elasticsearch',
      'Logstash',
      'Kibana',
    ],
    link: 'https://insa-rouen.fr',
  },

  // Specialisation in ASI
  {
    date: '2015 - 2017',
    title: 'Specialization in Architecture of Information Systems',
    tabTitle: 'Specialization',
    icon: <FaCode />,
    location: 'INSA Rouen-Normandie, Rouen, France',
    link: 'https://insa-rouen.fr',
  },

  // Preparatory cycle
  {
    date: '2013 - 2015',
    title: 'Preparatory cycle for engineering schools',
    tabTitle: 'Prep. cycle',
    icon: <FaCalculator />,
    location: 'INSA Rouen-Normandie, Rouen, France',
    link: 'https://insa-rouen.fr',
  },

  // Baccalaureate
  {
    date: '2013',
    title: 'Scientific Baccalaureate — Baccalaureate with distinction',
    tabTitle: 'Baccalaureate',
    icon: <FaGraduationCap />,
    location: 'Lycée Saint-Joseph, Le Havre, France',
    description: (
      <div className="inline-flex">
        <Arrow />
        German european class, specialty in natural sciences
      </div>
    ),
    link: 'https://st-jo.fr',
  },
]
