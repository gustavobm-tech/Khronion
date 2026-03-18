import { HistoryIcon, HomeIcon, Settings, Sun } from "lucide-react";
import styles from "./styles.module.css";

export const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <a className={styles.menuLink} href="#">
          <HomeIcon />
        </a>
        <a className={styles.menuLink} href="#">
          <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#">
          <Settings />
        </a>
        <a className={styles.menuLink} href="#">
          <Sun />
        </a>
      </div>
    </>
  );
};
