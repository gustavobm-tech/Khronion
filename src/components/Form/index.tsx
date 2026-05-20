import { CirclePlayIcon } from "lucide-react";
import { Button } from "../Button";
import styles from "./styles.module.css";
import { DefaultInput } from "../Defaultinput";

export const Form = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <DefaultInput id="meuInput" type="number" />
        </div>
        <div className={styles.formRow}>
          <p> Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={styles.formRow}>
          <Button icon={CirclePlayIcon} />
        </div>
      </form>
    </>
  );
};
