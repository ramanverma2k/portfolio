import styles from "../styles/Recent.module.css";

function Recent() {
    return (
        <div className={styles.recent__wrapper}>
            <div className={styles.recent__blog}>Blog</div>
            <div className={styles.recent__project}>Project</div>
        </div>
    );
}

export default Recent;
