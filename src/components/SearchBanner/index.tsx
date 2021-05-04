import styles from './styles.module.scss';

import { FiMoreHorizontal } from 'react-icons/fi'

export function SearchBanner() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.categoryButtons}>
                    <button>Buscar no Site</button>
                    <button>Consulta Processual</button>
                    <button>Pesquisa de Jurisprudência</button>
                    <button>...</button>
                </div>
                <div className={styles.searchBar}>
                    <div>
                        <input type="text" placeholder="Buscar no TJRN..."></input>
                        <button type="submit">PESQUISAR</button>
                    </div>
                    <div className={styles.topSearched}>
                        Mais buscados:
                        <ul>
                            <li><a href="">Precatorios</a></li>
                            <li><a href="">Consulta processual</a></li>
                            <li><a href="">Estagio</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}