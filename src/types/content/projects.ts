import type { ProjectId } from '@/types/projects'

export type ProjectLinksContent = {
  github?: string
  external?: string
}

export type ProjectItemContent = {
  id: ProjectId
  title: string
  description: string
  tags: string[]
  links: ProjectLinksContent
}

export type ProjectsContent = {
  header: {
    title: string
  }
  items: ProjectItemContent[]
}
