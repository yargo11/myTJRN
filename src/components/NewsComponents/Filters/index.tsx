import styles from './styles.module.scss';

export function Filters() {
    return (
        <>
            <hr className={styles.Hr} />
            <div className={styles.Container}>

                <p>
                    <a href="#">
                        Todas
                    </a>
                </p>
                <p>
                    <a href="#">
                        Decisões judiciais
                    </a>
                </p>
                <img src="/images/icons/options.svg" alt="Mais Opções" />

            </div>
            <hr />
        </>
    );
}