"use client"

import * as React from "react"
import { Cell, Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/admin/analise/components/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/admin/analise/components/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/admin/analise/components/select"

export const description = "An interactive pie chart"

const desktopData = [
  { month: "Janeiro", desktop: 106, fill: "var(--color-Janeiro)" },
  { month: "Fevereiro", desktop: 305, fill: "var(--color-Fevereiro)" },
  { month: "Março", desktop: 237, fill: "var(--color-Março)" },
  { month: "Abril", desktop: 173, fill: "var(--color-Abril)" },
  { month: "Maio", desktop: 209, fill: "var(--color-Maio)" },
  { month: "Junho", desktop: 229, fill: "var(--color-Junho)" },
  { month: "Julho", desktop: 259, fill: "var(--color-Julho)" },
  { month: "Agosto", desktop: 309, fill: "var(--color-Agosto)" },
  { month: "Setembro", desktop: 409, fill: "var(--color-Setembro)" },
  { month: "Outubro", desktop: 509, fill: "var(--color-Outubro)" },
  { month: "Novembro", desktop: 609, fill: "var(--color-Novembro)" },
  { month: "Dezembro", desktop: 809, fill: "var(--color-Dezembro)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  Janeiro: {
    label: "Janeiro",
    color: "var(--chart-1)",
  },
  Fevereiro: {
    label: "Fevereiro",
    color: "var(--chart-2)",
  },
  Março: {
    label: "Março",
    color: "var(--chart-3)",
  },
  Abril: {
    label: "Abril",
    color: "var(--chart-4)",
  },
  Maio: {
    label: "Maio",
    color: "var(--chart-5)",
  },
  Junho: {
    label: "Junho",
    color: "var(--chart-6)",
  },
  Julho: {
    label: "Julho",
    color: "var(--chart-7)",
  },
  Agosto: {
    label: "Agosto",
    color: "var(--chart-8)",
  },
  Setembro: {
    label: "Setembro",
    color: "var(--chart-9)",
  },
  Outubro: {
    label: "Outubro",
    color: "var(--chart-10)",
  },
  Novembro: {
    label: "Novembro",
    color: "var(--chart-11)",
  },
  Dezembro: {
    label: "Dezembro",
    color: "var(--chart-12)",
  }


} satisfies ChartConfig

export function ChartPieInteractive() {
  const id = "pie-interactive"
  const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month)

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )
  const months = React.useMemo(() => desktopData.map((item) => item.month), [])

  return (
    <Card data-chart={id} className="flex flex-col h-full">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Gráfico visitantes mensais</CardTitle>

          <CardDescription>Janeiro - Dezembro 2025</CardDescription>
        </div>

      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />

                </g>

              )}
            >
              {desktopData.map((entry) => (
                <Cell key={entry.month} fill={entry.fill} />
              ))}
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {desktopData[activeIndex].desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitantes
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>


      </CardContent>
      <Select value={activeMonth} onValueChange={setActiveMonth} >
        <SelectTrigger
          className="mx-auto h-7 w-[130px] rounded-lg pl-2.5"
          aria-label="Select a value"
        >
          <SelectValue placeholder="Select month" />
        </SelectTrigger>
        <SelectContent align="center" className="rounded-xl">
          {months.map((key) => {
            const config = chartConfig[key as keyof typeof chartConfig]

            if (!config) {
              return null
            }

            return (
              <SelectItem
                key={key}
                value={key}
                className="rounded-lg [&_span]:flex"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-xs"
                    style={{
                      backgroundColor: `var(--color-${key})`,
                    }}
                  />
                  {config?.label}
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </Card>
  )
}
