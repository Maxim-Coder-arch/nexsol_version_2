import styles from "../index.module.scss";

const DemoInfo = () => {
    return (
        <div className={styles["about-root__demo__info"]}>
            <h3>О нас</h3>
            <p>
                <strong>В малом бизнесе слишком много хаоса.</strong> 
                <br /> 
                Вы разрываетесь между сайтом, клиентами и попытками настроить рекламу. А результат всё равно непредсказуем?
            </p>
        </div>
    )
}

export default DemoInfo;