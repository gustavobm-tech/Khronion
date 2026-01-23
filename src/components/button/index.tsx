import styles from "./index.module.css";

import { TimerIcon } from "lucide-react";

export const Button = () => {
  return (
    <>
      <button className={styles.button}>
        <TimerIcon />
      </button>
    </>
  );
};
