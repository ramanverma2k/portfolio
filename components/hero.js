import styles from "../styles/Home.module.css";
import Term from "./terminal";

export default function Hero() {
    return (
        <div>
            <div className={styles.hero}>
                <section className={styles.section}>
                    <h1 className={styles.greet}>
                        Hello,
                        <br />
                        My name is <strong>Raman Verma</strong>
                        <p className={styles.description}>
                            I am a full stack developer.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            <br />
                            Porro, nisi.
                        </p>
                    </h1>
                    <div className={styles.social}>
                        {`{ `}
                        <a href="#" className={styles.socialLink}>
                            Email
                        </a>
                        <a href="#" className={styles.socialLink}>
                            LinkedIn
                        </a>
                        <a href="#" className={styles.socialLink}>
                            Telegram
                        </a>
                        <a href="#" className={styles.socialLink}>
                            Github
                        </a>
                        {`}`}
                    </div>
                </section>
                <Term />
            </div>
            <div className={styles.content}></div>
        </div>
    );
}
