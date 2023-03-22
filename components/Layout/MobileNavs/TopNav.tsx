import styles from "./styles/topnav.module.css";
import Logo from "@/components/Logo/Logo";
export default function MobileNav_Top() {
  return (
    <div className={styles.container}>
      <div>
        <Logo />
      </div>
      <div className={styles.connect}>
        <p>Connect</p>
      </div>
    </div>
  );
}
