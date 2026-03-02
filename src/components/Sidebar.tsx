
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <nav className="space-y-2">
        <div className="text-sm font-medium text-gray-700">Visão Geral</div>
        <a className="block py-2 px-3 rounded hover:bg-gray-50">Ações</a>
        <a className="block py-2 px-3 rounded hover:bg-gray-50">Carteira</a>
      </nav>
    </aside>
  )
}
