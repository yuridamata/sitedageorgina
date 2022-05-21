import styles from "./styles.module.scss";
import Image from "next/image";

const Loading = ({ loading }) => {
  return (
    <div className={loading === true ? styles.loadingWrapper : styles.loadedWrapper}>
      <img src={"/logoGeorgina.png"} className={styles.logo} />
    </div>
  );
};

export default Loading;
