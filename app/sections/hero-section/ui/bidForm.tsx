import MessageBox from "@/app/share/message-box";
import {
    animationConfig__heroSection,
    transitionAnimation__heroSection,
} from "@/configs-and-data/heroSectionConfig";
import { motion } from "framer-motion";
import getPresetPackageMessage from "@/helpers/hero-section/getPresetPackageMessage";
import { IBidForm } from "@/types/hero-section/bidForm.type";
import styles from "../index.module.scss";

const BidForm = ({
    showMessageBox,
    isAnimate,
    handleSubmit,
    name,
    email,
    contact,
    message,
    showEditableMessage,
    servicePackage,
    setShowMessageBox,
    setName,
    setEmail,
    setContact,
    setMessage,
    formRef,
}: IBidForm) => {
    return (
        <div
            className={styles["root-hero-section__bid-form__bid"]}
            ref={formRef}
        >
            {showMessageBox && (
                <MessageBox
                    title="Успешно!"
                    message="Заявка успешно отправлена!"
                    setShow={setShowMessageBox}
                />
            )}

            <motion.div
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{
                    ...transitionAnimation__heroSection,
                    delay: .65,
                }}
                className={styles["root-hero-section__bid-form__bid__top"]}
            >
                <span>ЗАЯВКА</span>

                <h3>Обсудим вашу задачу</h3>

                <p>
                    Оставьте заявку — мы свяжемся с вами,
                    обсудим проект и предложим оптимальное решение.
                </p>
            </motion.div>

            <form onSubmit={handleSubmit}>

                <motion.input
                    initial={animationConfig__heroSection.initial}
                    animate={isAnimate ? animationConfig__heroSection.animate : {}}
                    transition={{
                        ...transitionAnimation__heroSection,
                        delay: .8,
                    }}
                    type="text"
                    placeholder="Ваше имя *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <motion.input
                    initial={animationConfig__heroSection.initial}
                    animate={isAnimate ? animationConfig__heroSection.animate : {}}
                    transition={{
                        ...transitionAnimation__heroSection,
                        delay: .9,
                    }}
                    type="email"
                    placeholder="Ваша почта *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <motion.input
                    initial={animationConfig__heroSection.initial}
                    animate={isAnimate ? animationConfig__heroSection.animate : {}}
                    transition={{
                        ...transitionAnimation__heroSection,
                        delay: 1,
                    }}
                    type="text"
                    placeholder="Телефон или ссылка на соцсеть *"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />

                <motion.textarea
                    initial={animationConfig__heroSection.initial}
                    animate={isAnimate ? animationConfig__heroSection.animate : {}}
                    transition={{
                        ...transitionAnimation__heroSection,
                        delay: 1.1,
                    }}
                    placeholder="Расскажите о вашем проекте"
                    value={
                        servicePackage
                            ? getPresetPackageMessage(servicePackage, message)
                            : message
                    }
                    onChange={(e) => setMessage(e.target.value)}
                    readOnly={!showEditableMessage}
                    className={!showEditableMessage ? styles.readOnly : ""}
                />

                <motion.button
                    initial={animationConfig__heroSection.initial}
                    animate={isAnimate ? animationConfig__heroSection.animate : {}}
                    transition={{
                        ...transitionAnimation__heroSection,
                        delay: 1.2,
                    }}
                    type="submit"
                >
                    Отправить заявку
                </motion.button>

                <motion.div
                    initial={animationConfig__heroSection.initial}
                    animate={isAnimate ? animationConfig__heroSection.animate : {}}
                    transition={{
                        ...transitionAnimation__heroSection,
                        delay: 1.3,
                    }}
                    className={styles["root-hero-section__bid-form__bid__checkbox"]}
                >
                    <input type="checkbox" required />

                    <p>
                        Я соглашаюсь на{" "}
                        <a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            обработку персональных данных
                        </a>
                    </p>
                </motion.div>
            </form>
        </div>
    );
};

export default BidForm;