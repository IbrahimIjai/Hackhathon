import Logo from "../Logo/Logo";
import styles from "./styles/desktopNav.module.css";
import Link from "next/link";
export default function DesktopNav() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
             <Logo />
        </div>
      <div className={styles.linksContainer}>
        {Links.map((link, i) => {
          return (
            <Link key={i} href={link.Link}>
              <p className={styles.links}>{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div className={styles.connect}>
        <p>Connect</p>
      </div>
    </div>
  );
}

const Links = [
  {
    name: "Market",
    Link: "/Market",
  },
  {
    name: "Trade",
    Link: "/Market/BTC",
  },
  {
    name: "Earn",
    Link: "/Earn",
  },
  {
    name: "Assets",
    Link: "/Assets",
  },
];
