import { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export type SocialMedia = {
  icon: IconType
  url: string
}

export const socialMedia: SocialMedia[] = [
  {
    icon: FaGithub,
    url: 'https://github.com/gdarchen',
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/gautierdarchen/',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/g_darchen/',
  },
]
