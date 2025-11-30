"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/admin/analise/components/card"
import { ChartConfig, ChartContainer } from "@/app/admin/analise/components/chart"

export const description = "A radial chart with a custom shape"

const chartData = [
  { browser: "safari", visitors: 1260, fill: "var(--chart-12)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-8)",
  },
} satisfies ChartConfig

export function ChartRadialShape() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gráfico visitantes totais anualmente</CardTitle>
        <CardDescription>2025</CardDescription>
      </CardHeader>
      <CardContent className="my-auto">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={120}
            innerRadius={80}
            outerRadius={140}

          >

            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-[oklch(100%_0.22434_326.114)] last:fill-background"
              polarRadius={[86, 74]}
            />

            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Em alta subindo 5.2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Mostrando o total de visitantes deste ano.
        </div>
      </CardFooter>
    </Card>
  )
}
