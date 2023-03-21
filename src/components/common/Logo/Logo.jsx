import logo from "../../../assets/images/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
    return <div className={styles.logoBlock}>
        <img src={logo} className={styles.logo} alt="Logo"/>
    </div>
}

export default Logo;