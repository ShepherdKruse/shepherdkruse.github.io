"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, RotateCw } from "lucide-react"

export default function MissionSpecificGenerator() {
  const [targetDistance, setTargetDistance] = useState<number>(100)
  const [timeToTarget, setTimeToTarget] = useState<number>(60)
  const [thrustProfile, setThrustProfile] = useState<string>("Flat")
  const [platformType, setPlatformType] = useState<string>("Tube Launch")
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modelCanvasRef = useRef<HTMLCanvasElement>(null)

  // Handle generate button click
  const handleGenerate = () => {
    setIsGenerating(true)

    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  // Draw thrust curve based on inputs
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background
    ctx.fillStyle = "#0f1729"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 1

    // Vertical grid lines
    for (let x = 50; x < canvas.width; x += 50) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    // Horizontal grid lines
    for (let y = 50; y < canvas.height; y += 50) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
    ctx.lineWidth = 2

    // X-axis
    ctx.beginPath()
    ctx.moveTo(0, canvas.height - 40)
    ctx.lineTo(canvas.width, canvas.height - 40)
    ctx.stroke()

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(40, 0)
    ctx.lineTo(40, canvas.height)
    ctx.stroke()

    // Draw axis labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"

    // X-axis label
    ctx.fillText("Time (s)", canvas.width / 2, canvas.height - 10)

    // Y-axis label
    ctx.save()
    ctx.translate(15, canvas.height / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.fillText("Thrust (N)", 0, 0)
    ctx.restore()

    // Calculate thrust curve based on inputs
    const points = []
    const numPoints = 100
    const maxThrust = canvas.height * 0.7

    for (let i = 0; i < numPoints; i++) {
      const x = 40 + (i / numPoints) * (canvas.width - 80)
      let y = 0

      const normalizedTime = i / numPoints

      // Different thrust profiles
      switch (thrustProfile) {
        case "Flat":
          y = maxThrust * 0.6
          break
        case "Progressive":
          y = maxThrust * normalizedTime * 0.8
          break
        case "Regressive":
          y = maxThrust * (1 - normalizedTime) * 0.8
          break
        case "Custom":
          // Simulate a custom profile (bell curve)
          y = maxThrust * Math.sin(normalizedTime * Math.PI) * 0.7
          break
        default:
          y = maxThrust * 0.6
      }

      // Adjust based on target distance and time
      const distanceFactor = targetDistance / 100
      const timeFactor = 60 / timeToTarget

      y = y * distanceFactor * timeFactor

      // Invert and position (canvas y is inverted)
      y = canvas.height - 40 - y

      points.push({ x, y })
    }

    // Draw thrust curve
    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
    }

    ctx.stroke()

    // Add glow effect
    ctx.shadowColor = "#0ea5e9"
    ctx.shadowBlur = 10
    ctx.strokeStyle = "rgba(14, 165, 233, 0.7)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
    }

    ctx.stroke()
    ctx.shadowBlur = 0
  }, [targetDistance, timeToTarget, thrustProfile, platformType])

  // Draw 3D model placeholder
  useEffect(() => {
    const canvas = modelCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background
    ctx.fillStyle = "#0f1729"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid for reference
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 1

    // Grid lines
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Center point
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Draw a simplified fuel grain based on selected profile
    ctx.save()
    ctx.translate(centerX, centerY)

    // Outer casing
    ctx.strokeStyle = "#475569"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(0, 0, 80, 0, Math.PI * 2)
    ctx.stroke()

    // Inner grain pattern
    ctx.fillStyle = "#334155"

    switch (thrustProfile) {
      case "Flat":
        // Circular port
        ctx.beginPath()
        ctx.arc(0, 0, 30, 0, Math.PI * 2)
        ctx.fill()
        break
      case "Progressive":
        // Star shape with more points
        drawStar(ctx, 0, 0, 50, 20, 8)
        break
      case "Regressive":
        // Wagon wheel
        drawWagonWheel(ctx, 0, 0, 60, 20, 6)
        break
      case "Custom":
        // Complex shape
        drawCustomShape(ctx, 0, 0, 60)
        break
    }

    // Add glow effect
    ctx.shadowColor = "#0ea5e9"
    ctx.shadowBlur = 15
    ctx.strokeStyle = "rgba(14, 165, 233, 0.7)"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(0, 0, 80, 0, Math.PI * 2)
    ctx.stroke()

    // Add platform-specific elements
    switch (platformType) {
      case "Tube Launch":
        // Add tube launch elements
        ctx.strokeStyle = "#64748b"
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.rect(-90, -15, 180, 30)
        ctx.stroke()
        break
      case "Ship VLS":
        // Add VLS elements
        ctx.strokeStyle = "#64748b"
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(-90, -90)
        ctx.lineTo(-90, 90)
        ctx.lineTo(90, 90)
        ctx.lineTo(90, -90)
        ctx.closePath()
        ctx.stroke()
        break
      case "Drone Boost":
        // Add drone elements
        ctx.strokeStyle = "#64748b"
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(-100, 0)
        ctx.lineTo(100, 0)
        ctx.moveTo(0, -100)
        ctx.lineTo(0, 100)
        ctx.stroke()
        break
    }

    ctx.restore()
  }, [thrustProfile, platformType])

  // Helper function to draw a star shape
  const drawStar = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    outerRadius: number,
    innerRadius: number,
    points: number,
  ) => {
    ctx.beginPath()

    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius
      const angle = (i * Math.PI) / points
      const x = cx + radius * Math.cos(angle)
      const y = cy + radius * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    ctx.closePath()
    ctx.fill()
  }

  // Helper function to draw a wagon wheel shape
  const drawWagonWheel = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    outerRadius: number,
    innerRadius: number,
    spokes: number,
  ) => {
    ctx.beginPath()
    ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2)
    ctx.fill()

    for (let i = 0; i < spokes; i++) {
      const angle = (i * Math.PI * 2) / spokes
      const x1 = cx + innerRadius * Math.cos(angle)
      const y1 = cy + innerRadius * Math.sin(angle)
      const x2 = cx + outerRadius * Math.cos(angle)
      const y2 = cy + outerRadius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.lineWidth = 10
      ctx.stroke()
    }
  }

  // Helper function to draw a custom shape
  const drawCustomShape = (ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number) => {
    ctx.beginPath()

    // Draw a complex shape
    for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
      const r = radius * (0.8 + 0.2 * Math.sin(angle * 6))
      const x = cx + r * Math.cos(angle)
      const y = cy + r * Math.sin(angle)

      if (angle === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    ctx.closePath()
    ctx.fill()
  }

  return (
    <div className="w-full rounded-lg border border-border/40 bg-black/80 p-6 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-white">Generate Your Mission-Specific Fuel Grain</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left side - Input panel */}
        <div className="space-y-6 rounded-lg border border-border/40 bg-background/30 p-6 backdrop-blur">
          <h3 className="mb-4 text-lg font-medium text-primary">Mission Parameters</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="target-distance" className="text-sm font-medium text-foreground">
                Target Distance (km)
              </Label>
              <Input
                id="target-distance"
                type="number"
                min="1"
                max="1000"
                value={targetDistance}
                onChange={(e) => setTargetDistance(Number(e.target.value))}
                className="border-primary/20 bg-background/50 focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time-to-target" className="text-sm font-medium text-foreground">
                Desired Time to Target (sec)
              </Label>
              <Input
                id="time-to-target"
                type="number"
                min="1"
                max="300"
                value={timeToTarget}
                onChange={(e) => setTimeToTarget(Number(e.target.value))}
                className="border-primary/20 bg-background/50 focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thrust-profile" className="text-sm font-medium text-foreground">
                Thrust Profile
              </Label>
              <Select value={thrustProfile} onValueChange={setThrustProfile}>
                <SelectTrigger
                  id="thrust-profile"
                  className="border-primary/20 bg-background/50 focus:border-primary focus:ring-primary"
                >
                  <SelectValue placeholder="Select thrust profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Flat">Flat</SelectItem>
                  <SelectItem value="Progressive">Progressive</SelectItem>
                  <SelectItem value="Regressive">Regressive</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform-type" className="text-sm font-medium text-foreground">
                Platform Type
              </Label>
              <Select value={platformType} onValueChange={setPlatformType}>
                <SelectTrigger
                  id="platform-type"
                  className="border-primary/20 bg-background/50 focus:border-primary focus:ring-primary"
                >
                  <SelectValue placeholder="Select platform type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tube Launch">Tube Launch</SelectItem>
                  <SelectItem value="Ship VLS">Ship VLS</SelectItem>
                  <SelectItem value="Drone Boost">Drone Boost</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Right side - Visualization */}
        <div className="space-y-6">
          <div className="rounded-lg border border-border/40 bg-background/30 p-4 backdrop-blur">
            <h3 className="mb-2 text-sm font-medium text-primary">Thrust Curve</h3>
            <canvas ref={canvasRef} className="h-[150px] w-full rounded-md" />
          </div>

          <div className="rounded-lg border border-border/40 bg-background/30 p-4 backdrop-blur">
            <h3 className="mb-2 text-sm font-medium text-primary">Fuel Grain Geometry</h3>
            <canvas ref={modelCanvasRef} className="h-[150px] w-full rounded-md" />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Generate STL File
              </>
            )}
          </Button>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Note: This is a non-energetic simulation. Real-world testing pending funding.
      </p>
    </div>
  )
}
