import styles from "../index.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__badge}>
                <span />
                <p>CLIENT REVIEWS</p>
            </div>
            <h2>
                Нам доверяют.
                <br />
                И этим мы гордимся.
            </h2>
            <p>
                Мы стремимся делать продукты,
                которые действительно помогают
                бизнесу развиваться.
                Ниже — отзывы клиентов,
                которые уже работали с нами.
            </p>
        </div>
    )
}


export default Hero;