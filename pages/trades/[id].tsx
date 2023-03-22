import TradingViewWidget from "@/components/Tradepage/chart";
import Orderbook from "@/components/Tradepage/orderbook";
import OrderForm from "@/components/Tradepage/orderForm";
import styles from "../../styles/tradesId.module.css"
export default function Home() {
  return (
    <div className={styles.container} style={{display:"flex", width:"100vw"}}>
      <Orderbook />
      <TradingViewWidget />
      <OrderForm/>
    </div>
  );
}
