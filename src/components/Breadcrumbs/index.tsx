import styles from './styles.module.scss';

export function Breadcrumbs() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <a href="#">
                    <img src="/images/icons/home.svg"/>
                </a>
                 / 
                <a href="#">
                    Infância, juventude e Família
                </a>

            </div>
        </div>
    )
}