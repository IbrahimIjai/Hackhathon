import TradingViewWidget from "@/components/Tradepage/chart";
import Orderbook from "@/components/Tradepage/orderbook";

export default function Home() {
  return (
    <>
      <Orderbook />
        <TradingViewWidget />
    </>
  );
}
