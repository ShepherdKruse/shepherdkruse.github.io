"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RefreshCw } from "lucide-react"

export default function AIOptimizationDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [powerLevel, setPowerLevel] = useState(50)
  const [efficiency, setEfficiency] = useState(75)
  const [animationFrame, setAnimationFrame] = useState<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Draw the initial graph
    drawGraph(ctx, canvas, powerLevel, efficiency, isPlaying)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [powerLevel, efficiency, isPlaying, animationFrame])

  const drawGraph = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    power: number,
    eff: number,
    animate: boolean,
  ) => {
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
    ctx.fillText("Thrust Output (kN)", 0, 0)
    ctx.restore()

    // Calculate data points for the graph
    const points = []
    const numPoints = 100
    const baseAmplitude = canvas.height * 0.3
    const frequency = 0.05
    const phaseShift = (Date.now() * 0.001) % (Math.PI * 2)

    for (let i = 0; i < numPoints; i++) {
      const x = 40 + (i / numPoints) * (canvas.width - 80)

      // Base sine wave
      let y = Math.sin(i * frequency + phaseShift) * baseAmplitude

      // Apply power level effect
      y = y * (power / 50)

      // Apply efficiency optimization
      const optimizationFactor = eff / 75
      const noise = ((Math.random() - 0.5) * (100 - eff)) / 10

      y = y * optimizationFactor + noise

      // Invert and position
      y = canvas.height - 40 - y - baseAmplitude * 0.5

      points.push({ x, y })
    }

    // Draw AI optimized line
    ctx.strokeStyle = "#0ea5e9"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
    }

    ctx.stroke()

    // Draw comparison line (non-optimized)
    ctx.strokeStyle = "rgba(255, 100, 100, 0.5)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y + 30)

    for (let i = 1; i < points.length; i++) {
      const noise = Math.random() * 20 - 10
      ctx.lineTo(points[i].x, points[i].y + 30 + noise)
    }

    ctx.stroke()

    // Add legend
    ctx.fillStyle = "#0ea5e9"
    ctx.fillRect(canvas.width - 150, 20, 15, 15)
    ctx.fillStyle = "rgba(255, 100, 100, 0.7)"
    ctx.fillRect(canvas.width - 150, 45, 15, 15)

    ctx.fillStyle = "white"
    ctx.textAlign = "left"
    ctx.fillText("AI-Optimized Thrust", canvas.width - 130, 32)
    ctx.fillText("Standard Engine", canvas.width - 130, 57)

    // Animate if playing
    if (animate) {
      setAnimationFrame(requestAnimationFrame(() => drawGraph(ctx, canvas, power, eff, animate)))
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const resetDemo = () => {
    setPowerLevel(50)
    setEfficiency(75)
    setIsPlaying(false)
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
      setAnimationFrame(null)
    }
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <canvas ref={canvasRef} className="h-[300px] w-full rounded-md bg-black" />
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Thrust Level: {powerLevel}%</label>
            <span className="text-xs text-muted-foreground">AI optimizing fuel geometry</span>
          </div>
          <Slider value={[powerLevel]} min={10} max={100} step={1} onValueChange={(value) => setPowerLevel(value[0])} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Burn Profile Optimization: {efficiency}%</label>
            <span className="text-xs text-muted-foreground">AI customizing thrust curve</span>
          </div>
          <Slider value={[efficiency]} min={30} max={95} step={1} onValueChange={(value) => setEfficiency(value[0])} />
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="sm" onClick={togglePlay}>
            {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button variant="outline" size="sm" onClick={resetDemo}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
