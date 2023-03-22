import BuyOrder from "./orderbookcomp/buyorder";
import SellOrder from "./orderbookcomp/sellorder";
import styles from "./styles/orderbook.module.css";

export default function Orderbook() {
  return (
    <div className={styles.container}>
      <BuyOrder />
      <SellOrder />
    </div>
  );
}
