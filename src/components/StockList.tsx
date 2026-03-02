import { useQuery } from "@tanstack/react-query";
import { useBrapi } from "../hooks/useBrapi";
import { useStocks } from "../hooks/useStocks";
import StockCard from "./StockCard";

export default function StockList() {
  const { data: stocks, isLoading } = useStocks();
  const { getPETR4 } = useBrapi();

  const { data } = useQuery({
    queryKey: ["petr4"],
    queryFn: getPETR4,
  });
  console.log("🚀 ~ StockList ~ data:", data);

  if (isLoading) return <div className="p-4">Carregando...</div>;

  return (
    <div className="space-y-3">
      {stocks?.map((s) => (
        <StockCard key={s.symbol} stock={s} />
      ))}
    </div>
  );
}
