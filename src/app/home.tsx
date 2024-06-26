'use client'

import { FC, useEffect } from 'react'
import Aos from 'aos'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import MyName from '@/components/home/1-my-name/MyName'
import AboutMe from '@/components/home/2-about-me/AboutMe'
import WorkExperience from '@/components/home/3-work-experience/WorkExperience'
import Projects from '@/components/home/4-projects/Projects'
import Skills from '@/components/home/5-skills/Skills'
import GetInTouch from '@/components/home/6-get-in-touch/GetInTouch'
import SocialMediaAround from '@/components/home/social-media-around/SocialMediaAround'
import ScreenSizeDetector from '@/components/screen-size-detector/ScreenSizeDetector'

const Home: FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, [])

  const isProd = process.env.NODE_ENV === 'production'

  return (
    <div className="relative min-h-screen w-full snap-mandatory bg-background">
      <Header />
      <MyName />
      <SocialMediaAround />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Skills />
      <GetInTouch />
      <Footer />
      {!isProd && <ScreenSizeDetector />}
    </div>
  )
}

export default Home
