import styles from "./styles/bottomnav.module.css";

import { BiCandles, BiHomeAlt } from "react-icons/bi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";

import Link from "next/link";

export default function MobileNav_Bottom() {
  return (
    <div className={styles.container}>
      {Links.map((link, i) => {
        return (
          <Link href={link.Link} key={i}>
            <div className={styles.Link}>
              <div>{link.Icon}</div>
              <p>{link.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const Links = [
  {
    name: "Home",
    Link: "/",
    Icon: <BiHomeAlt />,
  },
  {
    name: "Market",
    Link: "/Market",
    Icon: <BiCandles />,
  },
  {
    name: "Trade",
    Link: "/Market/BTC",
    Icon: <RiExchangeDollarLine />,
  },
  {
    name: "Earn",
    Link: "/Earn",
    Icon: <TbPigMoney />,
  },
  {
    name: "Assets",
    Link: "/Assets",
    Icon: <CiWallet />,
  },
];
