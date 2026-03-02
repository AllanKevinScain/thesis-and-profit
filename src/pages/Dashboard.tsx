import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import StockList from '../components/StockList'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Ações brasileiras (fixas)</h2>
            <p className="text-sm text-gray-500">Lista de exemplo com tema verde</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <StockList />
            </div>

            <div className="col-span-1 bg-white p-4 rounded-md shadow-sm">
              <h3 className="font-semibold mb-3">Resumo</h3>
              <p className="text-sm text-gray-600">Aqui você pode colocar gráficos maiores, indicadores e filtros.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
