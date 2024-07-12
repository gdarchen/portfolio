import { RichTextPart } from '@/lib/notion'

export type WatchResource = {
  id: string
  title: string
  tldr?: RichTextPart[]
  done: boolean
  url: string
  type: string
  createdAt: Date
  date: Date
  source?: string
  subSource?: string
  shiny?: boolean
}
