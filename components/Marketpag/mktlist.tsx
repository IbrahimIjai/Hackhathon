import { useState } from "react";
import styles from "./styles/mktlist.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function MktList(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchText(event.target.value);
  };

  const filteredPairs = pairsList.filter((pair) =>
    pair.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Market List</title>
      </Head>
      <div className={styles.header}>
        <h1>Pairs available</h1>
        <div>
          <input
            type="text"
            placeholder="Search pair"
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <div className={styles.cardcontainer}>
        {pairsList.map((pair, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.cardhead}>
                <div className={styles.img_logo}>
                  <Image
                    src={pair.logo}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`${pair.tag} logo`}
                  />
                </div>
                <div>
                  <p>{pair.name}</p>
                  <p>{pair.tag}</p>
                </div>
              </div>

              <div className={styles.chartcontainer}>
                <p>{pair.curPrice}</p>
                <div className={styles.img_chart}>
                  <Image
                    src={pair.chart}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`${pair.tag} logo`}
                  />
                </div>
              </div>

              <div className={styles.btn}>
                <Link href="/trade">
                  <button>Trade now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface Pair {
  name: string;
  tag: string;
  curPrice: string;
  chart: string;
  logo: string;
}

const pairsList: Pair[] = [
  {
    name: "BTC/USDT",
    tag: "Bitcoin",
    curPrice: "$40, 000",
    chart: "/demoChart.png",
    logo: "/btc.png",
  },
  {
    name: "OKC/USDT",
    tag: "Okex",
    curPrice: "$40",
    chart: "/demoChart.png",
    logo: "/btc.png",
  },
  {
    name: "ETH/USDT",
    tag: "Ethereum",
    curPrice: "$40, 000",
    chart: "/demoChart.png",
    logo: "/btc.png",
  },
  {
    name: "BNB/USDT",
    tag: "Binance coin",
    curPrice: "$40, 000",
    chart: "/demoChart.png",
    logo: "/btc.png",
  },
  {
    name: "LTC/USDT",
    tag: "Litecoin",
    curPrice: "$40, 000",
    chart: "/demoChart.png",
    logo: "/btc.png",
  },
  {
    name: "TRX/USDT",
    tag: "Tron",
    curPrice: "$40, 000",
    chart: "/demoChart.png",
    logo: "/btc.png",
  },
];
