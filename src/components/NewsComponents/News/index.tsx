import styles from './styles.module.scss';

export function News() {
    return (

        <div className={styles.Container}>
            <div className={styles.NewsFeed}>
                <h1>Notítcias</h1>
                <p>
                    Molestie elementum pulvinar leo tincidunt molestie at ultrices morbi ornare. Nulla diam diam ut
                    dignissim. Justo, velit nunc nunc consectetur nunc nec dui. Purus quam at amet a arcu amet, erat.
                </p>
                <p>
                    <img src="/images/icons/bell.svg" alt="Notificações" />
                    Inscreva-se para receber atualizações desta página
                </p>
            </div>
            <div className={styles.AllNews}>

            </div>
        </div>

    )
}