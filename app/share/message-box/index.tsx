import CloseIcon from "@/public/icons/close";
import styles from "./index.module.scss";

interface IMessageBox {
    title: string;
    message: string;
    setShow: (show: boolean) => void;
}

const MessageBox = ({ title, message, setShow }: IMessageBox) => {

    return (
        <div className={styles["message-box"]}>
            <div className={styles["message-box__window"]}>
                <div className={styles["message-box__window__header"]}>
                    <h2>{title}</h2>
                    <button onClick={() => setShow(false)}>
                        <CloseIcon />
                    </button>
                </div>

                <div className={styles["message-box__window__body"]}>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageBox;