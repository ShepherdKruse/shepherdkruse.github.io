"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TechnologyComparison() {
  const propulsionSystems = [
    {
      type: "Delta-V 3D Printed Engine",
      customization: "High",
      productionTime: "Hours",
      thrustOptimization: "AI-Driven",
      missionSpecific: "Yes",
      rapidDeployment: "Yes",
      costEfficiency: "High",
      highlight: true,
    },
    {
      type: "Traditional Solid Rocket",
      customization: "Low",
      productionTime: "Weeks",
      thrustOptimization: "Manual",
      missionSpecific: "No",
      rapidDeployment: "No",
      costEfficiency: "Medium",
      highlight: false,
    },
    {
      type: "Liquid Propulsion",
      customization: "Medium",
      productionTime: "Months",
      thrustOptimization: "Manual",
      missionSpecific: "Limited",
      rapidDeployment: "No",
      costEfficiency: "Low",
      highlight: false,
    },
    {
      type: "Hybrid Rocket",
      customization: "Medium",
      productionTime: "Weeks",
      thrustOptimization: "Limited",
      missionSpecific: "Limited",
      rapidDeployment: "Limited",
      costEfficiency: "Medium",
      highlight: false,
    },
  ]

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Propulsion System</TableHead>
            <TableHead>Customization</TableHead>
            <TableHead>Production Time</TableHead>
            <TableHead>Thrust Optimization</TableHead>
            <TableHead>Mission Specific</TableHead>
            <TableHead>Rapid Deployment</TableHead>
            <TableHead>Cost Efficiency</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {propulsionSystems.map((system) => (
            <TableRow key={system.type} className={system.highlight ? "bg-primary/10" : ""}>
              <TableCell className={`font-medium ${system.highlight ? "text-primary" : ""}`}>{system.type}</TableCell>
              <TableCell>{system.customization}</TableCell>
              <TableCell>{system.productionTime}</TableCell>
              <TableCell>{system.thrustOptimization}</TableCell>
              <TableCell>{system.missionSpecific}</TableCell>
              <TableCell>{system.rapidDeployment}</TableCell>
              <TableCell>{system.costEfficiency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
