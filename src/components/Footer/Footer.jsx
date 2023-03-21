import styles from "./Footer.module.css";

const Footer = (props) => {
    return (
        <footer className={styles.footer + " object-bottom"}>
            <div>
                <div className={styles.developer}>Иван Лысков</div>
                <div className={styles.footerLinks}>
                    <a target="_blank" href="https://github.com/Esteradfi">
                        GitHub
                    </a>
                    <a target="_blank" href="https://t.me/Esteradfi">
                        Telegram
                    </a>
                    <a target="_blank" href="mailto:lyskov.ivan.and@gmail.com">
                        Gmail
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;