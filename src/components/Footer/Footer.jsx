const Footer = (props) => {
    return (
        <div className="object-bottom">
            <div className="grid grid-cols-2">
                <div>Иван Лысков</div>
                <div className="grid grid-cols-3">
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
        </div>
    );
}

export default Footer;