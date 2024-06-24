import { ReactNode } from 'react'

import ASIaventure from '/public/img/projects/ASIAventure/ASIaventure.png'
import bASIc from '/public/img/projects/bASIc/bASIc.png'
import bigDataCFS1 from '/public/img/projects/bigDataCFS/bigDataCFS1.png'
import bigDataCFS2 from '/public/img/projects/bigDataCFS/bigDataCFS2.png'
import bigDataCFS3 from '/public/img/projects/bigDataCFS/bigDataCFS3.png'
import chronos1 from '/public/img/projects/ihmeChronos/chronos1.png'
import chronos2 from '/public/img/projects/ihmeChronos/chronos2.png'
import chronos3 from '/public/img/projects/ihmeChronos/chronos3.png'
import chronos4 from '/public/img/projects/ihmeChronos/chronos4.png'
import memory from '/public/img/projects/Memory/memory.png'
import othello from '/public/img/projects/Othello/othello.png'
import pic1 from '/public/img/projects/PIC/pic-1.png'
import pic2 from '/public/img/projects/PIC/pic-2.png'
import pic3 from '/public/img/projects/PIC/pic-3.png'
import elec from '/public/img/projects/PortableConsole/console1.png'
import reacli1 from '/public/img/projects/reacli/reacli1.png'
import reacli2 from '/public/img/projects/reacli/reacli2.png'
import reacli3 from '/public/img/projects/reacli/reacli3.png'
import reacli4 from '/public/img/projects/reacli/reacli4.png'
import screenBlurrer from '/public/img/projects/ScreenBlurrer/blurrer.png'
import sosTouriste1 from '/public/img/projects/SOSTouriste/sosTouriste1.png'
import sosTouriste2 from '/public/img/projects/SOSTouriste/sosTouriste2.png'
import whatsASI1 from '/public/img/projects/WhatsASI/ir_whatsasi.png'
import whatsASI2 from '/public/img/projects/WhatsASI/ir_whatsasi_connexion.png'
import whatsASI3 from '/public/img/projects/WhatsASI/ir_whatsasi_filtres.png'

export type Project = {
  key: string
  dates: string
  talk?: boolean
  title: string
  location: string
  description: ReactNode
  technologies: string[]
  npm?: string
  website?: string
  images?: string[]
  github?: string
  video?: string
  slides?: string
  events?: string[]
}

const projects: Project[] = [
  /* Talk WebUSB */
  {
    key: 'talk-webusb',
    dates: 'December 2019 - today',
    talk: true,
    title: 'WebUSB to the rescue!',
    location: 'Paris, France',
    description: (
      <div>
        <div className="mb-2">
          Interaction between a web app and a hand-made NFC USB Reader with the{' '}
          <span className="text-primary">WebUSB API</span>.
        </div>
        <div className="mb-2">
          When developing a tool that interacts with an external device, we are
          usually forced to develop fat clients or use containers like Electron.
        </div>
        <div className="mb-2">Why not use the browser directly?</div>
        <div className="mb-2">
          Yes, your browsers, including Chrome, have more and more APIs to
          access the native parts of your equipment.
        </div>
        <div>
          Come discover the WebUSB API through a simple example: the realization
          of a <span className="text-primary">NFC card reader</span> with 100%
          of web code.
        </div>
      </div>
    ),
    technologies: ['JavaScript', 'WebUSB', 'API', 'NFC', 'Arduino', 'React'],
    video: 'https://youtu.be/SzDmtHeKXQgs',
    slides:
      'https://slides.com/gautierdarchen/communicate-a-nfc-reader-with-a-web-application',
    github: 'https://github.com/gdarchen/webusb-arduino-nfc',
    events: [
      'Node.js Paris Meetup',
      'React.js Paris Meetup',
      'Takima Meetup',
      'Devoxx 2020',
    ],
  },
  /* Reacli */
  {
    key: 'reacli',
    dates: 'February 2019',
    title: 'Reacli - A React CLI',
    location: 'Paris, France',
    description: (
      <>
        <div className="mb-2">
          With two friends, we created and maintain a NPM library,
          &quot;Reacli&quot;.
        </div>
        <div className="mb-2">
          It is a <span className="text-primary">CLI</span> for{' '}
          <span className="text-primary">React</span>, enabling to create
          components, hooks... and customize it with a lot of options!
        </div>
      </>
    ),
    technologies: ['JavaScript', 'React', 'Jest', 'NPM'],
    images: [reacli1.src, reacli2.src, reacli3.src, reacli4.src],
    github: 'https://github.com/reacli/cli',
    website: 'https://reacli.github.io',
    npm: 'https://www.npmjs.com/package/reacli',
  },
  /* Chronos agent */
  {
    key: 'chronos',
    dates: 'Septembre 2018 - January 2019',
    title: 'Virtual agent',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <>
        <div className="mb-2">
          At INSA Rouen, we created a{' '}
          <span className="text-primary">mobile</span> application to propose a{' '}
          <span className="text-primary">virtual agent</span> with whom we can
          discuss. It is possible to ask it to set up an alarm. It asks the
          questions oriented to have all the necessary information.
        </div>
        <div className="mb-2">
          The buzzer associated with the alarm will match the weather of the
          user&apos;s location when it rings.
        </div>
      </>
    ),
    technologies: ['React-Native', 'Javascript', 'Dialogflow', 'Node.js'],
    images: [chronos1.src, chronos2.src, chronos3.src, chronos4.src],
    github: 'https://github.com/alexandre-lelain/ihme-agent-assistant',
  },
  /* BigData CFS */
  {
    key: 'cfs',
    dates: 'Septembre 2018 - January 2019',
    title: 'Big Data and tweet in real time',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <>
        <div className="mb-2">
          At INSA Rouen, we worked with{' '}
          <span className="text-primary">Cassandra File System</span> so as to
          analyze a big amount of tweets and evualuate a global valence.
        </div>
        <div className="mb-2">
          We are then able to say if the majority of the people who have tweeted
          are for or against a given subject.
        </div>
      </>
    ),
    technologies: ['CFS', 'BigData', 'Python3', 'Docker'],
    images: [bigDataCFS1.src, bigDataCFS2.src, bigDataCFS3.src],
    github: 'https://github.com/gdarchen/BigData-CFS',
  },
  /* PIC AEROW */
  {
    key: 'pic',
    dates: 'January 2017 - January 2018',
    title: 'Stratow for AEROW Solutions',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <>
        <div className="mb-2">
          Half-time project realized at the INSA Rouen-Normandie for the company
          AEROW Solutions. In a team of eight students, this ISO 9001:2015
          certified project aims to set up the transition from the web platform
          of{' '}
          <span className="text-primary">Electronic Document Management</span>{' '}
          to MVC (Model-View-Controller) by using the Symfony framework, as well
          as the complete redesign of the front-end architecture (thanks to the
          Bootstrap framework). We developped in TDD (Test Driven Development)
          and the working methodology is an Agile Method named Scrum.
        </div>
        <div className="mb-2">
          During the first 6 months, I was{' '}
          <span className="text-primary">Project Manager</span>.
        </div>
      </>
    ),
    images: [pic1.src, pic2.src, pic3.src],
    technologies: ['Symfony', 'Scrum', 'PHP', 'ELK'],
  },
  /* WhatsASI? */
  {
    key: 'whatsasi',
    dates: 'January 2017 - April 2018',
    title: 'Instant messaging application',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <>
        <div className="mb-2">
          In Java 8 and using the RMI technology as part of a{' '}
          <span className="text-primary">Distributed Computing</span> course,
          creation of an <span className="text-primary">instant messaging</span>{' '}
          application, enabling users to chat from different machines. Users can
          choose a pseudo, a profile avatar, and decide in which conversation
          they want to chat. It is also possible to chat with an artificial
          intelligence (AI). Finally, the user can also select words that he
          wants the application to filter.
        </div>
        <div className="mb-2">
          There are two graphic interfaces available: one developed thanks to
          JavaFX, the other one to be used in a terminal.
        </div>
      </>
    ),
    technologies: ['Java 8', 'JavaFX', 'AI', 'RMI', 'Messaging'],
    images: [whatsASI1.src, whatsASI2.src, whatsASI3.src],
    github: 'https://github.com/gdarchen/WhatsASI',
  },
  /* SOS Touriste */
  {
    key: 'sos-touriste',
    dates: 'September 2016 - January 2017',
    title: 'Development of an iOS application',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <div>
        In Swift language (Cocoa Touch), the goal was to develop an{' '}
        <span className="text-primary">application for iPhone</span>, so as to
        offer the users a contextual help. The targeted users are tourists
        visiting France (location of interest points, useful telephone
        numbers...).
      </div>
    ),
    technologies: ['Swift', 'iOS', 'Mobile'],
    images: [sosTouriste1.src, sosTouriste2.src],
  },
  /* Screen blurrer */
  {
    key: 'screen-blurrer',
    dates: 'September 2016',
    title: 'Development of a screen blurrer',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <>
        <div className="mb-2">
          In Python using the <span className="text-primary">OpenCV</span>{' '}
          library, development of an application enabling the user to use his
          computer and displaying the image recorded by the webcam as soon as a
          person appears behind him. Thus, on the displayed image, a green frame
          indicates the location of the new detected face so as to let the user
          know who is spying him.
        </div>
        <div className="mb-2">
          There exists two other modes as the one presented before: a
          &quot;zen&quot; mode displaying a code snapshot as soon as a third
          person appears behind the screen, and an &quot;ironman&quot; mode
          displaying an IronMan mask on every detected people.
        </div>
      </>
    ),
    technologies: ['OpenCV', 'Python'],
    images: [screenBlurrer.src],
    github: 'https://github.com/gdarchen/screen-blurrer',
  },
  /* Portable game console */
  {
    key: 'portable-game-console',
    dates: 'January 2016 - May 2016',
    title: 'Portable game console',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <div>
        Complete designing of a{' '}
        <span className="text-primary">Breakout clone</span> using an Arduino
        Mega driven with an analog joystick: designing the{' '}
        <span className="text-primary">electronic circuits</span>, choosing and
        buying electronic components, designing a 3D-printed housing,
        development of a Breakout-style game in the Arduino language.
      </div>
    ),
    technologies: ['Arduino', '3D', 'Electronics'],
    images: [elec.src],
    github: 'https://github.com/gdarchen/breakout',
  },
  /* Mini adventure game */
  {
    key: 'mini-adventure-game',
    dates: 'October 2015 - January 2016',
    title: 'Development of mini adventure game',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <div>
        In Java 8, creation of a mini{' '}
        <span className="text-primary">terminal adventure game</span> in a team
        of 2 members. The game demonstrates most of Java 8 possibilities.
      </div>
    ),
    technologies: ['Java 8'],
    images: [ASIaventure.src],
    github: 'https://github.com/gdarchen/ASIAventure',
  },
  /* Othello */
  {
    key: 'othello',
    dates: 'October 2015 - January 2016',
    title: 'Development of an Othello game',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <div>
        In language C and using the V-Model, set up a version of the{' '}
        <span className="text-primary">Othello</span>
        game with an artificial intelligence (AI) with the Min-Max algorithm.
      </div>
    ),
    technologies: ['C', 'Min-max', 'AI', 'V-Model'],
    images: [othello.src],
    github: 'https://github.com/gdarchen/othello',
  },
  /* bASIc Compiler */
  {
    key: 'bASIc',
    dates: 'October 2015 - January 2016',
    title: 'Conception of a bASIc personal compiler',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <div>
        Using Lex and Yacc, creation of a{' '}
        <span className="text-primary">personal compiler</span> named bASIc. It
        can recognise simple boolean expressions (if - then - else) and can
        handle inputs and outputs.
      </div>
    ),
    technologies: ['Lex', 'Yacc', 'Compiler'],
    images: [bASIc.src],
    github: 'https://github.com/gdarchen/bASIc-compiler',
  },
  /* Memory game */
  {
    key: 'memory',
    dates: 'October 2014 - January 2015',
    title: 'Conception of a Memory game',
    location: 'INSA Rouen-Normandie, Rouen, France',
    description: (
      <div>
        Using Pascal and SDL, development of a{' '}
        <span className="text-primary">Memory game</span>. This game proposes 3
        different levels, and manages a ranking.
      </div>
    ),
    technologies: ['Pascal', 'SDL'],
    images: [memory.src],
  },
]

export default projects
