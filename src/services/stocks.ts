export type Stock = {
  symbol: string
  name: string
  price: number
  change: number
  history: number[] // para sparkline
}

export const sampleStocks: Stock[] = [
  { symbol: 'PETR4', name: 'Petrobras PN', price: 28.34, change: 1.8, history: [26,27,27.5,28,28.2,28.34] },
  { symbol: 'VALE3', name: 'Vale ON', price: 85.12, change: -0.6, history: [86,85.8,85.5,85.3,85.2,85.12] },
  { symbol: 'ITUB4', name: 'Itaú PN', price: 28.90, change: 0.4, history: [28.2,28.4,28.6,28.7,28.8,28.9] },
  { symbol: 'BBDC4', name: 'Bradesco PN', price: 12.45, change: 0.2, history: [12.1,12.2,12.3,12.4,12.45,12.45] },
  { symbol: 'ABEV3', name: 'Ambev ON', price: 12.10, change: -0.1, history: [12.3,12.25,12.2,12.15,12.12,12.1] }
]
