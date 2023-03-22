import styles from "./styles/analytics.module.css";

export default function Analytics() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tvl}>
          <div className={styles.trade}>
            <h2>$10, 000, O00</h2>
            <p>Total Locked Value in Trades</p>
          </div>
          <div className={styles.vault}>
            <h2>$10, 000, O00</h2>
            <p>Total Locked Value in Vaults</p>
          </div>
        </div>
        <div className={styles.ads}>
          <h3>OPEN ORDERS ON <span>UNBRANDED</span></h3>
          <p>
            The first official trading and open order platform on OKX chain
            where users can easily open an order to buy an asset at their
            desired price, Just simply view the chart and open an order!
          </p>
        </div>
      </div>
    </div>
  );
}
