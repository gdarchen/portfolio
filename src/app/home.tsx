'use client'

import { FC, useEffect } from 'react'
import Aos from 'aos'

import Footer from '@/components/footer/Footer'
import MyName from '@/components/home/1-my-name/MyName'
import AboutMe from '@/components/home/2-about-me/AboutMe'
import WorkExperience from '@/components/home/3-work-experience/WorkExperience'
import Projects from '@/components/home/4-projects/Projects'
import Skills from '@/components/home/5-skills/Skills'
import GetInTouch from '@/components/home/6-get-in-touch/GetInTouch'
import TechnologyWatchLink from '@/components/home/7-technology-watch-link/TechnologyWatchLink'
import SocialMediaAround from '@/components/home/social-media-around/SocialMediaAround'

const Home: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, [])

  return (
    <>
      <MyName />
      <SocialMediaAround />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Skills />
      <GetInTouch />
      <TechnologyWatchLink />
      <Footer />
    </>
  )
}

export default Home
