import CloseIcon from "@/public/icons/close";
import { IMessageBox } from "@/types/share/message-box/messageBox.type";
import styles from "./index.module.scss";

const MessageBox = ({ title, message, setShow }: IMessageBox) => {
  return (
    <div className={styles["message-box"]}>
      <div className={styles["message-box__overlay"]} onClick={() => setShow(false)} />
      <div className={styles["message-box__window"]}>
        <div className={styles["message-box__window__header"]}>
          <h2>{title}</h2>
          <button onClick={() => setShow(false)} aria-label="Закрыть">
            <CloseIcon />
          </button>
        </div>
        <div className={styles["message-box__window__body"]}>
          <p>{message}</p>
        </div>
        <div className={styles["message-box__window__footer"]}>
          <button onClick={() => setShow(false)}>Понятно</button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;