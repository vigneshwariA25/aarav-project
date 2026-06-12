import FadeUp from './FadeUp'

export default function SectionHeader({ label, title, subtitle, center = true }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <FadeUp>
        {/* Label with decorative lines */}
        <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
          <div
            className="h-px flex-shrink-0"
            style={{
              width: '32px',
              background: center
                ? 'linear-gradient(90deg, transparent, rgba(216,180,107,0.6))'
                : 'linear-gradient(90deg, transparent, rgba(216,180,107,0.6))',
            }}
          />
          <p className="section-label">{label}</p>
          <div
            className="h-px flex-shrink-0"
            style={{
              width: '32px',
              background: 'linear-gradient(90deg, rgba(216,180,107,0.6), transparent)',
            }}
          />
        </div>

        {/* Gold ornament divider */}
        <div
          style={{
            width: '48px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #D8B46B, transparent)',
            margin: center ? '0 auto 1.25rem' : '0 0 1.25rem',
          }}
        />

        {/* Main title */}
        <h2
          className="font-cormorant font-light leading-tight mt-4"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
            color: '#F5F1E8',
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="font-outfit text-base md:text-lg mt-5 leading-relaxed"
            style={{
              color: 'rgba(245,241,232,0.5)',
              maxWidth: '640px',
              ...(center ? { margin: '1.25rem auto 0' } : {}),
            }}
          >
            {subtitle}
          </p>
        )}
      </FadeUp>
    </div>
  )
}
