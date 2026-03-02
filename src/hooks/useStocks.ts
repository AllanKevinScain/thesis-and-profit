import { useQuery } from '@tanstack/react-query'
import { sampleStocks, type Stock } from '../services/stocks'

export function useStocks() {
  return useQuery<Stock[]>({
    queryKey: ['stocks'],
    queryFn: async () => {
      // dados fixos; aqui você poderia buscar de uma API
      await new Promise((r) => setTimeout(r, 200))
      return sampleStocks
    },
    staleTime: 1000 * 60 // 1 minuto
  })
}
