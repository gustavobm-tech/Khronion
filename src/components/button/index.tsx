import styles from "./styles.module.css";

type ButtonProps = {
  icon: React.ElementType;
};

export const Button = ({ icon: Icon }: ButtonProps) => {
  return (
    <>
      <button className={styles.button}>
        <Icon />
      </button>
    </>
  );
};
