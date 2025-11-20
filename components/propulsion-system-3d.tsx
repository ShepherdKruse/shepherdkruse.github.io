"use client"

import { useEffect, useRef } from "react"

export default function PropulsionSystem3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Animation variables
    let animationFrame: number
    let rotation = 0

    // Draw the propulsion system
    const drawPropulsionSystem = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set center point
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw background glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 200)
      gradient.addColorStop(0, "rgba(0, 150, 255, 0.3)")
      gradient.addColorStop(1, "rgba(0, 0, 20, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Save context for rotation
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)
      ctx.translate(-centerX, -centerY)

      // Draw 3D printed engine body (more geometric/angular to represent 3D printing)
      ctx.fillStyle = "#1e293b"
      ctx.beginPath()

      // Hexagonal engine body to represent 3D printed structure
      const sides = 6
      const radius = 80
      const angleOffset = Math.PI / sides

      ctx.moveTo(centerX + radius * Math.cos(angleOffset), centerY + radius * Math.sin(angleOffset))

      for (let i = 1; i <= sides; i++) {
        const angle = (i * 2 * Math.PI) / sides + angleOffset
        ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
      }

      ctx.closePath()
      ctx.fill()

      // Draw engine details - layer lines to represent 3D printing
      ctx.strokeStyle = "#475569"
      ctx.lineWidth = 1

      for (let i = 0; i < 5; i++) {
        const layerRadius = radius - i * 10
        ctx.beginPath()
        ctx.moveTo(centerX + layerRadius * Math.cos(angleOffset), centerY + layerRadius * Math.sin(angleOffset))

        for (let j = 1; j <= sides; j++) {
          const angle = (j * 2 * Math.PI) / sides + angleOffset
          ctx.lineTo(centerX + layerRadius * Math.cos(angle), centerY + layerRadius * Math.sin(angle))
        }

        ctx.closePath()
        ctx.stroke()
      }

      // Draw fuel grain (inner part)
      ctx.fillStyle = "#334155"
      ctx.beginPath()

      // Star-shaped fuel grain (common in solid rockets)
      const innerRadius = 40
      const points = 5
      const outerRadius = 25

      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? innerRadius : outerRadius
        const angle = (i * Math.PI) / points
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.closePath()
      ctx.fill()

      // Draw fuel grain glow
      const fuelGradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 40)
      fuelGradient.addColorStop(0, "rgba(255, 165, 0, 0.8)")
      fuelGradient.addColorStop(1, "rgba(255, 165, 0, 0)")

      ctx.fillStyle = fuelGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2)
      ctx.fill()

      // Draw nozzle
      ctx.fillStyle = "#334155"
      ctx.beginPath()
      ctx.moveTo(centerX - 40, centerY + 50)
      ctx.lineTo(centerX + 40, centerY + 50)
      ctx.lineTo(centerX + 60, centerY + 100)
      ctx.lineTo(centerX - 60, centerY + 100)
      ctx.closePath()
      ctx.fill()

      // Draw exhaust
      const exhaustGradient = ctx.createLinearGradient(centerX, centerY + 100, centerX, centerY + 200)
      exhaustGradient.addColorStop(0, "rgba(255, 165, 0, 0.8)")
      exhaustGradient.addColorStop(0.5, "rgba(255, 100, 0, 0.5)")
      exhaustGradient.addColorStop(1, "rgba(255, 50, 0, 0)")

      ctx.fillStyle = exhaustGradient
      ctx.beginPath()
      ctx.moveTo(centerX - 60, centerY + 100)
      ctx.lineTo(centerX + 60, centerY + 100)
      ctx.lineTo(centerX + 30, centerY + 200)
      ctx.lineTo(centerX - 30, centerY + 200)
      ctx.closePath()
      ctx.fill()

      // Draw AI optimization indicators
      ctx.fillStyle = "#0f172a"
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3
        const x = centerX + Math.cos(angle) * 100
        const y = centerY + Math.sin(angle) * 50

        ctx.beginPath()
        ctx.roundRect(x - 15, y - 15, 30, 30, 5)
        ctx.fill()

        // AI module lights
        const blinkRate = Math.sin(Date.now() * 0.005 + i) * 0.5 + 0.5
        ctx.fillStyle = `rgba(14, 165, 233, ${blinkRate})`
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw connecting lines to represent data flow
      ctx.strokeStyle = "rgba(14, 165, 233, 0.5)"
      ctx.lineWidth = 1

      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3
        const x = centerX + Math.cos(angle) * 100
        const y = centerY + Math.sin(angle) * 50

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()

        // Add data flow animation
        const time = Date.now() * 0.001
        const flowPos = time % 1
        const flowX = centerX + Math.cos(angle) * (100 * flowPos)
        const flowY = centerY + Math.sin(angle) * (50 * flowPos)

        ctx.fillStyle = "rgba(14, 165, 233, 0.8)"
        ctx.beginPath()
        ctx.arc(flowX, flowY, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Restore context
      ctx.restore()

      // Update rotation
      rotation += 0.005

      // Continue animation
      animationFrame = requestAnimationFrame(drawPropulsionSystem)
    }

    // Start animation
    drawPropulsionSystem()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full rounded-lg bg-black" />
}
