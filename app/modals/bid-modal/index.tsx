import CloseIcon from "@/public/icons/close";
import styles from "./index.module.scss";


interface IProps {
    name: string;
    email: string;
    contact: string;
    message: string;
    onClose: () => void;
}


const BidModal = (props: IProps) => {
    const {
        name,
        email,
        contact,
        message,
    } = props;

    return (
        <div className={styles["bid-modal"]}>
            <div className={styles["bid-modal__window"]}>
                <div className={styles["bid-modal__window__header"]}>
                    <p>Ваша заявка отправлена!</p>
                    <button onClick={props.onClose}>
                        <CloseIcon />
                    </button>
                </div>

                <div className={styles["bid-modal__window__body"]}>
                    <div className={styles["bid-modal__window__body__item"]}>
                        <h2>Имя:</h2>
                        <span>{props.name}</span>
                    </div>
                    <div className={styles["bid-modal__window__body__item"]}>
                        <h2>Email:</h2>
                        <span>{props.email}</span>
                    </div>
                    <div className={styles["bid-modal__window__body__item"]}>
                        <h2>Контакт:</h2>
                        <span>{props.contact}</span>
                    </div>
                </div>

                <div className={styles["bid-modal__window__footer"]}>
                    <h2>Ваше сообщение</h2>
                    <div className={styles["bid-modal__window__footer__message"]}>
                        <p>{props.message.length ? props.message : "Пусто"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidModal;