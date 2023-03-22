import styles from "./styles/heros.module.css";

export default function Heros() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.headtext}>
          The Next Generation of <br />
          <span className={styles.headtext2}>
            <span> Defi</span> on OKX Chain
          </span>
        </h1>
        <p className={styles.desc}>
          Unbranded is dedicated in developing onChain trading experience and
          aims to <br /> provide users of defi the experience of real world
          trading
        </p>

        <button>Start trading now</button>
      </div>
    </div>
  );
}
