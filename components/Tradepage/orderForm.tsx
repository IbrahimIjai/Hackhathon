import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./styles/orderbook.module.css";
type OrderFormData = {
  type: "buy" | "sell";
  price: number;
  amount: number;
};

export default function OrderForm() {
  const { register, handleSubmit, formState } = useForm<OrderFormData>();
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy");

  const onSubmit = (data: OrderFormData) => {
    console.log(data);
  };

  const toggleOrderType = () => {
    setOrderType(orderType === "buy" ? "sell" : "buy");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>{orderType === "buy" ? "Buy Order" : "Sell Order"}</h2>
      <div className={styles.field}>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          {...register("price", { required: true })}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          {...register("amount", { required: true })}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="type">Type:</label>
        <div className={styles.toggle}>
          <button
            type="button"
            className={`${styles.button} ${
              orderType === "buy" ? styles.active : ""
            }`}
            onClick={toggleOrderType}
          >
            Buy
          </button>
          <button
            type="button"
            className={`${styles.button} ${
              orderType === "sell" ? styles.active : ""
            }`}
            onClick={toggleOrderType}
          >
            Sell
          </button>
        </div>
      </div>
      <button type="submit" disabled={formState.isSubmitting}>
        Place Order
      </button>
    </form>
  );
}
