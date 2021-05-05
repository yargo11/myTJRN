import styles from './styles.module.scss';

export function Footer() {
    return (
        <div className={styles.Container}>
            <ul>
                <li><a href="#">Membros</a></li>
                <li><a href="#">Multimidia</a></li>
                <li><a href="#">O que o tribunal faz</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>

    )
}