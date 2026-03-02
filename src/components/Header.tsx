import { LucideMenu } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md bg-green-50 text-brand-600"><LucideMenu /></button>
        <h1 className="text-lg font-semibold text-brand-600">Dashboard Bolsa BR</h1>
      </div>
      <div className="text-sm text-gray-600">Tema verde • Exemplo</div>
    </header>
  )
}
