"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2025-04-01", Clicks: 222, Vendas: 150 },
  { date: "2025-04-02", Clicks: 97, Vendas: 180 },
  { date: "2025-04-03", Clicks: 167, Vendas: 120 },
  { date: "2025-04-04", Clicks: 242, Vendas: 260 },
  { date: "2025-04-05", Clicks: 373, Vendas: 290 },
  { date: "2025-04-06", Clicks: 301, Vendas: 340 },
  { date: "2025-04-07", Clicks: 245, Vendas: 180 },
  { date: "2025-04-08", Clicks: 409, Vendas: 320 },
  { date: "2025-04-09", Clicks: 59, Vendas: 110 },
  { date: "2025-04-10", Clicks: 261, Vendas: 190 },
  { date: "2025-04-11", Clicks: 327, Vendas: 350 },
  { date: "2025-04-12", Clicks: 292, Vendas: 210 },
  { date: "2025-04-13", Clicks: 342, Vendas: 380 },
  { date: "2025-04-14", Clicks: 137, Vendas: 220 },
  { date: "2025-04-15", Clicks: 120, Vendas: 170 },
  { date: "2025-04-16", Clicks: 138, Vendas: 190 },
  { date: "2025-04-17", Clicks: 446, Vendas: 360 },
  { date: "2025-04-18", Clicks: 364, Vendas: 410 },
  { date: "2025-04-19", Clicks: 243, Vendas: 180 },
  { date: "2025-04-20", Clicks: 89, Vendas: 150 },
  { date: "2025-04-21", Clicks: 137, Vendas: 200 },
  { date: "2025-04-22", Clicks: 224, Vendas: 170 },
  { date: "2025-04-23", Clicks: 138, Vendas: 230 },
  { date: "2025-04-24", Clicks: 387, Vendas: 290 },
  { date: "2025-04-25", Clicks: 215, Vendas: 250 },
  { date: "2025-04-26", Clicks: 75, Vendas: 130 },
  { date: "2025-04-27", Clicks: 383, Vendas: 420 },
  { date: "2025-04-28", Clicks: 122, Vendas: 180 },
  { date: "2025-04-29", Clicks: 315, Vendas: 240 },
  { date: "2025-04-30", Clicks: 454, Vendas: 380 },
  { date: "2025-05-01", Clicks: 165, Vendas: 220 },
  { date: "2025-05-02", Clicks: 293, Vendas: 310 },
  { date: "2025-05-03", Clicks: 247, Vendas: 190 },
  { date: "2025-05-04", Clicks: 385, Vendas: 420 },
  { date: "2025-05-05", Clicks: 481, Vendas: 390 },
  { date: "2025-05-06", Clicks: 498, Vendas: 520 },
  { date: "2025-05-07", Clicks: 388, Vendas: 300 },
  { date: "2025-05-08", Clicks: 149, Vendas: 210 },
  { date: "2025-05-09", Clicks: 227, Vendas: 180 },
  { date: "2025-05-10", Clicks: 293, Vendas: 330 },
  { date: "2025-05-11", Clicks: 335, Vendas: 270 },
  { date: "2025-05-12", Clicks: 197, Vendas: 240 },
  { date: "2025-05-13", Clicks: 197, Vendas: 160 },
  { date: "2025-05-14", Clicks: 448, Vendas: 490 },
  { date: "2025-05-15", Clicks: 473, Vendas: 380 },
  { date: "2025-05-16", Clicks: 338, Vendas: 400 },
  { date: "2025-05-17", Clicks: 499, Vendas: 420 },
  { date: "2025-05-18", Clicks: 315, Vendas: 350 },
  { date: "2025-05-19", Clicks: 235, Vendas: 180 },
  { date: "2025-05-20", Clicks: 177, Vendas: 230 },
  { date: "2025-05-21", Clicks: 82, Vendas: 140 },
  { date: "2025-05-22", Clicks: 81, Vendas: 120 },
  { date: "2025-05-23", Clicks: 252, Vendas: 290 },
  { date: "2025-05-24", Clicks: 294, Vendas: 220 },
  { date: "2025-05-25", Clicks: 201, Vendas: 250 },
  { date: "2025-05-26", Clicks: 213, Vendas: 170 },
  { date: "2025-05-27", Clicks: 420, Vendas: 460 },
  { date: "2025-05-28", Clicks: 233, Vendas: 190 },
  { date: "2025-05-29", Clicks: 78, Vendas: 130 },
  { date: "2025-05-30", Clicks: 340, Vendas: 280 },
  { date: "2025-05-31", Clicks: 178, Vendas: 230 },
  { date: "2025-06-01", Clicks: 178, Vendas: 200 },
  { date: "2025-06-02", Clicks: 470, Vendas: 410 },
  { date: "2025-06-03", Clicks: 103, Vendas: 160 },
  { date: "2025-06-04", Clicks: 439, Vendas: 380 },
  { date: "2025-06-05", Clicks: 88, Vendas: 140 },
  { date: "2025-06-06", Clicks: 294, Vendas: 250 },
  { date: "2025-06-07", Clicks: 323, Vendas: 370 },
  { date: "2025-06-08", Clicks: 385, Vendas: 320 },
  { date: "2025-06-09", Clicks: 438, Vendas: 480 },
  { date: "2025-06-10", Clicks: 155, Vendas: 200 },
  { date: "2025-06-11", Clicks: 92, Vendas: 150 },
  { date: "2025-06-12", Clicks: 492, Vendas: 420 },
  { date: "2025-06-13", Clicks: 81, Vendas: 130 },
  { date: "2025-06-14", Clicks: 426, Vendas: 380 },
  { date: "2025-06-15", Clicks: 307, Vendas: 350 },
  { date: "2025-06-16", Clicks: 371, Vendas: 310 },
  { date: "2025-06-17", Clicks: 475, Vendas: 520 },
  { date: "2025-06-18", Clicks: 107, Vendas: 170 },
  { date: "2025-06-19", Clicks: 341, Vendas: 290 },
  { date: "2025-06-20", Clicks: 408, Vendas: 450 },
  { date: "2025-06-21", Clicks: 169, Vendas: 210 },
  { date: "2025-06-22", Clicks: 317, Vendas: 270 },
  { date: "2025-06-23", Clicks: 480, Vendas: 530 },
  { date: "2025-06-24", Clicks: 132, Vendas: 180 },
  { date: "2025-06-25", Clicks: 141, Vendas: 190 },
  { date: "2025-06-26", Clicks: 434, Vendas: 380 },
  { date: "2025-06-27", Clicks: 448, Vendas: 490 },
  { date: "2025-06-28", Clicks: 149, Vendas: 200 },
  { date: "2025-06-29", Clicks: 103, Vendas: 160 },
  { date: "2025-06-30", Clicks: 446, Vendas: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",

  },
  Clicks: {
    label: "Clicks",
    color: "var(--color-chart-interactive-clicks)",
  },
  Vendas: {
    label: "Vendas",
    color: "var(--color-chart-interactive-vendas)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const lastDate = new Date(chartData[chartData.length - 1].date);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    let daysToSubtract = 90;
    if (timeRange === "30d") daysToSubtract = 30;
    else if (timeRange === "7d") daysToSubtract = 7;

    const startDate = new Date(lastDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    return date >= startDate;
  });


  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Gráfico de vendas</CardTitle>
          <CardDescription>
            Mostrando as conversões de clicks pra vendas.
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex cursor-pointer"
            aria-label="Selecione um valor"
          >
            <SelectValue placeholder="Últimos 90 dias" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Últimos 90 dias
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Últimos 30 dias
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 dias
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillClicks" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-chart-interactive-clicks)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-chart-interactive-clicks)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillVendas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Vendas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Vendas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)

                // pega só o mês abreviado em pt-BR, ex: "abr."
                const month = date.toLocaleDateString("pt-BR", {
                  month: "short",
                })

                // remove o ponto final e coloca inicial maiúscula
                const cleanMonth =
                  month.charAt(0).toUpperCase() +
                  month.slice(1).replace(".", "")

                const day = date.getDate()

                return `${day} - ${cleanMonth}` // "10 Abr", "2 Mai", "4 Jun"
              }}

            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      month: "long",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Vendas"
              type="natural"
              fill="url(#fillVendas)"
              stroke="var(--color-Vendas)"
              stackId="a"
            />
            <Area
              dataKey="Clicks"
              type="natural"
              fill="url(#fillClicks)"
              stroke="var(--color-Clicks)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
