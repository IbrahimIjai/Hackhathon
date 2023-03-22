import styles from "./styles.module.css";

export default function SellOrder() {
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
              <p style={{ color: "red" }}>{dat.price}</p>
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
    price: 23500,
    totalAmount: 2.1,
  },
  {
    price: 23000,
    totalAmount: 2.1,
  },
  {
    price: 22500,
    totalAmount: 2.1,
  },
  {
    price: 22000,
    totalAmount: 2.1,
  },
  {
    price: 21500,
    totalAmount: 2.1,
  },
  {
    price: 21000,
    totalAmount: 2.1,
  },
  {
    price: 20500,
    totalAmount: 2.1,
  },
  {
    price: 20000,
    totalAmount: 2.1,
  },
  {
    price: 19500,
    totalAmount: 2.1,
  },
  {
    price: 19000,
    totalAmount: 2.1,
  },
];
