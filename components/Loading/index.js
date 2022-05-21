import styles from "./styles.module.scss";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <img src={"/logoGeorgina.png"} className={styles.logo} />
    </div>
  );
};

export default Loading;
