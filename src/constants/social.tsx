import type { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaBluesky, FaXTwitter } from 'react-icons/fa6'

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
  {
    icon: FaXTwitter,
    url: 'https://x.com/GDarchen',
  },
  {
    icon: FaBluesky,
    url: 'https://bsky.app/profile/gautierdarchen.fr',
  },
]
