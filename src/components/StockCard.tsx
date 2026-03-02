import type { Stock } from '../services/stocks'
import Sparkline from './Sparkline'
import { twMerge } from 'tailwind-merge'

export default function StockCard({ stock }: { stock: Stock }) {
  const up = stock.change >= 0
  return (
    <div className="bg-white p-4 rounded-md shadow-sm flex items-center justify-between">
      <div>
        <div className="text-sm font-semibold">{stock.symbol} <span className="text-xs text-gray-500">• {stock.name}</span></div>
        <div className="mt-1 flex items-baseline gap-3">
          <div className="text-lg font-bold">R$ {stock.price.toFixed(2)}</div>
          <div className={twMerge('text-sm font-medium', up ? 'text-green-600' : 'text-red-600')}>
            {up ? '+' : ''}{stock.change}%
          </div>
        </div>
      </div>
      <div className="w-32">
        <Sparkline data={stock.history} color={up ? '#16a34a' : '#ef4444'} />
      </div>
    </div>
  )
}
