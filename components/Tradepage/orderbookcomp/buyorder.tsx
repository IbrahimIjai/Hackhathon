import styles from "./styles.module.css";
export default function BuyOrder() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Price(usdt)</p>
        <p>Total amount</p>
      </div>
      <div>
        {_data.map((dat, i) => {
          return (
            <div className={styles.orders} key={i}>
              <p style={{ color: "green" }}>{dat.price}</p>
              <p>{dat.totalAmount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface data {
  price: number;
  totalAmount: number;
}

const _data: data[] = [
  {
    price: 20000,
    totalAmount: 2.1,
  },
  {
    price: 19800,
    totalAmount: 2.1,
  },
  {
    price: 19700,
    totalAmount: 2.1,
  },
  {
    price: 19600,
    totalAmount: 2.1,
  },
  {
    price: 19500,
    totalAmount: 2.1,
  },
  {
    price: 19400,
    totalAmount: 2.1,
  },
  {
    price: 19300,
    totalAmount: 2.1,
  },
  {
    price: 19200,
    totalAmount: 2.1,
  },
  {
    price: 19100,
    totalAmount: 2.1,
  },
  {
    price: 19000,
    totalAmount: 2.1,
  },
];
