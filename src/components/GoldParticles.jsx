import { useEffect, useRef } from 'react'

export default function GoldParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // More particles with varied size for cinematic depth
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 0.2,
      dx: (Math.random() - 0.5) * 0.15,
      dy: -Math.random() * 0.22 - 0.08,
      alpha: Math.random() * 0.45 + 0.05,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.015,
      glowSize: Math.random() * 6 + 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.pulse += p.pulseSpeed
        p.x += p.dx
        p.y += p.dy
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.pulse))

        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowSize)
        gradient.addColorStop(0, `rgba(216, 180, 107, ${a})`)
        gradient.addColorStop(0.5, `rgba(205, 164, 94, ${a * 0.4})`)
        gradient.addColorStop(1, `rgba(216, 180, 107, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.glowSize, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 201, 122, ${Math.min(a * 2, 0.9)})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: 'screen', opacity: 0.65 }}
    />
  )
}
