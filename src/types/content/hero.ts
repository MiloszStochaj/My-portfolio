export type HeroContent = {
  greeting: string
  heading: {
    lead: string
    muted: string
    trail: string
  }
  subtitle: string
  description: string
  ctas: {
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
  }
}
