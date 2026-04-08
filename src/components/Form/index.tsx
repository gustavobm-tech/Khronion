import { SquarePlayIcon } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.css";

export const Form = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <label htmlFor="click">Task</label>
          <input id="click"></input>
        </div>
        <div className={styles.formRow}>
          <p> Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={styles.formRow}>
          <Button icon={SquarePlayIcon} />
        </div>
      </form>
    </>
  );
};
