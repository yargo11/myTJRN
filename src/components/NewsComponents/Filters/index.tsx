import styles from './styles.module.scss';

export function Filters() {
    return (
        <>
            <hr className={styles.Hr} />
            <div className={styles.Container}>

                <p>Todas</p>
                <p>Decisões judiciais</p>
                <img src="/images/icons/options.svg" alt="Mais Opções" />

            </div>
            <hr />
        </>
    );
}