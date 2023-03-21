import styles from "./NotFound.module.css";
const NotFound = () => {
    return <div>
        <h1 className={styles.title}>Oops...</h1>
        <h2 className={styles.subtitle}>Похоже, такого мы не знаем, введите название другого города</h2>
    </div>
}

export default NotFound;