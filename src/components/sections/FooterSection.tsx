import { Section } from '@/components/common'
import { useFooterContent } from '@/hooks/useFooterContent'

export function FooterSection() {
  const { footer } = useFooterContent()

  return (
    <Section
      id="footer"
      contained={false}
      className="section--footer"
      as="footer"
      aria-label="Footer"
    >
      <div className="footer__content">
        <p className="footer__text">
          {footer.primary} &copy; {new Date().getFullYear()}
        </p>
        <p className="footer__meta mono">{footer.secondary}</p>
      </div>
    </Section>
  )
}
