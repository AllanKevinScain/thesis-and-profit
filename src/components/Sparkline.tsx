import type { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'

type Props = { data: number[]; color?: string }

export default function Sparkline({ data, color = '#22b33f' }: Props) {
  const options: ApexOptions = {
    chart: { sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 2 },
    tooltip: { enabled: false },
    colors: [color]
  }
  return <Chart options={options} series={[{ data }]} type="area" height={40} />
}
